import express from "express";
import cors from "cors";
import connectionPool from "./utils/db.mjs"; // import db connection
import morgan from "morgan";

// create express app
const app = express();

// declare port number
const port = 4010;

// configure middleware
app.use(cors());
app.use(express.json());

// configure morgan
app.use(morgan("dev"));

// test route
app.get("/test", (req, res) => res.json("🟢 Server API is working"));

// get route for get profile
app.get("/profiles", (req, res) => {
  const profiles = {
      data: {
        name: "Natthakit Saetan",
        age: 29,
        bio: "I'm a software developer",
      },
    }

    res.json(profiles);

    return res;
})

// posts route for post blog
app.post("/posts", async (req, res) => {
    try {
      // access request body
      const newPost = {
        ...req.body,
        date: new Date(),
      };

      // check if all required fields are present
      if (
        !newPost.title ||
        !newPost.image ||
        !newPost.category_id ||
        !newPost.description ||
        !newPost.content ||
        !newPost.status_id
      ) {
        return res
          .status(400)
          .json({ message: "Server could not create post because there are missing data from client" });
      }

      // check if category_id and status_id is valid (number data type)
      if (typeof newPost.category_id !== "number" || typeof newPost.status_id !== "number") {
        return res
          .status(400)
          .json({ message: "Server could not create post because category_id and status_id must be number data type" });
      }
      

      // insert new post into database
      await connectionPool.query(
        "INSERT INTO posts (title, image, category_id, description, content, status_id, date) VALUES ($1, $2, $3, $4, $5, $6, $7)",
        [
          newPost.title,
          newPost.image,
          newPost.category_id,
          newPost.description,
          newPost.content,
          newPost.status_id,
          newPost.date
        ]
      );

      // return response
      return res.status(201).json({ message: "Created post successfully" });
    } catch (error) {
      // return error response
      console.log(error);
      return res.status(500).json({ message: "Server could not create post because database connection", error: error.message });
    }
  });

// get route for get specific post
app.get("/posts/:postId", async (req, res) => {
  try {
    // access request params
    const postId = req.params.postId;

    // get post from database
    const response = await connectionPool.query(
      "SELECT * FROM posts WHERE id = $1",
      [postId]
    );

    // check if post is not found
    if (response.rows.length === 0) {
      return res.status(404).json({ message: "Server could not find a requested post" });
    }

    // return response
    return res.status(200).json(response.rows[0]);
  } catch (error) {
    // return error response
    console.log(error);
    return res.status(500).json({ message: "Server could not read post because database connection", error: error.message });
  }
});

// put route for update post
app.put("/posts/:postId", async (req, res) => {
  try {
    // access request params
    const postId = req.params.postId;

    // check if all required fields are present
    if (
      !req.body.title ||
      !req.body.image ||
      !req.body.category_id ||
      !req.body.description ||
      !req.body.content ||
      !req.body.status_id
    ) {
      return res
        .status(400) 
        .json({ message: "Server could not update post because there are missing data from client" });
    }

    // access request body
    const updatedPost = {
      ...req.body,
      date: new Date(),
    };

    // update post in database
    const response = await connectionPool.query(
      "UPDATE posts SET title = $1, image = $2, category_id = $3, description = $4, content = $5, status_id = $6, date = $7 WHERE id = $8",
      [
        updatedPost.title,
        updatedPost.image,
        updatedPost.category_id,
        updatedPost.description,
        updatedPost.content,
        updatedPost.status_id,
        updatedPost.date,
        postId,
      ]
    );

    // check if post is not found
    if (response.rowCount === 0) {
      return res.status(404).json({ message: "Server could not find a requested post to update" });
    }

    // return response
    return res.status(200).json({ message: "Updated post successfully" });
  } catch (error) {
    // return error response
    console.log(error);
    return res.status(500).json({ message: "Server could not update post because database connection", error: error.message });
  }
});

// delete route for delete post
app.delete("/posts/:postId", async (req, res) => {
  try {
    // access request params
    const postId = req.params.postId;

    // delete post from database
    const response = await connectionPool.query(
      "DELETE FROM posts WHERE id = $1",
      [postId]
    );

    // check if post is not found
    if (response.rowCount === 0) {
      return res.status(404).json({ message: "Server could not find a requested post to delete" });
    }

    // return response
    return res.status(200).json({ message: "Deleted post successfully" });
  } catch (error) {
    // return error response
    console.log(error);
    return res.status(500).json({ message: "Server could not delete post because database connection", error: error.message });
  }
});

// test connection to database
const testConnection = async () => {
  await connectionPool.connect((err, client, release) => {
  if (err) {
    return console.error("🔴 Error acquiring client", err.stack);
  }
  client.query("SELECT NOW()", (err, result) => {
    release();
    if (err) {
      return console.error("🔴 Error executing query", err.stack);
    }
    console.log("🟢 Database connection successful:");
    console.log(result.rows);
  });
})
};

testConnection()

// start server
app.listen(port, () => console.log(`🚀 Server is running on http://localhost:${port}`));
import { Router } from "express";
import connectionPool from "../utils/db.mjs";
import { validatePost } from "../middlewares/post.validation.mjs";

const postsRouter = Router();

// posts route for post blog
postsRouter.post("/", [validatePost], async (req, res) => {
  try {
    // access request body
    const newPost = {
      ...req.body,
      date: new Date(),
    };

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
        newPost.date,
      ]
    );

    // return response
    return res.status(201).json({ message: "Created post successfully" });
  } catch (error) {
    // return error response
    console.log(error);
    return res.status(500).json({
      message: "Server could not create post because database connection",
      error: error.message,
    });
  }
});

// get route for get pagination posts
postsRouter.get("/", async (req, res) => {
  try {
    // setup pagination
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 6;
    const offset = (page - 1) * limit;

    // get posts from database based on pagination
    const postsResponse = await connectionPool.query(
      "SELECT * FROM posts LIMIT $1 OFFSET $2",
      [limit, offset]
    );
    const posts = postsResponse.rows;

    // count total posts and calculate total pages
    const totalPostsResponse = await connectionPool.query(
      "SELECT COUNT(*) FROM posts"
    );
    const totalPosts = parseInt(totalPostsResponse.rows[0].count);
    const totalPages = Math.ceil(totalPosts / limit);

    // calculate next page
    const nextPage = page < totalPages ? page + 1 : null;

    // return response
    return res.status(200).json({
      totalPosts: totalPosts,
      totalPages: totalPages,
      currentPage: page,
      limit: limit,
      posts: posts,
      nextPage: nextPage,
    });
  } catch (error) {
    // return error response
    console.error(error);
    return res.status(500).json({
      message: "Server could not read post because database connection",
      error: error.message,
    });
  }
});

// get route for get specific post
postsRouter.get("/:postId", async (req, res) => {
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
      return res
        .status(404)
        .json({ message: "Server could not find a requested post" });
    }

    // return response
    return res.status(200).json(response.rows[0]);
  } catch (error) {
    // return error response
    console.log(error);
    return res.status(500).json({
      message: "Server could not read post because database connection",
      error: error.message,
    });
  }
});

// put route for update post
postsRouter.put("/:postId", [validatePost], async (req, res) => {
  try {
    // access request params
    const postId = req.params.postId;

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
      return res
        .status(404)
        .json({ message: "Server could not find a requested post to update" });
    }

    // return response
    return res.status(200).json({ message: "Updated post successfully" });
  } catch (error) {
    // return error response
    console.log(error);
    return res.status(500).json({
      message: "Server could not update post because database connection",
      error: error.message,
    });
  }
});

// delete route for delete post
postsRouter.delete("/:postId", async (req, res) => {
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
      return res
        .status(404)
        .json({ message: "Server could not find a requested post to delete" });
    }

    // return response
    return res.status(200).json({ message: "Deleted post successfully" });
  } catch (error) {
    // return error response
    console.log(error);
    return res.status(500).json({
      message: "Server could not delete post because database connection",
      error: error.message,
    });
  }
});

export default postsRouter;
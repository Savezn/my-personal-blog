import express from "express";
import cors from "cors";
import connectionPool from "./utils/db.mjs"; // import db connection
import morgan from "morgan";
import postsRouter from "./routes/posts.mjs";

// create express app
const app = express();

// declare port number
const port = 4010;

// configure middleware
app.use(cors());
app.use(express.json());

// configure morgan
app.use(morgan("dev"));

// use posts router
app.use("/posts", postsRouter);

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
  };

  res.json(profiles);

  return res;
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
  });
};

testConnection();

// start server
app.listen(port, () =>
  console.log(`🚀 Server is running on http://localhost:${port}`)
);

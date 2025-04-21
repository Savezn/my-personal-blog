import express from "express";
import cors from "cors";

// create express app
const app = express();

// declare port number
const port = 4004;

// configure middleware
app.use(cors());
app.use(express.json());

// test route
app.get("/test", (req, res) => res.json("🟢 Server API is working"));

// profiles route
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

// start server
app.listen(port, () => console.log(`🚀 Server is running on http://localhost:${port}`));
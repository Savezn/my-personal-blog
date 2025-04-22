import pkg from "pg";
const { Pool } = pkg;

// declare db connection pool
const connectionPool = new Pool({
  connectionString: "postgresql://postgres:postgres@localhost:5432/Personal Blog",
})

export default connectionPool;
import * as pg from "pg";
const { Pool } = pg.default;

// declare db connection pool
const connectionPool = new Pool({
  connectionString: "postgres://postgres:postgres@localhost:5432/Personal Blog",
})

export default connectionPool;
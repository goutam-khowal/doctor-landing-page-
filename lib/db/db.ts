import { Pool } from "pg";
import { configDotenv } from "dotenv";

configDotenv(); // Load environment variables from .env.local

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: true,
  },
});

pool
  .connect()
  .then(() => {
    console.log("Connected to Neon database successfully.");
  })
  .catch((err) => {
    console.error("Error connecting to Neon database:", err);
  });

export default pool;

import type { NextApiRequest, NextApiResponse } from "next";
import pool from "@/lib/db/db";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Log the DATABASE_URL to verify it's being loaded
  console.log("DATABASE_URL:", process.env.DATABASE_URL);

  try {
    const result = await pool.query("SELECT NOW()");
    res.status(200).json({ time: result.rows[0].now });
  } catch (err) {
    console.error("Connection failed:", err);
    res.status(500).json({ error: "DB connection failed" });
  }
}

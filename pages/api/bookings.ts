import type { NextApiRequest, NextApiResponse } from "next";
import pool from "@/lib/db/db"; // PostgreSQL pool setup

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { name, email, phone, appointmentDate } = req.body;

    console.log("Received data:", req.body);

    if (!name || !email || !phone || !appointmentDate) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    try {
      const result = await pool.query(
        `
        INSERT INTO bookings (name, email, phone, appointment_date)
        VALUES ($1, $2, $3, $4)
        RETURNING *
        `,
        [name, email, phone, appointmentDate]
      );

      res.status(200).json(result.rows[0]);
    } catch (error) {
      console.error("Database error:", error);
      res.status(500).json({ error: "Failed to save booking" });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}

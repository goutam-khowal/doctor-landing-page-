// // pages/api/contact.ts
// import type { NextApiRequest, NextApiResponse } from "next";
// import pool from "@/lib/db/db"; // Ensure this points to your pool setup

// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse
// ) {
//   if (req.method === "POST") {
//     const { name, email, mobile, message } = req.body;

//     // Log the received data
//     console.log("Received data:", req.body);

//     if (!name || !email || !mobile || !message) {
//       return res.status(400).json({ error: "Missing fields" });
//     }

//     try {
//       const result = await pool.query(
//         "INSERT INTO contacts (name, email,mobile, message) VALUES ($1, $2, $3) RETURNING *",
//         [name, email, mobile, message]
//       );
//       res.status(200).json(result.rows[0]);
//     } catch (error) {
//       console.error("Database error:", error);
//       res.status(500).json({ error: "Failed to save contact" });
//     }
//   } else {
//     res.setHeader("Allow", ["POST"]);
//     res.status(405).end(`Method ${req.method} Not Allowed`);
//   }
// }
// pages/api/contact.ts
import type { NextApiRequest, NextApiResponse } from "next";
import pool from "@/lib/db/db"; // Ensure this points to your pool setup

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { fullname, email, mobile, message } = req.body;

    // Log the received data
    console.log("Received data:", req.body);

    if (!fullname || !email || !mobile || !message) {
      return res.status(400).json({ error: "Missing fields" });
    }

    try {
      const result = await pool.query(
        "INSERT INTO contact_details (fullname, email, mobile, message) VALUES ($1, $2, $3, $4) RETURNING *",
        [fullname, email, mobile, message]
      );
      res.status(200).json(result.rows[0]);
    } catch (error) {
      console.error("Database error:", error);
      res.status(500).json({ error: "Failed to save contact" });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}

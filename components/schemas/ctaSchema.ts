import { z } from "zod";

// Zod schema for validation
export const ctaSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
});

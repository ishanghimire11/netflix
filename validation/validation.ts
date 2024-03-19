import { z } from "zod";

export const signUpformSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address" }),
});

export type SignUpformSchema = z.infer<typeof signUpformSchema>;

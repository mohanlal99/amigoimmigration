import { z } from "zod";

export const schema = z.object({
  name: z
    .string()
    .min(2, { message: "Name must be at least 2 characters long" })
    .regex(/^[a-zA-Z\s]+$/, {
      message: "Name should only contain letters and spaces",
    })
    .transform((name) => name.trim()),
  email: z
    .string()
    .email({ message: "Please enter a valid email address" })
    .regex(/@(?:gmail\.com|yahoo\.com|outlook\.com)$/, {
      message: "Please use a valid email domain (e.g., gmail)",
    }),
  mobile: z.string().regex(/^\+?[1-9]\d{1,14}$/, {
    message: "Please enter a valid phone number",
  }),
  dob: z
    .string()
    .nonempty({ message: "Please select your date of birth" })
    .refine(
      (dob) => {
        const age = new Date().getFullYear() - new Date(dob).getFullYear();

        return age >= 18;
      },
      { message: "You must be at least 18 years old" },
    ),
  degree: z.string().nonempty({ message: "Please select your degree" }),
  department: z.string().nonempty({ message: "Please select your department" }),
  cv: z
    .string()
    .url({ message: "CV upload failed. Please re-upload your CV." })
    .regex(/\.(pdf|docx|doc|txt|jpg|jpeg|png)$/i, {
      message: "CV must be a valid document (PDF, DOCX, DOC)",
    }),
  terms: z.boolean().refine((val) => val === true, {
    message: "You must agree to the terms and conditions",
  }),
});

export type FormData = z.infer<typeof schema>;

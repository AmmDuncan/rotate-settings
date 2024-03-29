"use client";

import { z } from "zod";

export const AccountFormSchema =
  typeof window === "undefined"
    ? z.any()
    : z.object({
        display_name: z.string().min(1, "Company name is required"),
        contact_name: z.string().min(1, "Contact name is required"),
        contact_email: z.string().min(1, "Email is required"),
        industry: z.string().min(1, "Industry is required"),
        company_logo: z
          .union([z.instanceof(File), z.string()])
          .optional()
          .nullable(),
      });

export type AccountFormInput = z.infer<typeof AccountFormSchema>;
export type AccountFormDefaults = {
  display_name: string;
  company_logo: string;
  contact_name: string;
  contact_email: string;
  industry: string;
};

import * as z from "zod";

export const formSchema = z.object({
  title: z.string().min(3, "Title must be at least 3 characters"),
  description: z
    .string()
    .min(10, "Description must be at least 3 characters")
    .max(400, "Description must be less than 400 characters"),
  located: z
    .string()
    .min(3, "Location must be at least 3 characters")
    .max(100, "Location must be less than 100 characters"),
  imageUrl: z.string().url("Image URL must be a valid URL"),
  startDateTime: z.date().min(new Date(), "Start date must be in the future"),
  endDateTime: z.date().min(new Date(), "End date must be in the future"),
  categoryId: z.string(),
  price: z.string(),
  isFree: z.boolean(),
  url: z.string().url("URL must be a valid URL"),
});

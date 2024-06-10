import * as z from "zod"

export const SignupValidation = z.object({
    name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
    username: z.string().min(2, { message: 'Username must be at least 2 characters.' }),
    email: z.string().email(),
    password: z.string().min(8, { message: 'Password must be at least 8 characters.' })
})

export const SigninValidation = z.object({
    email: z.string().email(),
    password: z.string().min(8, { message: 'Password must be at least 8 characters.' })
})

export const PostValidation = z.object({
    caption: z.string().min(5, { message: "Caption must be at least 5 characters long." }).max(2200, { message: "Caption length cannot exceed 2,200 characters." }),
    file: z.custom<File[]>(),
    location: z.string().min(1, { message: "Location is required" }).max(1000, { message: "Location length cannot exceed 1000 characters." }),
    tags: z.string(),
  });
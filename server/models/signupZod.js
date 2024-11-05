const {z} =require("zod")

const signUpmodel=z.object({
    username: z
    .string({required_error:"Name id  required"})
    .trim()
    .min(3,{message:"name must be of 3 char"})
    .max(210,{message:"name must not be more than 210 chars"}),

    email: z
    .string({required_error:"email id  required"})
    .trim()
    .email({message:"invalid email"})
    .min(3,{message:"email must be at least 3 chars"})
    .max(233,{message:"email must not be more than 233 chars"}),

    password: z
    .string({required_error:"Name id  required"})
    .trim()
    .min(3,{message:"pass must be of 3 char"})
    .max(233,{message:"pass must not be more than 233 chars"}),

    phone: z
    .string({required_error:"mobile no required"})
    .trim()
    .min(10,{message:"phone num must be of 3 char"})
    .max(10,{message:"phone must not be more than 10 chars"}),
})

module.exports=signUpmodel
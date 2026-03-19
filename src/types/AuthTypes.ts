import { z } from "zod";
import {
  LoginSchema,
  RegisterSchema,
  UserSchema,
  AuthResponseSchema,
} from "@/schemas/auth.schema";

export type LoginType = z.infer<typeof LoginSchema>;
export type RegisterType = z.infer<typeof RegisterSchema>;

export type UserType = z.infer<typeof UserSchema>;

export type AuthResponseType = z.infer<typeof AuthResponseSchema>;
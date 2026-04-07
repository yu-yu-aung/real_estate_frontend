import { login, register } from "@/services/authServices";
import { AuthResponseType, LoginType, RegisterType } from "@/types/AuthTypes";
import { mutationOptions, useMutation } from "@tanstack/react-query";
import { error } from "console";
import { toast } from "sonner";

export const registerMutation = mutationOptions<AuthResponseType, Error, RegisterType>({
  mutationFn: register, 
  onSuccess: (data) => {
    console.log("register data", data);
    toast.success("Register succeeded"); 
  }, 
  onError: (error) => {
    toast.error(error.message || "Register failed");
  },
}); 

export const loginMutation = mutationOptions<AuthResponseType, Error, LoginType>({
  mutationFn: login, 
  onSuccess: (data) => {
    console.log("register data", data);
    toast.success("Welcome back"); 
  }, 
  onError: (error) => {
    toast.error(error.message || "Log in failed");
  },
});
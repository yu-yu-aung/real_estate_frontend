import { LoginType, RegisterType } from "@/types/AuthTypes";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL; 

export const register = async (data: RegisterType) => {
  const res = await fetch(`${BASE_URL}/auth/register.php`, {
    method: "POST", 
    headers: {
      "Content-Type": "application/json",
    }, 
    body: JSON.stringify(data),
  });

  return res.json(); 
}

export const login = async (data: LoginType) => {
  const res = await fetch(`${BASE_URL}/auth/login.php`, {
    method: "POST", 
    headers: {
      "Content-Type": "application/json",
    }, 
    body: JSON.stringify(data),
  }); 

  return res.json(); 
}
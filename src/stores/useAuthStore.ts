import { create } from "zustand"

type AuthTypes = {
  isLoggedIn: boolean, 
  user: any; 
  login: (user: any) => void; 
  logout: () => void; 
}; 

const useAuthStore = create<AuthTypes>((set) => ({
  isLoggedIn: false,
  user: null,

  login: (user) => 
    set({
      isLoggedIn: true, 
      user,
    }), 

    logout: () => 
      set({
        isLoggedIn: false, 
        user: null,
      }),
}));

export default useAuthStore
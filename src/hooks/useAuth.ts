import { useContext } from "react";
import { AuthContext } from "../contexts/useAuth";

export function useAuth() {
   const context = useContext(AuthContext)
   if (!context) {
    throw new Error ('useAuth must be whitin an AuthProvider')
   }
   return context
}
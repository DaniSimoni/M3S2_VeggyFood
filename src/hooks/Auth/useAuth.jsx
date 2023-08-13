import { useContext } from "react";
import { AuthContext } from "../../context/Auth/Auth.context";

export const useAuth = () => {
    const provider = useContext(AuthContext);

    if(!provider){
        throw new Error("useAuth deve ser usado dentro de um AuthProvider");
    }
    
    return provider;
}
import { useContext } from "react";
import { ShoppingCartContext } from "../../context/Cart/ShoppingCart.context";

export const useShoppingCart = () => {
    const provider = useContext(ShoppingCartContext);

    if(!provider){
        throw new Error("useShoppingCart deve ser usado dentro de um ShoppingCartProvider");
    }

    return provider;
}
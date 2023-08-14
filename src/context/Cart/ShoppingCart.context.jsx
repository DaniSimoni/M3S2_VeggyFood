import { createContext, useState } from "react";
import PropTypes from 'prop-types';

export const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({ children }) => {

    const [produtos, setProdutos] = useState([]);
    const [cartItems, setCartItems] = useState([]);

    const value = {
        produtos, 
        setProdutos,
        cartItems, 
        setCartItems,
    };

    return(
        <ShoppingCartContext.Provider value={value}>
            { children }
        </ShoppingCartContext.Provider>
    )
}

ShoppingCartProvider.propTypes = {
    children: PropTypes.node,
}
import { createContext, useState } from "react";
import PropTypes from 'prop-types';

export const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({ children }) => {

    const [produtos, setProdutos] = useState([]);

    const value = {
        produtos, 
        setProdutos,
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
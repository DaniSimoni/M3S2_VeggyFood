import { createContext, useState } from 'react';
import PropTypes from "prop-types";

/* import IconLogin from '../../public/images/IconLogin.png' */


export const HeaderContext = createContext({
    data: {
        iconHeader: '',
        buttonHeader: ''
    },
    setData: () => {},
});

export const HeaderProvider = ({ children }) => {
    const [data, setData] = useState({
        iconHeader: '../../../public/images/IconLogin.png',
        buttonHeader: 'Aguarde...' ,
    });

    return(
        <HeaderContext.Provider value={{data, setData}}>
         { children }
        </HeaderContext.Provider>
    )
};

    HeaderProvider.propTypes = {
       children: PropTypes.node.isRequired,
 }; 
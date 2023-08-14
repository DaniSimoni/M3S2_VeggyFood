import * as Styled from './HeaderComponent.style'
import { useContext } from 'react';
import { HeaderContext } from '../../context/HeaderContext/Header.context';


import Logo from '../../../public/images/Logo.png'

/* import IconLogin from '../../../public/images/IconLogin.png' */

import { BsCart4 } from "react-icons/bs";

import  { DropdownComponent } from '../Dropdown/Dropdown.component';
import { useShoppingCart } from '../../hooks/Shop/useShoppingCart';
import { useNavigate } from 'react-router-dom';



export const HeaderComponent = () => {
    const dropdownOptions = ['Sair']

    const { cartItems } = useShoppingCart();

    const navigate = useNavigate();
        
    const { data } = useContext(HeaderContext);

    const handleCarrinho = () => {
        navigate('/carrinho');
    }

    return(
        <Styled.HeaderContainer>
            <Styled.LogoImg onClick={() => navigate('/home')} src={Logo}></Styled.LogoImg>

            <Styled.NavBarHeader>
            
            <Styled.SectionButtonHeader>

                <Styled.ButtonHeader>Quem somos?</Styled.ButtonHeader>

                <Styled.ButtonHeader>Contato</Styled.ButtonHeader>

                <Styled.IconCarrinho onClick={handleCarrinho}><BsCart4/>
                <Styled.CartStatus>{cartItems.length}</Styled.CartStatus>
                </Styled.IconCarrinho>
                
                 <Styled.ButtonHeader id='buttonHeader'>
                    {data.buttonHeader} 
                
                </Styled.ButtonHeader>
                 <DropdownComponent options={dropdownOptions}/>

            </Styled.SectionButtonHeader>
            

            </Styled.NavBarHeader>
        </Styled.HeaderContainer>
    )
}
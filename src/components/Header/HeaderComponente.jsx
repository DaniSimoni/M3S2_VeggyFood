import * as Styled from './HeaderComponent.style'

import { useContext } from 'react';
import { HeaderContext } from '../../context/HeaderContext/Header.context';

import Logo from '../../../public/images/Logo.png'
import { useNavigate } from 'react-router-dom';
/* import IconLogin from '../../../public/images/IconLogin.png' */

import { BsCart4 } from "react-icons/bs";



export const HeaderComponent = () => {

    const { data } = useContext(HeaderContext)

    const navigate = useNavigate();

    const handleLogin = () => {
        navigate('/')
    }

    return(
        <Styled.HeaderContainer>
            <Styled.LogoImg src={Logo}></Styled.LogoImg>

            <Styled.NavBarHeader>
            
            <Styled.SectionButtonHeader>

                <Styled.ButtonHeader>Quem somos?</Styled.ButtonHeader>

                <Styled.ButtonHeader>Contato</Styled.ButtonHeader>

                <Styled.IconCarrinho><BsCart4/>
                
                </Styled.IconCarrinho>
                <Styled.CartStatus>1</Styled.CartStatus>
                

                <Styled.ButtonHeader id='buttonHeader' onClick={handleLogin}>
                    {data.buttonHeader}
                
                    <Styled.IconHeader id='iconHeader' src={data.iconHeader}/> 
                
                </Styled.ButtonHeader>

            </Styled.SectionButtonHeader>
            

            </Styled.NavBarHeader>
        </Styled.HeaderContainer>
    )
}
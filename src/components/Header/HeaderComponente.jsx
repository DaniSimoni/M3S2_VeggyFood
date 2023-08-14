import * as Styled from './HeaderComponent.style'
import { useContext } from 'react';
import { HeaderContext } from '../../context/HeaderContext/Header.context';


import Logo from '../../../public/images/Logo.png'

/* import IconLogin from '../../../public/images/IconLogin.png' */

import { BsCart4 } from "react-icons/bs";

import  { DropdownComponent } from '../Dropdown/Dropdown.component';



export const HeaderComponent = () => {
const dropdownOptions = ['Sair']
    
const { data } = useContext(HeaderContext)
    return(
        <Styled.HeaderContainer>
            <Styled.LogoImg src={Logo}></Styled.LogoImg>

            <Styled.NavBarHeader>
            
            <Styled.SectionButtonHeader>

                <Styled.ButtonHeader>Quem somos?</Styled.ButtonHeader>

                <Styled.ButtonHeader>Contato</Styled.ButtonHeader>

                <Styled.IconCarrinho><BsCart4/>
                <Styled.CartStatus>1</Styled.CartStatus>
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
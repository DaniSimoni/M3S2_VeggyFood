import * as Styled from './CarrinhoPage.style';
import { useContext, useEffect } from 'react';
import { HeaderContext } from '../../context/HeaderContext/Header.context';
import { CardCheckout } from '../../components/CardCheckout/CardCheckout.component';


export const CarrinhoPage = () => {

    const { setData } = useContext(HeaderContext)
    useEffect(() => {
      setData({       
        iconHeader: '/images/userIcon.png',
        buttonHeader: 'Olá, Nome' ,
    }) 
        
      }, []);

    return (

        <Styled.ContainerCheckout>
           <CardCheckout/>
           
        </Styled.ContainerCheckout>

    )
}
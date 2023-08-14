import * as Styled from './CheckoutPage.style';
import { useContext, useEffect } from 'react';
import { HeaderContext } from '../../context/HeaderContext/Header.context';



export const CheckoutPage = () => {

    const { setData } = useContext(HeaderContext)
    useEffect(() => {
      setData({       
        iconHeader: '/images/userIcon.png',
        buttonHeader: 'Conclua a compra, Nome' ,
    }) 
        
      }, []);

    return (

      <Styled.ContainerCheckout>

          <Styled.TituloCheckout>Forma de Pagamento</Styled.TituloCheckout>

          <Styled.ButtonCheckout>PIX</Styled.ButtonCheckout>
          <Styled.ButtonCheckout>Boleto</Styled.ButtonCheckout>
          <Styled.ButtonCheckout>Cartão de Crédito</Styled.ButtonCheckout>
          <Styled.ButtonCheckout>Transferência Bancária</Styled.ButtonCheckout>



      </Styled.ContainerCheckout>

    )
}
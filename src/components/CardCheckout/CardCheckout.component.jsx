import * as Styled from './CardCheckout.style';
import { PiShoppingCartSimpleLight } from "react-icons/pi";
import { CardProductCheckout } from '../CardProductCheckout/CardProductCheckout.component'

export const CardCheckout = () => {
  return (
    <>

      <Styled.CardContainer>
        <Styled.TitleCheckout><PiShoppingCartSimpleLight /> Carrinho de Compras</Styled.TitleCheckout>
        <CardProductCheckout />
        <CardProductCheckout />
        <Styled.Checkout>
          <Styled.SubTotal>Subtotal <Styled.Value>R$ 50,00</Styled.Value></Styled.SubTotal>
          <Styled.SubTotal>Desconto <Styled.Value>R$ 10,00</Styled.Value></Styled.SubTotal>
          <Styled.Total>TOTAL <Styled.Value>R$ 40,00</Styled.Value></Styled.Total>
          <Styled.Button type="button">Comprar</Styled.Button>
        </Styled.Checkout>
      </Styled.CardContainer>



    </>


  )
  }
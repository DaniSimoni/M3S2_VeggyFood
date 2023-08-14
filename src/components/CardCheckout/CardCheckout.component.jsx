import * as Styled from './CardCheckout.style';
import { PiShoppingCartSimpleLight } from "react-icons/pi";
import { CardProductCheckout } from '../CardProductCheckout/CardProductCheckout.component'
import { useShoppingCart } from '../../hooks/Shop/useShoppingCart';
import { formatCurrency } from '../../utils/format/formatCurrency';
import { useNavigate } from 'react-router-dom';

export const CardCheckout = () => {

  const { cartItems } = useShoppingCart();

  const total = cartItems.reduce((acc, item) => item.price + acc, 0);

  const navigate = useNavigate();

  const handleCheckoutPage = () => {
    navigate('/checkout');
  }

  return (
    <>

      <Styled.CardContainer>
        <Styled.TitleCheckout><PiShoppingCartSimpleLight /> Carrinho de Compras</Styled.TitleCheckout>
        
        { cartItems.map((cartItem) => <CardProductCheckout key={cartItem.id} data={cartItem} /> ) }

        
        {/* <Styled.Checkout>
          <Styled.SubTotal>Subtotal <Styled.Value>R$ 50,00</Styled.Value></Styled.SubTotal>
        </Styled.Checkout>

        <Styled.Checkout> 
          <Styled.SubTotal>Desconto <Styled.Value>R$ 10,00</Styled.Value></Styled.SubTotal>
        </Styled.Checkout> */}

        <Styled.Checkout> 
          <Styled.Total>TOTAL <Styled.Value>{formatCurrency(total, 'BRL')}</Styled.Value></Styled.Total>
        </Styled.Checkout>   

        <Styled.Checkout>
          <Styled.Button type="button" onClick={() => navigate('/home')}>Voltar</Styled.Button>
          <Styled.Button type="button" onClick={handleCheckoutPage}>Comprar</Styled.Button>
        </Styled.Checkout> 
      </Styled.CardContainer>



    </>


  )
  }
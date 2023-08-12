import * as Styled from './ConfirmaCompraPage.style';
import { useContext, useEffect } from 'react';
import { HeaderContext } from '../../context/HeaderContext/Header.context';



export const ConfirmaCompraPage = () => {

    const { setData } = useContext(HeaderContext)
    useEffect(() => {
      setData({       
        iconHeader: '/images/userIcon.png',
        buttonHeader: 'Parabéns, Nome!' ,
    }) 
        
      }, []);

    return (

      <Styled.ContainerCheckout>

          <Styled.TituloCheckout>Sua compra foi aprovada!</Styled.TituloCheckout>
          <Styled.ParagrafoCheckout>Em breve você receberá um e-mail com as informações sobre a entrega</Styled.ParagrafoCheckout>
          <Styled.ContainerImagem src={'../../../public/images/imagens-principal.png'}></Styled.ContainerImagem>

          <Styled.AgradecimentoCheckout>Obrigado por escolher a VEGGY food</Styled.AgradecimentoCheckout>

          <Styled.MensagemCheckout>A vida é mais saudável com produtos selecionados.</Styled.MensagemCheckout>

      </Styled.ContainerCheckout>

    )
}
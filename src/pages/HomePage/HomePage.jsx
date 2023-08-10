import * as Styled from './HomePage.style';
import { useContext, useEffect } from 'react';
import { HeaderContext } from '../../context/HeaderContext/Header.context';
import { InputComponent } from '../../components/Input/InputComponent';
import { CardProduct } from './../../components/CardProduct/CardProduct.component';



export const HomePage = () => {

    const { setData } = useContext(HeaderContext)
    useEffect(() => {
      setData({       
        iconHeader: '/images/userIcon.png',
        buttonHeader: 'Olá, Nome' ,
    }) 
        
      }, []);


    return(
      <>
      <Styled.BodyHome>
        <Styled.BannerArea>
          <Styled.TituloBanner>Promoção da Semana</Styled.TituloBanner>
          <Styled.BannerImg src='../../../public/images/Promoção.png'></Styled.BannerImg>
        </Styled.BannerArea>
        <Styled.InputAreaHome>
          <InputComponent label={'O que você está procurando?'}></InputComponent>
        </Styled.InputAreaHome>

        <Styled.SubTitulo>Nossos Produtos</Styled.SubTitulo>

        <Styled.CardProdutoAreaHome>
            
            <CardProduct/>
            <CardProduct/>
            <CardProduct/>
            <CardProduct/>
            <CardProduct/>

        </Styled.CardProdutoAreaHome>

      </Styled.BodyHome>
      </>
    )
}
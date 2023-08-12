import * as Styled from './HomePage.style';
import { useContext, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { HeaderContext } from '../../context/HeaderContext/Header.context';
import { CardProduct } from './../../components/CardProduct/CardProduct.component';
import { useAuth } from '../../hooks/Auth/useAuth';
import { LocalStorageService } from '../../services/LocalStorage.service';
import { SearchComponent } from '../../components/Search/SearchComponent';



export const HomePage = () => {

    const { auth } = useAuth();
    const userLogado = LocalStorageService.get('users');

    const { setData } = useContext(HeaderContext);
    useEffect(() => {
      setData({       
        iconHeader: '/images/userIcon.png',
        buttonHeader: 'Olá, Nome' ,
      }) 

    }, []);

    const renderHomePage = () => {
      return(
        <>
        <Styled.BodyHome>
          <Styled.BannerArea>
            <Styled.TituloBanner>Promoção da Semana</Styled.TituloBanner>
            <Styled.BannerImg src='../../../public/images/Promoção.png'></Styled.BannerImg>
          </Styled.BannerArea>
          
          <SearchComponent />
  
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

    return userLogado || auth.isLogged ? renderHomePage() : <Navigate to="/" />
}
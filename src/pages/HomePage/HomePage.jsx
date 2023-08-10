import * as Styled from './HomePage.style';
import { useContext, useEffect } from 'react';
import { HeaderContext } from '../../context/HeaderContext/Header.context';

export const HomePage = () => {

    const { setData } = useContext(HeaderContext)
    useEffect(() => {
      setData({       
        iconHeader: '/images/userIcon.png',
        buttonHeader: 'Olá, Nome' ,
    }) 
        
      }, []);


    return(
      <Styled.BodyHome>
        <Styled.Titulo>Olá</Styled.Titulo>
      </Styled.BodyHome>
    )
}
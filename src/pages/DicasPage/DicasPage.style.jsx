import styled from 'styled-components';
import { COLORS } from '../../utils/styles/style'

export const ContainerDicas = styled.div` 
    width: 100%;
    height: 100%;
    margin: 5vh 20vw;


`
export const DicasTitulo = styled.h1`
    color: ${COLORS.$textPrimary};

`
export const Subtitulos = styled.h3`
    margin-top: 2vh;
`
export const Texto = styled.p `
    margin-top: 2vh;
    text-align: justify;
`

export const Lista = styled.ul `
    margin: 5vh 7vh;
    text-decoration: none;
`
export const ItensLista = styled.li `
     list-style-type: none;
`



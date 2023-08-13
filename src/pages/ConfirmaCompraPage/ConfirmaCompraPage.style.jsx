import styled from 'styled-components';
import { COLORS } from '../../utils/styles/style';

export const ContainerCheckout = styled.div`
    width: 70vw;
    height: 70vh;
    margin: 0 auto;
    background-color: transparent;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const TituloCheckout = styled.h3`
    font-family: Almarai;
    font-size: 36px;
`
export const AgradecimentoCheckout = styled.h1`
    margin-top: 1rem;
    color: ${COLORS.$black};
    font-size: 1.7rem;
    margin-top: -47%;
    margin-left: -25%;
    font-family: Chewy;
`

export const ParagrafoCheckout = styled.p`
    margin-top: 1rem;
    color: ${COLORS.$textPrimary};
    font-size: 1.2rem;
    font-family: Almarai;
    margin-top: 2rem;
`

export const ContainerImagem = styled.img`
    display: flex;
    width: 50vw;
    height: 35vw;
    margin-left: 60%;
    margin-top: 2%;
    position: relative;
`

export const MensagemCheckout = styled.p`
    margin-top: 1rem;
    color: ${COLORS.$textPrimary};
    font-size: 1rem;
    margin-top: 25%;
    margin-left: -22%;
    font-family: Almarai;

`

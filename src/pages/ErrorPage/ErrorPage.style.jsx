import styled from 'styled-components'
import { COLORS } from '../../utils/styles/style'
export const ContainerCheckout = styled.div`
    width: 100%;
    height: 100%;
`

export const ContainerImagem = styled.img`
    display: flex;
    width: 57vw;
    height: 40vw;
    margin-left: 40%;
    margin-top: 10%;
    position: relative;
`

export const ErroTitulo = styled.h1`
    display: flex;
    font-size: 15rem;
    position: absolute;
    color: ${COLORS.$textPrimary};
    margin-top: -45%;
    margin-left: 25%;
`

export const ErroParagrafo = styled.h1`
    display: flex;
    position: absolute;
    color: ${COLORS.$textPrimary};
    margin-top: -10%;
    margin-left: 25%;
`
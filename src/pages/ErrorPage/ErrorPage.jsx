import * as Styled from './ErrorPage.style';

export const ErrorPage = () => {


    return (

        <Styled.ContainerCheckout>
            <Styled.ContainerImagem src={'../../../public/images/imagens-principal.png'}></Styled.ContainerImagem>
            <Styled.ErroTitulo>404</Styled.ErroTitulo>
            <Styled.ErroParagrafo>Ops! Houve um erro...</Styled.ErroParagrafo>
        </Styled.ContainerCheckout>

    )
}
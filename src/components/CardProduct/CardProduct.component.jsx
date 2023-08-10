import * as Styled from './CardProduct.style';

export const CardProduct = () => {
    return (
        <>

            <Styled.CardContainer>
                <Styled.CardImage />
                <Styled.CardText>
                    <Styled.ProductTitle>Banana Nanica</Styled.ProductTitle>
                    <Styled.ProductText>Fonte de carboidratos, Rica em fibras, Possui vitamina C, vitamina B6, provitamina A, Rica em minerais como potássio, fósforo, magnésio, zinco, aminas biogênicas e fitoesteróis, que exercem muitos efeitos positivos na saúde humana.</Styled.ProductText>
                    <Styled.ProductPrice>R$ 5,00 Kg</Styled.ProductPrice>


                </Styled.CardText>

            </Styled.CardContainer>


        </>


    )
}

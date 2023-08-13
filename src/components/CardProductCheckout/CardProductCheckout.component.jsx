import * as Styled from './CardProductCheckout.style';



export const CardProductCheckout = () => {
    return (

        <>

            <Styled.CardContainer>
                <Styled.ImageContainer src='https://imgur.com/07xIzNX'/>
                <Styled.TitleProduct>Banana<Styled.MeasureProduct>Venda por kg</Styled.MeasureProduct></Styled.TitleProduct>
                
                <Styled.ContainerListCheckoutProduct>
                    
                        <Styled.Item>Preço <Styled.Price>R$5,00</Styled.Price></Styled.Item>
                       
                         
                        <Styled.Item>Quantidade<Styled.Price>5</Styled.Price></Styled.Item>
                        <Styled.Item>Total<Styled.Price>R$ 25,00</Styled.Price></Styled.Item>
                       
                    

                </Styled.ContainerListCheckoutProduct>
                
                
               
            </Styled.CardContainer>



        </>






    )

}

import { formatCurrency } from '../../utils/format/formatCurrency';
import * as Styled from './CardProductCheckout.style';

import PropTypes from 'prop-types';

export const CardProductCheckout = ({ data }) => {
    const { name, image, price } = data;


    return (

        <>

            <Styled.CardContainer>
                <Styled.ImageContainer src={image}/>
                <Styled.TitleProduct>{name}<Styled.MeasureProduct>Venda por kg</Styled.MeasureProduct></Styled.TitleProduct>
                
                <Styled.ContainerListCheckoutProduct>
                    
                        <Styled.Item>Preço <Styled.Price>{formatCurrency(price, 'BRL')}</Styled.Price></Styled.Item>
                       
                         
                        {/* <Styled.Item>Quantidade<Styled.Price></Styled.Price></Styled.Item>
                        <Styled.Item>Total<Styled.Price></Styled.Price></Styled.Item> */}
                       
                    

                </Styled.ContainerListCheckoutProduct>
                
                
               
            </Styled.CardContainer>



        </>






    )

}
CardProductCheckout.propTypes = {
    data: PropTypes.shape({
        name: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,        
        price: PropTypes.number.isRequired,
        
    }).isRequired,
}
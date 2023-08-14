import styled from 'styled-components';
import { COLORS } from '../../utils/styles/style';

export const CardContainer = styled.div`
  display: flex;
  justify-content: left;
  align-self: center;
  max-width: 1000px;
  height: auto;
  border: 1px solid ;
  margin: 30px;
  
`

export const ImageContainer = styled.img`
   display: flex;
   margin-left:15px;
   margin-top: 10px;
   max-width: 100px;
   max-height: 80px;
   width: 5vw;
   height: 10vh;
   border: 1px solid ${COLORS.$danger};


`

export const TitleProduct = styled.p`
  font-size: 24px;
  font-family: 'Almarai';
  font-weight: 400;
  padding-left: 15px;
  margin-top: 1rem;

`

export const MeasureProduct = styled.p`
  display: flex;
  flex-direction: column;
  font-size: 12px;
  

`
export const ContainerListCheckoutProduct = styled.div`
   display: flex; 

 
  
`
  


 export const Item = styled.p`
    margin-top: 1rem;
    margin-left: 100px;   
    font-size: 16px;
    list-style: none;
  

 `

 export const Price = styled.p`
  font-size:20px;
  font-weight: bold;
  color: ${COLORS.$primary};


 `

 export const Icon = styled.div`
  font-size: 40px;
  color: ${COLORS.$danger};
  

 `


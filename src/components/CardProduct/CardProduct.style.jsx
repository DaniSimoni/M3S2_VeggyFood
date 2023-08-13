import styled from 'styled-components'
import { COLORS } from '../../utils/styles/style'


export const CardContainer = styled.div`
  max-width: 300px;
  width: 100%;
  display: flex;
  flex-direction: column;

  cursor: pointer;
  border-radius: 10px;
  transition: all .4s ease-in-out;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0px 2px 10px rgba(0,0,0,0.5);
  }

`

export const CardImage = styled.img`
  width: 100%;
  height: 200px;
  background-color: #AAA;
  border-radius: 10px 10px 0 0;

`

export const CardText = styled.div`
  background-color: ${COLORS.$secondary};
  border-radius: 0 0 10px 10px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 12.5rem;
  font-family: Almarai;
`

export const ProductTitle = styled.p`
   font-size: 20px;
   font-style: normal;
   font-family: Almarai;
   color: ${COLORS.$textPrimary};

`

export const ProductText = styled.p`
   font-size: 10px;
   font-style: normal;
   font-family: Almarai;
   color: ${COLORS.$textSecondary};
   font-size: 12px;
   text-align: justify;

`

export const ProductPrice = styled.h4`
   font-size: 20px;
   font-style: normal;
   font-family: 'Almarai'


`
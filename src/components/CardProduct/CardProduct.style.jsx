import styled from 'styled-components'


export const CardContainer = styled.div`
  max-width: 280px;
  width: 100%;
  display: flex;
  flex-direction: column;


`

export const CardImage = styled.img`
  width: 100%;
  height: 200px;
  background-color: #AAA;
  border-radius: 10px 10px 0 0;

`

export const CardText = styled.div`

  background-color: #BEE7CC;
  padding: 1rem;
  display: flex;
  flex-direction: column;

`

export const ProductTitle = styled.p`
   font-size: 20px;
   font-style: normal;
   font-family: 'Almarai';
   color: #0B4802;

`

export const ProductText = styled.p`
   font-size: 10px;
   font-style: normal;
   font-family: 'Almarai';
   color: #3E3C3C;
   font-size: 12px;
   text-align: justify;

`

export const ProductPrice = styled.h4`
   font-size: 20px;
   font-style: normal;
   font-family: 'Almarai'


`
import styled from 'styled-components'


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

  &:last-child {
    margin-bottom: 1.2rem;
  }

`

export const CardImage = styled.img`
  width: 100%;
  height: 200px;
  background-color: #AAA;
  border-radius: 10px 10px 0 0;

`

export const CardText = styled.div`
  background-color: #BEE7CC;
  border-radius: 0 0 10px 10px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 12.5rem;
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
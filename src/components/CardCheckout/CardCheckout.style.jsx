import styled from"styled-components";
import { COLORS } from "../../utils/styles/style";

export const CardContainer = styled.div`
  margin-left: 1rem auto; 
  max-width: 100%;
  height: auto;   
  padding: 2rem;

`

export const TitleCheckout = styled.h2`
  font-size: 36px;
  font-weight: normal;
  font-family: Almarai;
  padding-left: 30px;
` 

export const Checkout = styled.div`
   display: flex;
   flex-direction: column;
   align-items: flex-end;
   margin-right:50px;
   line-height: 1px;
  margin-top: 2rem;
   height: auto;
`

export const SubTotal = styled.p`
font-size: 24px;
font-family:Almarai;
  
`
export const Value = styled.span`
  font-size: 24px;
  font-weight: bold;
  font-family: Almarai;
  color: #F41313;
  
`
export const Total = styled.p`
  font-size: 24px;
  color:${COLORS.$primary};
  font-family: Almarai;
  font-weight: bold;
`
export const Button = styled.button`
 width: 150px;
 height: 50px;
 border-radius: 20px;
 border: none;
 font-size: 20px;
 font-weight: bold;
 font-family: 'Inter' sans serif;
 background-color: ${COLORS.$primary};
 color: ${COLORS.$white};
 margin-bottom: 10px;
 cursor: pointer;



`
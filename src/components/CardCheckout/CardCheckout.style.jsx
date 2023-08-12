import styled from"styled-components";

export const CardContainer = styled.div`
  margin-left: 1rem auto; 
  max-width: 100%;
  height: auto;   
  padding: 2rem;

`

export const TitleCheckout = styled.h2`
  font-size: 36px;
  font-weight: normal;
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
  
`
export const Value = styled.span`
  font-size: 24px;
  font-weight: bold;
  color: #F41313;
  
`
export const Total = styled.p`
  font-size: 24px;
  color:#3C9B2C;
  font-weight: bold;
`
export const Button = styled.button`
 width: 150px;
 height: 50px;
 border-radius: 20px;
 border: none;
 font-size: 20px;
 font-weight: bold;
 font-family: 'Inter';
 background-color: #3C9B2C;
 color: #FFFFFF;
 margin-bottom: 10px;
 cursor: pointer;



`
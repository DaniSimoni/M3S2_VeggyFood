import styled from"styled-components";

export const CardContainer = styled.div`
  margin-left: 20px; 
  max-width:1000px;
  height:100%;
  border: 1px solid black;
  box-shadow: 0px 4px 4px #3C9B2C;
  border-radius: 6px;
    

`


export const TitleCheckout = styled.h2`
 
  font-size: 36px;
  font-weight: normal;
  font-family: 'Almarai';
  padding-left: 30px;

    
` 

export const Checkout = styled.div`
   display: flex;
   flex-direction: column;
   align-items: flex-end;
   margin-right:50px;
   line-height: 1px;
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
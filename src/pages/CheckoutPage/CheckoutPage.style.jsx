import styled from 'styled-components';


export const ContainerCheckout = styled.div`
    width: 70vw;
    height: 70vh;
    margin: 0 auto;
    background-color: transparent;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const ButtonCheckout = styled.button`
    width: 45vw;
    height: 15vh;
    background-color: #3C9B2C;
    margin-top: 2rem;
    border-radius: 1rem;
    color: white;
    font-size: 2rem;
    cursor: pointer;    
    font-family: Almarai;
    font-size: 30px;
    background-color: #3C9B2C;
    opacity: ${({ $active }) => {return $active ? 1 : .5 }};
    
    &:disabled {
        cursor: not-allowed;
    }

    &:hover {
        opacity: .85;
    }
`


export const TituloCheckout = styled.h2`
    margin-top: 1rem;
    font-family: Almarai;
`
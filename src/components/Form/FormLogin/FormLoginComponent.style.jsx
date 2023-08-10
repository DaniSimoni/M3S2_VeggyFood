import styled from 'styled-components';
import PropTypes from 'prop-types';

export const Form = styled.form`
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 3rem;
    gap: 1rem;

    background-color: #fff;
`;

export const FormHeader = styled.legend`
    width: 100%;
    display: flex;
    align-items: center;
    position: relative;
    justify-content: center;
    margin-bottom: 3rem;

   h1::after {
        content: '';
        display: block;
        width: 5rem;
        height: .3rem;
        background-color: #3C9B2C;
        margin: 0 auto;
        position: absolute;
        border-radius: 10px;
    }
`

export const InputBox = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-bottom: 2.2rem;
`

export const Button = styled.button`
    width: 9.375rem;
    height: 3.125rem;
    border: none;
    border-radius: 6.25rem;
    
    cursor: pointer;
    
    font-size: .93rem;
    font-weight: 500;
    color: #fff;
    
    background-color: #3C9B2C;
    opacity: ${({ $active }) => {return $active ? 1 : .5 }};
    
    &:disabled {
        cursor: not-allowed;
    }

    &:hover {
        opacity: .85;
    }
`

Button.propTypes = {
    $active: PropTypes.bool
}

export const LinkBox = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 2.2rem;
`;

export const CriarConta = styled.a`
    text-decoration: none;
    color: #3C9B2C;
    cursor: pointer;
`
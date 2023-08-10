import styled from 'styled-components';
import PropTypes from 'prop-types';

export const InputBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 80%;
    margin: auto;
`

export const Label = styled.label`
    font-size: 1.2rem;
    font-weight: 600;
    color: ${({$hasError}) => $hasError ? '#EE0808' : '#D9D9D9'};
    margin-bottom: 1rem;
`
Label.propTypes = {
    $hasError: PropTypes.bool
}

export const Input = styled.input`
    width: 100%;
    padding: 0.8125rem 15.1875rem 1.1875rem 0.75rem;
    border-radius: 0.9375rem;
    font-size: .8rem;
    border: 1px solid ${({$hasError}) => {return $hasError ? '#EE0808' : '#D9D9D9'}};

    &::placeholder{
        color: ${({$hasError}) => $hasError ? '#EE0808' : 'rgba(0, 0, 0, 0.40);'};
    }

    &:hover {
        background-color: #f2f2f2;
    }
`
Input.propTypes = {
    $hasError: PropTypes.bool
}

export const InputContainer = styled.div`
    position: relative;
    width: 100%;
`
export const Icon = styled.button`
    position: absolute;
    top: 1rem;
    right: 1.2rem;
    background: transparent;
    border: 0;
    
    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 1.3rem;
    color: ${({$hasError}) => {return $hasError ? '#EE0808' : '#3C9B2C'}};
`
Icon.propTypes = {
    $hasError: PropTypes.bool
}

export const Error = styled.p`
    font-size: .8rem;
    color: #EE0808;
`
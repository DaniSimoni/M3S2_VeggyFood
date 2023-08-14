import styled from 'styled-components';
import PropTypes from 'prop-types';
import { COLORS } from '../../utils/styles/style';
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
    color: ${({$hasError}) => $hasError ? `${COLORS.$darkRed}` : `${COLORS.$softGray}`};
    margin-bottom: 1rem;
`
Label.propTypes = {
    $hasError: PropTypes.bool
}

export const Input = styled.input`
    width: 100%;
    padding: 1.2rem 1.5rem;
    border-radius: 0.9375rem;
    font-size: .8rem;
    border: 1px solid ${({$hasError}) => {return $hasError ? `${COLORS.$darkRed}` : `${COLORS.$softGray}`}};

    &::placeholder{
        color: ${({$hasError}) => $hasError ? `${COLORS.$darkRed}` : 'rgba(0, 0, 0, 0.40);'};
    }

    &:hover {
        background-color: ${COLORS.$ligthGray};
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
    top: 1.2rem;
    right: 1.2rem;
    background: transparent;
    border: 0;
    
    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 1.3rem;
    color: ${({$hasError}) => {return $hasError ? `${COLORS.$darkRed}` : `${COLORS.$primary}`}};
`
Icon.propTypes = {
    $hasError: PropTypes.bool
}

export const Error = styled.p`
    font-size: .8rem;
    color: ${COLORS.$danger};
`
import styled from 'styled-components';
import { COLORS } from '../../utils/styles/style';

export const SearchBar = styled.form`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 20%;
    background-color: ${COLORS.$darkGreen};

`;

export const InputBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 80%;
    margin: auto;
`

export const InputContainer = styled.div`
    display: flex;
    width: 100%;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding-right: .3rem;
    background-color: ${COLORS.$white};
    box-shadow: 0 4px 4px 0 ${COLORS.$textSecondary};
`;

export const Label = styled.label`
    font-size: 1.2rem;
    font-weight: 600;
    color: ${COLORS.$softGray};
    margin-bottom: 1rem;
    font-family: Almarai;
`

export const Input = styled.input`
    width: 100%;
    padding: 1.2rem 1.5rem;
    font-size: .8rem;
    border: none;
    border-right: 1px solid ${COLORS.$softGray};

    &::placeholder {
        color: ${COLORS.$textSecondary};
        font-family: Almarai;
    }
`

export const ButtonSearch = styled.button`
    background-color: ${COLORS.$white};
    border: none;
    padding: .35rem .35rem;
    font-size: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${COLORS.$textPrimary};
    cursor: pointer;
`;
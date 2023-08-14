import styled from 'styled-components';
import { COLORS } from '../../utils/styles/style';

export const LoginPageContainer = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const LoginCard = styled.div`
    width: 80%;
    height: 85vh;
    display: flex;
    box-shadow: 0px 0px 10px 0px ${COLORS.$primary};
`;

export const ImageBox = styled.div`
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0px 0px 10px 0px #3c9b2e;
    background-color: ${COLORS.$softGreen};
    

    img {
        width: 45.25rem;
        margin: 1rem auto 0;
        filter: drop-shadow(0 0 10px rgba(0, 0, 0, 0.65));
    }

`;
import styled from 'styled-components';
import { COLORS } from '../utils/styles/style';

export const App = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    background-color: ${COLORS.$white};


`

export const HeaderLayout = styled.div`
    width: 100vw;
    height: 30vh;
    justify-content: center;
    background-color: ${COLORS.$white};

`

export const MainLayout = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    background-color: ${COLORS.$white};
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  
`

export const Content = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    margin: 0;

 `
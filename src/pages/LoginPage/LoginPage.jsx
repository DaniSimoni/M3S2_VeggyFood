import { FormLoginComponent } from '../../Components/Form/FormLogin/FormLoginComponent.jsx';
import * as Styled from './LoginPage.style.jsx';
import { useContext, useEffect } from 'react';


export const LoginPage = () => {

    return (
        <Styled.LoginPageContainer>
            <Styled.LoginCard>
                <Styled.ImageBox>
                    
                </Styled.ImageBox>

                <FormLoginComponent />
            </Styled.LoginCard>
        </Styled.LoginPageContainer>
    )
}
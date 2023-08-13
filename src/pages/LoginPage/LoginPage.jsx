import { FormLoginComponent } from '../../components/Form/FormLogin/FormLoginComponent.jsx';
import * as Styled from './LoginPage.style.jsx';
import  LogoLogin  from '../../../public/images/LogoLogin.svg'


export const LoginPage = () => {

    return (
        <Styled.LoginPageContainer>
            <Styled.LoginCard>
                <Styled.ImageBox>
                   <img src={LogoLogin}></img>
                </Styled.ImageBox >

                <FormLoginComponent />
            </Styled.LoginCard>
        </Styled.LoginPageContainer>
    )
}
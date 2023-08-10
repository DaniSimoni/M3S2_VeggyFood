import { InputComponent } from '../../Input/InputComponent';
import * as Styled from './FormLoginComponent.style';

export const FormLoginComponent = () => {
    return (
        <Styled.Form>
            <Styled.FormHeader>
                <h1>Login</h1>
            </Styled.FormHeader>
            <Styled.InputBox>
                <InputComponent 
                    type="email"
                    id="email"
                    placeholder="Digite seu e-mail"

                />

                <InputComponent 
                    type="password"
                    id="password"
                    placeholder="Digite sua senha"
                    
                />

            </Styled.InputBox>
            
            <Styled.Button type="submit" $active={true}>Entrar</Styled.Button>
            
            <Styled.LinkBox>
                <p>Não tem uma conta? <Styled.CriarConta>Cadastre-se</Styled.CriarConta></p>
            </Styled.LinkBox>
        </Styled.Form>
    )
}
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { InputComponent } from '../../Input/InputComponent';
import * as Styled from './FormLoginComponent.style';
import { UserService } from '../../../services/User.service';
import { useAuth } from '../../../hooks/Auth/useAuth';
import { LocalStorageService } from '../../../services/LocalStorage.service';

export const FormLoginComponent = () => {

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const navigate = useNavigate();

    const { setAuth } = useAuth();

    const loginSubmit = async (data) => {
        const { email, password } = data;

        const user = await UserService.ShowByEmail(email);

        if(!user) {
            toast.error("Usuário não encontrado");
            reset();
            return;
        }

        password === user.password
            ? redirectToHome(user)
            : toast.error("Usuário ou senha incorretos");

    }

    const redirectToHome = (user) =>{
        const userWithoutPassword = {
            email: user.email,
        }
        LocalStorageService.set('users', userWithoutPassword);

        setAuth({
            user: userWithoutPassword,
            isLogged: true,
        });       

        navigate('/home');
    }

    return (
        <Styled.Form onSubmit={ handleSubmit(loginSubmit) }>
            <Styled.FormHeader>
                <h1>Login</h1>
            </Styled.FormHeader>
            <Styled.InputBox>
                <InputComponent 
                    type="email"
                    id="email"
                    placeholder="Digite seu e-mail"
                    register={{...register('email', {required: "O email é obrigatório", validate: {matchPath: (v) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v)} }) }}
                    error={ errors.email }
                />

                <InputComponent 
                    type="password"
                    id="password"
                    placeholder="Digite sua senha"
                    register={ {...register('password', {required: "A senha é obrigatória", minLength: {value: 8, message: "A senha deve ter no mínimo 8 caracteres"} })} }
                    error={ errors.password }
                />

            </Styled.InputBox>
            
            <Styled.Button type="submit" $active={ !errors.email && !errors.password } disabled={ errors.email || errors.password } >Entrar</Styled.Button>
            
            <Styled.LinkBox>
                <p>Não tem uma conta? <Styled.CriarConta>Cadastre-se</Styled.CriarConta></p>
            </Styled.LinkBox>
        </Styled.Form>
    )
}
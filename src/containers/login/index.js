import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { Link, useHistory } from 'react-router-dom';
import { useUser } from '../../hooks/UserContext';
import LoginImg from '../../assets/hamburguer.jpeg';
import api from '../../services/api.js';
import { Button, ErrorMessage } from '../../components';
import {
  Container,
  LoginImage,
  ContainerItens,
  Label,
  Input,
  SignInLink
} from './styles.js';
import paths from '../../constants/paths.js';

export function Login() {
  const history = useHistory(); // Correção: Adicione os parênteses para chamar useHistory
  const { putUserData, userData } = useUser();

  const schema = Yup.object().shape({
    email: Yup.string().email("Digite um email válido").required("O email é obrigatório"),
    password: Yup.string().required("A senha é obrigatória").min(6, "A senha deve ter no mínimo 6 caracteres"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit = async (clientData) => {
    try {
      const { data } = await toast.promise(
        api.post('sessions', {
          email: clientData.email,
          password: clientData.password
        }),
        {
          pending: 'Verificando seus dados',
          success: 'Seja bem-vindo(a) 😁',
          error: 'Verifique seu e-mail e senha'
        }
      );

      putUserData(data);
      console.log(data);

      setTimeout(() => {
        if (data.admin) {
          history.push('/pedidos');
        } else {
          history.push('/');
        }
      }, 1000);
    } catch (error) {
      console.error('Erro ao fazer login:', error);
    }
  };

  return (
    <Container>
      <LoginImage src={LoginImg} alt="hamburger" />
      <ContainerItens>
        <h1>Login</h1>

        <form noValidate onSubmit={handleSubmit(onSubmit)}>
          <Label>Email</Label>
          <Input
            type='email'
            {...register('email')}
            error={errors.email?.message}
          />
          <ErrorMessage>{errors.email?.message}</ErrorMessage>

          <Label>Senha</Label>
          <Input
            type='password'
            {...register('password')}
            error={errors.password?.message}
          />
          <ErrorMessage>{errors.password?.message}</ErrorMessage>

          <Button type='submit' style={{ marginTop: 50, marginBottom: 25 }}>Sign in</Button> {/* Correção: marginBottom em vez de marginBotton */}
        </form>

        <SignInLink>
          Não possui conta? <Link to={paths.Register}>Sign Up</Link>
        </SignInLink>
      </ContainerItens>
    </Container>
  );
}
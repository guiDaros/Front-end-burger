import React from 'react';
import { useForm } from 'react-hook-form'

import { toast } from 'react-toastify';

import * as Yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { Link } from 'react-router-dom';

import RegisterImg from '../../assets/barbecue.jpg'
import api from '../../services/api.js'
import { Button, ErrorMessage } from '../../components';
import {
  Container,
  RegisterImage,
  ContainerItens,
  Label,
  Input,
  SignInLink
} from './styles.js';


export function Register() {

  const schema = Yup.object().shape({
    name: Yup.string().required('O seu nome e obrigatorio'),
    email: Yup.string().email("Digite um email valido").required("O email e obrigatorio"),
    password: Yup.string().required("A senha e obrigatoria").min(6, "A senha deve ter no minimo 6 digitos"),
    confirmPassword: Yup.string().required("A senha e obrigatoria").oneOf([Yup.ref('password')], 'As senhas devem ser iguais')
  })

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  })

  const onSubmit = async clientData => {
    const response = await toast.promise(
      api.post('users', {
        name: clientData.name,
        email: clientData.email,
        password: clientData.password
      }, { validateStatus: () => true }),
      {
        pending: 'Verificando seus dados',
        success: 'Cadastro criado com sucesso! 😎',
        error: 'Verifique seus dados'
      }
    )


    console.log(response)
  }


  return (
    <Container>
      <RegisterImage src={RegisterImg} alt="hamburger" />
      <ContainerItens>
        <img />
        <h1>Cadastre-se</h1>

        <form noValidate onSubmit={handleSubmit(onSubmit)}>
          <Label error={errors.name?.message}>Nome</Label>
          <Input
            type='text'
            {...register('name')}
            error={errors.name?.message}
          />
          <ErrorMessage>{errors.name?.message}</ErrorMessage>

          <Label error={errors.email?.message}>Email</Label>
          <Input
            type='email'
            {...register('email')}
            error={errors.email?.message}
          />
          <ErrorMessage>{errors.email?.message}</ErrorMessage>

          <Label error={errors.password?.message}>Senha</Label>
          <Input
            type='password'
            {...register('password')}
            error={errors.password?.message}
          />
          <ErrorMessage>{errors.password?.message}</ErrorMessage>

          <Label error={errors.confirmPassword?.message}>Confirmar Senha</Label>
          <Input
            type='password'
            {...register('confirmPassword')}
            error={errors.confirmPassword?.message}
          />
          <ErrorMessage>{errors.confirmPassword?.message}</ErrorMessage>

          <Button type='submit' style={{ marginTop: 50, marginBotton: 25 }}>Sing up</Button>

        </form>

        <SignInLink>
          Ja possui conta? <Link to="/login">Sign in</Link>
        </SignInLink>
      </ContainerItens>
    </Container>
  );
}


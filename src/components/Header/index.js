import React from "react";
import { useHistory } from "react-router-dom";

import { useUser } from '../../hooks/UserContext'

import Profile from '../../assets/profileicon.png'
import Cart from '../../assets/cartIcon.png'

import { Container, ContainerLeft, PageLink, ContainerRight, ContainerTextInfo, Line, PageLinkExit } from './styles'


export function Header() {
    const { logout, userData } = useUser()
    const {
        push,
        location: { pathname }
    } = useHistory()

    const logoutUser = () => {
        logout()
        push('/login')
    }

    console.log()

    return (
        <Container>
            <ContainerLeft>
                <PageLink
                    onClick={() => push('/')}
                    isActive={pathname === '/'}
                >
                    Home
                </PageLink>
                <PageLink
                    onClick={() => push('/produtos')}
                    isActive={pathname.includes('produtos')}
                >
                    Ver Produtos
                </PageLink>
            </ContainerLeft>
            <ContainerRight>
                <PageLink>
                    <img src={Profile} alt="perfil" />
                </PageLink>
                <Line></Line>
                <PageLink
                    onClick={() => push('/carrinho')}
                >
                    <img src={Cart} alt="carrinho" />
                </PageLink>
                <ContainerTextInfo>
                    <p>Ola, {userData.name}</p>
                    <PageLinkExit onClick={logoutUser}>Sair</PageLinkExit>
                </ContainerTextInfo>
            </ContainerRight>
        </Container>
    )
}

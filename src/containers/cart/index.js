import React from "react";

import CartPageLogo from '../../assets/CartHeader.jpg'
import { Container, CartImage, Wrapper } from './styles'
import { CartItems, CartResume } from "../../components";

export function Cart() {
    return (
        <Container>
            <CartImage src={CartPageLogo} alt="cabecalho do carrinho" />
            <Wrapper>
                <CartItems />
                <CartResume />
            </Wrapper>
        </Container>
    )
}

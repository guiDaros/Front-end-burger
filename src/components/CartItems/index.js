import React from "react";

import { useCart } from '../../hooks/CartContext'
import { Container, Header, Body, EmptyCart } from './styles'
import formatCurrency from '../../utils/formatCurrency'
import { Zoom } from "react-toastify";
import trashCanPng from '../../assets/trashCan.png'


export function CartItems() {
    const { CartProducts, increaseProducts, decreaseProducts, deleteProducts } = useCart()

    console.log(CartProducts)
    return (
        <Container>
            <Header>
                <p></p>
                <p>Itens</p>
                <p>Preco</p>
                <p>Quantidade</p>
                <p>Total</p>
            </Header>

            {CartProducts && CartProducts.length > 0 ? CartProducts.map(product => (

                <Body key={product.id}>
                    <img src={product.url} />
                    <p>{product.name}</p>
                    <p>{formatCurrency(product.price)}</p>
                    <div className="quantityContainer">
                        <button onClick={()=> decreaseProducts(product.id)}>-</button>
                        <p>{product.quantity}</p>
                        <button onClick={() => increaseProducts(product.id)}>+</button>
                    </div>
                    <p>{formatCurrency(product.quantity * product.price)}</p>
                    <button onClick={()=> deleteProducts(product.id)}><img src={trashCanPng}/></button>
                </Body>
            ))
                : (
                    <EmptyCart>Carrinho Vazio</EmptyCart>
                )
            }

        </Container>
    )
}

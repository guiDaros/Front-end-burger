// import React from 'react'
// import PropTypes from 'prop-types'

// import { toast } from 'react-toastify';

// import { useCart } from '../../hooks/CartContext'

// import {Button} from '../Button'
// import { Container, Img, ProductName, ProductPrice } from './styles'


// export function CardProduct({ product }) {
//     const { PutProductInCart } = useCart()
//     return (
//         <Container>
//             <Img src={product.url} alt='imagem do produto' />
//             <div>
//                 <ProductName>{product.name}</ProductName>
//                 <ProductPrice>{product.formatedPrice}</ProductPrice>
//                 <Button onClick={()=> PutProductInCart(product)} >Adicionar</Button>
//             </div>
//         </Container>
//     )
// }

// CardProduct.PropTypes = {
//     product: PropTypes.object
// }


import React from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import { useCart } from '../../hooks/CartContext';
import { Button } from '../Button';
import { Container, Img, ProductName, ProductPrice } from './styles';

export function CardProduct({ product }) {
  const { PutProductInCart } = useCart();

  // Function to handle the "Adicionar" button click
  const handleAddToCart = () => {
    PutProductInCart(product);

    // Show a toast notification
    toast.success(`Adicionado ${product.name} no seu carrinho`, {
      position: 'top-right',
      autoClose: 2000, // Toast will automatically close after 3 seconds
    });
  };

  return (
    <Container>
      <Img src={product.url} alt="imagem do produto" />
      <div>
        <ProductName>{product.name}</ProductName>
        <ProductPrice>{product.formatedPrice}</ProductPrice>
        <Button onClick={handleAddToCart}>Adicionar</Button>
      </div>
    </Container>
  );
}

CardProduct.propTypes = {
  product: PropTypes.object,
};

import React, { useEffect, useState } from "react";

import PropTypes from 'prop-types'

import ProductsLogo from '../../assets/Products-logo.png'
import {
    Container,
    ProductsImg,
    CategoryButton,
    CategoriesMenu,
    ProductsContainer
} from './styles'
import formatCurrency from '../../utils/formatCurrency'
import api from '../../services/api'
import { CardProduct } from "../../components";



export function Products({location: {state}}) {

    let categoryId = 0
    if(state?.categoryId){
        categoryId = state.categoryId
    }

    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [activeCategory, setActiveCategory] = useState(categoryId);

    useEffect(() => {
        async function loadCategories() {
            try {
                const { data, status } = await api.get('categories');

                const newCategories = [{ id: 0, name: 'Todas' }, ...data]

                if (status === 200) {
                    setCategories(newCategories);
                } else {
                    console.error('A resposta da API não foi bem-sucedida:', status, data);
                }
            } catch (error) {
                console.error('Ocorreu um erro ao buscar categorias:', error);
            }
        }


        async function loadProducts() {
            try {
                const { data: allProducts, status } = await api.get('products');

                const newProducts = allProducts.map(product => {
                    return { ...product, formatedPrice: formatCurrency(product.price) }
                })

                if (status === 200) {
                    setProducts(newProducts);
                } else {
                    console.error('A resposta da API não foi bem-sucedida:', status, data);
                }
            } catch (error) {
                console.error('Ocorreu um erro ao buscar categorias:', error);
            }
        }

        loadProducts()
        loadCategories();
    }, []);

    useEffect(() => {
        if (activeCategory === 0) {
            setFilteredProducts(products)
        } else {
            const newFilteredProducts = products.filter(product => product.category_id === activeCategory)

            setFilteredProducts(newFilteredProducts)
        }
    }, [activeCategory, products])

    return (
        <Container>
            <ProductsImg src={ProductsLogo} alt="Logo" />
            <CategoriesMenu>
                {categories && categories.map(category => (
                    <CategoryButton
                        type="button"
                        key={category.id}
                        isActiveCategory={activeCategory === category.id}
                        onClick={() => {
                            setActiveCategory(category.id)
                        }}>
                        {category.name}
                    </CategoryButton>
                ))}
            </CategoriesMenu>
            <ProductsContainer>
                {filteredProducts && filteredProducts.map(product => (
                    <CardProduct key={product.id} product={product} />
                ))}
            </ProductsContainer>
        </Container>
    )
}

Products.PropTypes = {
    location: PropTypes.object
}


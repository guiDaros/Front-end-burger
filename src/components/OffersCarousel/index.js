import React, { useEffect, useState } from "react";
import api from '../../services/api';
import { Container, CarouselText, ImgSwiper, CarouselWrapper, RitoCadillaco, Button, ProductDescription } from './styles';
import formatCurrency from "../../utils/formatCurrency";
import { useCart } from "../../hooks/CartContext";
import { useHistory } from "react-router-dom";

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/bundle'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './swiperStyles.css'

export function OffersCarousel() {
    const [offers, setOffers] = useState([]);
    const [slidesPerView, setSlidePerView] = useState(2);
    const { PutProductInCart } = useCart()
    const { push } = useHistory()

    useEffect(() => {
        async function loadOffers() {
            try {
                const { data, status } = await api.get('products');

                const onlyOffers = data
                    .filter(product => product.offer)
                    .map(product => {
                        return { ...product, formatedPrice: formatCurrency(product.price) }
                    })

                if (status === 200) {
                    setOffers(onlyOffers);
                } else {
                    console.error('A resposta da API não foi bem-sucedida:', status, data);
                }
            } catch (error) {
                console.error('Ocorreu um erro ao buscar categorias:', error);
            }
        }

        loadOffers();
    }, []);

    useEffect(() => {
        function handleResize() {
            if (window.innerWidth < 720) {
                setSlidePerView(1);
            } else {
                setSlidePerView(3);
            }
        }

        handleResize(); // Chamada inicial

        window.addEventListener("resize", handleResize)

        return () => {
            window.removeEventListener('resize', handleResize); // Remover ouvinte quando o componente for desmontado
        };
    }, []);

    return (
        <Container>
            <CarouselText>Ofertas</CarouselText>
            <CarouselWrapper>
                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    slidesPerView={slidesPerView}
                    //pagination={{ clickable: true }}
                    navigation
                    spaceBetween={30}
                >
                    {offers && offers.map(product => (
                        <SwiperSlide key={product.id}>
                            <RitoCadillaco>
                                <ImgSwiper
                                    src={product.url}
                                    alt="foto do produto"
                                    className="slidItem"
                                />
                                <ProductDescription>
                                    <p>{product.name}</p>
                                    <p>{product.formatedPrice}</p>
                                </ProductDescription>
                                <Button onClick={() => {
                                    PutProductInCart(product)
                                    push('/carrinho')
                                }  
                                }>
                                    Peça Agora
                                </Button>
                            </RitoCadillaco>
                        </SwiperSlide>
                    ))}

                </Swiper>
            </CarouselWrapper>
        </Container>
    );
}


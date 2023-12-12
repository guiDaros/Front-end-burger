import React, { useEffect, useState } from "react";
import api from '../../services/api';
import imageLoading from '../../assets/Searching Image.png'
import { Container, CarouselText, ImgSwiper, CarouselWrapper, RitoCadillaco, Button } from './styles';

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/bundle'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './swiperStyles.css'

export function CategoryCarousel() {
    const [categories, setCategories] = useState([]);
    const [slidesPerView, setSlidePerView] = useState(2);

    useEffect(() => {
        async function loadCategories() {
            try {
                const { data, status } = await api.get('categories');
                if (status === 200) {
                    setCategories(data);
                } else {
                    console.error('A resposta da API não foi bem-sucedida:', status, data);
                }
            } catch (error) {
                console.error('Ocorreu um erro ao buscar categorias:', error);
            }
        }

        loadCategories();
    }, []);

    useEffect(() => {
        function handleResize() {
            if (window.innerWidth < 720) {
                setSlidePerView(1);
                // } if (window.innerWidth < 600) {
                //     setSlidePerView(3);
                // } if (window.innerWidth < 900) {
                //     setSlidePerView(4);
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
            <CarouselText>Categorias</CarouselText>
            <CarouselWrapper>
                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    slidesPerView={slidesPerView}
                    //pagination={{ clickable: true }}
                    navigation
                >
                    {categories && categories.map(category => (
                        <SwiperSlide key={category.id}>
                            <RitoCadillaco>
                                {/* <ImgSwiper
                                    src={category.url}
                                    alt="foto da categoria"
                                    className="slidItem"
                                /> */}
                                {/* trying to fix it */}
                                <ImgSwiper
                                    src={category.url}
                                    alt="foto da categoria"
                                    className="slidItem"
                                    onError={(e) => {
                                        e.target.onerror = null; // Evita um possível loop infinito
                                        e.target.src = {imageLoading};
                                    }}
                                />
                                <Button to={{
                                    pathname: '/produtos',
                                    state: { categoryId: category.id }
                                }}
                                >
                                    {category.name}
                                </Button>
                            </RitoCadillaco>
                        </SwiperSlide>
                    ))}

                </Swiper>
            </CarouselWrapper>
        </Container>
    );
}



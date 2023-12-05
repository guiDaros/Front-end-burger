import React from "react";

import HomePageHeader from '../../assets/CategoriesHeader.svg'
import { Container, PageHeader } from './styles'
import { CategoryCarousel, OffersCarousel } from "../../components";

export function Home() {
    return (
        <Container>
            <PageHeader>
                <img src={HomePageHeader} alt="Header" />
            </PageHeader>
            <CategoryCarousel />
            <OffersCarousel />
        </Container>
    )
}

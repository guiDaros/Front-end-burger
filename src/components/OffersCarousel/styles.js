import styled from 'styled-components'


export const Container = styled.div`
    background-color: #ffffff;
    display: flex;
    flex-direction: column; 
    align-items: center;
    text-align: center;
    padding: 35px 0;
    gap:35px;
`;

export const CarouselText = styled.h1`
 width: 30%;
 font-size: 50px;

 color: #FF7D49;
`

export const ImgSwiper = styled.img`
width: 400px;
max-height: 250px;
object-fit: cover;
border-radius: 10px;

`

export const CarouselWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const RitoCadillaco = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    p{
        display: flex;
        font-style: normal;
        font-weight: bold;
        font-size: 18px;
        line-height: 120%;

        color: #424242;
    }
`;

export const ProductDescription = styled.div`
    width: 350px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    margin-top: 15px;
`;

export const Button = styled.button`
    margin-top: 16px;
    background: #FF7D49;
    border-radius: 8px;

    height: 50px;
    width: 400px;
    border: none;
    cursor: pointer;

    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 100%;
    text-align: center;
    color: #FFFFFF;

    &:hover{
        color:#FF7D49;
        border: 4px solid #FF7D49;
        background-color: #FFFFFF;
        
        transform: scale(1.02);
        transition-timing-function: ease-in-out;
        transition-duration: 0.15s ;
    }

    &:active{
        transform: scale(1.05);
        font-size: 20.5px;
    }
`;


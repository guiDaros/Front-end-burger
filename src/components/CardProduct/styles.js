import styled from "styled-components";

export const Container = styled.div`
    background: #ffffff;
    box-shadow:0px 30px 60px rgba(57,57,57,0.1);
    border-radius: 30px;
    display: flex;
    gap: 12px;
    padding: 16px;
    width:max-content ;
    height: 180px;
    margin: 0 auto;
    

    div{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        word-wrap: break-word;
    }
`

export const Img = styled.img`
    width: 150px;
    border-radius: 10px;
    object-fit: cover;
`

export const ProductName = styled.p`
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;
    margin-top: 30px;

    width: 170px;

    color: #000000;
`

export const ProductPrice = styled.p`
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 21px;

    color: #000000;
`
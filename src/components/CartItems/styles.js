import styled from 'styled-components'

export const Container = styled.div`
  background-color: #FFFFFF;
  box-shadow: 0px 18px 48px rgba(0, 0, 0, 0.03);
  border-radius: 20px;
  padding: 10px;
  width: max-content;
`

export const Header = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  padding: 10px;
  border-bottom: 1px solid #b5b5b5;

  p{
    font-size: 16px;
    color: #b5b5b5;
  }
`

export const Body = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 30px;
  padding: 10px;
  width: max-content;
  grid-gap: 10px 15px;

  img{
    border-radius: 10px;
    width: 140px;
    height: 110px;
    object-fit: cover;
  }

  p{
    font-size: 16px;
    max-width: 140px;
  }

  .quantityContainer{
    display: flex;
    gap: 20px;

    button{
      height: 30px;
      background: transparent;
      border: none;
      font-size: 24px;
      cursor: pointer;
    }

    p{
      margin-top: 5px;
    }
  }

  button{
    border: none;
    background: #ffffff;

    width: 30px;
    height: 30px;

    cursor: pointer;

    img{
      width: 25px;
      height: 25px;
    }
  }

  button img:hover{
    width: 30px;
    height: 30px;
  }
`

export const EmptyCart = styled.p`
padding: 20px;
font-weight: bold;
text-align: center;
`

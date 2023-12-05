import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  width: 100vw;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ContainerItens = styled.div`
  background: #373737;
  height: 100vh;
  min-width: 350px;
  width: 100%;
  padding: 25px 75px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  form{
    display: flex;
    flex-direction: column;
    align-items: center;
  }


  h1 {
    font-style:normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 28px;

    color: #ffffff;
    text-align: center;

    margin-top: 100px;
  }
`;

export const Label = styled.p`
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 14px;

    color: #ffffff;

    margin-top: ${props => ( props.error ? '12px' : '28px')};
    margin-bottom: 5px;
`;

export const Input = styled.input`
    width: 391px;
    height: 38px;

    background: #ffffff;
    box-shadow: 3px 3px 10px rgba(74, 144, 226, 0.19);
    border: ${props => props.error ? '2px solid #cc1717' : 'none'}; 
    border-radius: 5px;

    outline: none;

    padding-left: 5px;
`;



export const SignInLink = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;
  margin-top: 20px;

  color: #ffffff;

  a{
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;
    font-weight: 300;

    color: #ffffff;

    cursor: pointer;

    text-decoration: underline;


    &:hover{
    opacity: 0.8;
    }
  }
`;

export const RegisterImage = styled.img`
    height: 100vh;
    width: 900px;
`;


import styled from "styled-components";

export const ContainerButton = styled.button`
  width: 180px;
  height: 36px;
  background: #9758a9;
  border-radius: 20px;
  border: none;
  cursor: pointer;

  color: #eeeeee;
  font-style: normal;
  line-height: 19px;
  font-size: 16px;
  font-weight: 500;
  text-align: center;


  &:hover{
    opacity: 0.8;
  }

  &:active{
    opacity: 0.6;
  }
`;
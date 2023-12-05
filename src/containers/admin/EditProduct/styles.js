import styled from 'styled-components'
import { Button } from "../../../components";

export const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    form{
        background: #565656;
        border-radius: 10px;
        padding: 30px;
        display: flex;
        flex-direction: column;
        gap: 25px
        ;
    }
`

export const Label = styled.p`
    font-size: 12px;
    color: #ffffff;
    margin-bottom: 3px;
`

export const Input = styled.input`
    height: 40px;
    width: 100%;
    min-width: 280px;
    border-radius: 8px;
    box-shadow: rgba(0,0,0,0.1);
    background: #ffffff;
    border: none;
    padding-left: 10px;
`
export const LabelUpload = styled.label`
    cursor: pointer;
    display: flex;
    align-items: center;
    border: 1px dashed #ffffff;
    border-radius: 5px;
    padding: 10px;
    gap: 10px;

    input{
        opacity: 0;
        width: 1px;
    }
`

export const ButtonStyles = styled(Button)`
    margin-top: 25px;
    width: 100%;
`

export const ContainerInput = styled.div`
    display: flex;
    align-items: baseline;
    gap: 10px;

    input{
        width: 15px;
        height: 15px;
        cursor: pointer;
    }
`

export const ExcludeProductBtn = styled.div`
    width: 287px;
    height: 40px;
    display: flex;
    align-items: center;
    gap: 15px;
    background: #414141;
    border-radius: 5px;

    cursor: pointer;

    :hover{
        opacity: 0.8;
    }
`








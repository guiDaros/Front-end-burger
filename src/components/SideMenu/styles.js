import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.div`
    background: #3c3c3c;
    box-shadow: 0px 0px 14px rgba(0 ,0, 0, 0.15);
    width: 300px;
    top: 0;
    left: 0;


    hr{
        margin: 50px 15px;
    }
`

export const ItemContainer = styled.div`
    height: 60px;
    display: flex;
    align-items: center;
    background: ${props => (props.isActive ? '#565656' : 'none')};
    border-radius: 2px;
    margin: 8px;
    padding-left: 20px;

    .icon{
        color: #FFFFFF;
    }
`

export const ListLink = styled(Link)`
    color: #FFFFFF;

    font-size: 16px;
    font-style: normal;
    font-weight: normal;
    line-height: 19px;
    text-decoration: none;

    margin-left: 8px;
`


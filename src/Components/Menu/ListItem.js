import React from "react";
import styled from "styled-components";
import { formatCurrency } from "../Functions/secondaryFunction";


const List = styled.ul`
    display: flex;
    justyfy-content: space-around;
    flex-wrap: wrap; 
`;

const Item = styled.li`
    position: relative;
    width: 400px;
    height: 155px;
    font-size: 30px;
    background-image: ${({img}) => `url(${img})`};
    background-size: cover;
    margin: 30px;
    padding: 15px;
    color: white;
    z-index: 1;
    &:after {
        content: '';
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        background-color: black;
        opacity: 30%;
        z-index: -1;
    }
    &:hover {
        cursor: pointer;
        box-shadow: inset 0 0 20px 10px black;
        &:after {
            opacity: 0;
        }   
    }
    
`;


export const ListItem = ({itemList, setOpenItem}) => (
    <List>
        {
            itemList.map((item, i) => (
                <Item
                    key={i}
                    id={item.id}
                    img={item.img}
                    onClick={() => setOpenItem(item)}>
                    <p>{item.name}</p>
                    <p>{formatCurrency(item.price)}</p>
                </Item>
            ))
        }
    </List>
);

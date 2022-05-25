import React from "react";
import styled from "styled-components";
import { ButtonCheckout } from "../Styled/ButtonCheckout";
import { Overlay } from "../Modal/ModalItem";
import {OrderTitle, Total, TotalPrice} from "./Order";
import { projection } from "../Functions/secondaryFunction";
import { totalPriceItems } from "../Functions/secondaryFunction";
import { formatCurrency } from "../Functions/secondaryFunction";

const Modal = styled.div`
    background-color: white;
    width: 600px;
    height: 300px;
`;

const Text = styled.h3`
    text-align: center;
    margin-bottom: 30px;
`;

const rulesData = {
    itemName: ['name'],
    price: ['price'],
    count: ['count'],
    topping: ['topping', arr => arr.filter(obj => obj.checked).map(obj => obj.name),
        arr => arr.length ? arr : 'no topping'],
    choices: ['choices', item => item ? item : 'no choices'],
};

const sendOrder = (database, orders, authentication) => {
    // const newOrder = orders.map(projection(rulesData));
    // database.ref().push().set({
    //     nameClient: authentication.displayName,
    //     emailClient: authentication.email,
    //     order: newOrder,
    // });
};

export const OrderConfirm = ({orders, setOrders, authentication, setOpenOrderConfirm, fareBaseDataBase}) => {
    const database = new fareBaseDataBase();

    const total = orders.reduce((result, order) => totalPriceItems(order) + result, 0);

    return (
        <Overlay>
            <Modal>
                <OrderTitle>{authentication.displayName}</OrderTitle>
                <Text>Осталось только подтвердить ваш заказ</Text>
                <Total>
                    <span>Итого</span>
                    <TotalPrice>{formatCurrency(total)}</TotalPrice>
                </Total>
                <ButtonCheckout
                    onClick={() => {
                        sendOrder(database, orders, authentication);
                        setOrders([]);
                        setOpenOrderConfirm(false);
                }}>
                    Подтвердить
                </ButtonCheckout>
            </Modal>
        </Overlay>
    )
};

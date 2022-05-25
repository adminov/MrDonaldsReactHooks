import React, {useContext} from "react";
import styled from "styled-components";
import { ListItem } from "./ListItem";
import { Banner } from "./banner";
import { useFetch } from "../hooks/useFetch";
import {Context} from "../Functions/context";


const MenuStyled = styled.main`
    background-color: #ccc;
    margin-top: 80px;
    margin-left: 380px;
`;

const SectionMenu = styled.section`
    padding: 30px;
`;

export const Menu = () => {
    const {openItem: {setOpenItem}} = useContext(Context);
    const res = useFetch();
    const dbMenu = res.response;

    return (
        <MenuStyled>
            <Banner/>
            { dbMenu ?
                <>
                    <SectionMenu>
                        <h2>Бургеры</h2>
                        <ListItem
                            setOpenItem={setOpenItem}
                            itemList={dbMenu.burger}
                        />
                    </SectionMenu>

                    <SectionMenu>
                        <h2>Закуски / Напитки</h2>
                        }
                        <ListItem
                            setOpenItem={setOpenItem}
                            itemList={dbMenu.other}
                        />
                    </SectionMenu>
                </> : res.error ?
                    <div>Sorry, we will fix it soon</div> :
                    <div>Loading</div>
            }
        </MenuStyled>
    )
};

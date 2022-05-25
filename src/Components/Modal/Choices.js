import React from "react";
import styled from "styled-components";

const ChoicesgWrap = styled.div`
    max-width: 500px;
    margin: 0 auto;
    column-count: 2;
    column-gap: 15px;
`;

const ChoicesLabel = styled.label`
    cursor: pointer;
    display: block;
`;

const ChoicesRadio = styled.input`
    cursor: pointer;
    margin-tight: 5px;
`;


export function Choices({ openItem, choice, changeChoices}) {
    return (
        <>
            <h3>Выбирайте:</h3>
            <ChoicesgWrap>
                {openItem.choices.map((item, i) => (
                    <ChoicesLabel kee={i}>
                        <ChoicesRadio
                            type="radio"
                            name="choices"
                            checked={choice === item}
                            value={item}
                            onChange={changeChoices}
                        />
                        {item}
                    </ChoicesLabel>
                ))}
            </ChoicesgWrap>
        </>
    )
}

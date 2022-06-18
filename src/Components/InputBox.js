import React from "react";
import styled from "styled-components";


const Input = styled.input`
    align-items: center;
    background-color: hsl(0, 0%, 100%);
    border-color: hsl(0, 0%, 80%);
    border-radius: 4px;
    border-style: solid;
    border-width: 1px;
    min-height: 30px;
    width: 200px;
`;

function InputBox({placeholder}) {
    return(
        <Input placeholder={placeholder}>
        </Input>
    );
}

export default InputBox;
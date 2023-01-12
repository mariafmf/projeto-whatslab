import styled from "styled-components";

export const BotãoEstilo = styled.button`
    width: 150px;
    border-radius: 5px;
    padding: 10px;
    background-color: white;

    &:hover {
        cursor: pointer;
        background-color: rgba(250, 125, 255, 0.3);
    }

    &:active {
        cursor: pointer;
        transform: scale(0.98);
    }
`
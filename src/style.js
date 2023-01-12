import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;

        :root {
            --dark-purple: #AC3CFF;
            --light-purple: #FA7DFF;
        }
    }`

export const Body = styled.div`
    margin: 0;
    padding: 0;
    height: 100vh;
    width: 100vw;
`

export const Cabeçalho = styled.header`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 11%;
    color: var(--dark-purple);
    text-shadow: 1px 1px var(--light-purple);
    font-family: 'Playfair Display', serif;
    font-size: 0.8rem;
    gap: 5px;
`

export const Imagem = styled.img`
    width: 65px;
`

export const Principal = styled.main`
    display: grid;
    grid-template-columns: 1fr 3fr 1fr;
    height: 85%;
`

export const Sidebar = styled.div`
    background-color: rgba(250, 125, 255, 0.3);
    height: 100%;
    border-radius: 10px;
`

export const Rodape = styled.footer`
    display: flex;
    background-color: var(--dark-purple);
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 4%;
`

export const InserirRemetente = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 5%;
    gap: 10px;
    justify-self: center;
    width: 50%;
    background-color: rgba(250, 125, 255, 0.3);
    max-height: 25%;
    border-radius: 10px;
    
   form {
        display: flex;
        flex-direction: column;
        margin-top: 8%;
        gap: 5px;
        justify-content: center;
        align-items: center;
        font-family: 'Playfair Display', serif;
        font-weight: bold;

        input {
            padding: 5px;
            border-radius: 5px;
            width: 125px;
        }

        button {
            width: 125px;
            background-color: var(--light-purple);
            border-radius: 10px;

            :hover {
                cursor: pointer;
            }

            :active {
                transform: scale(0.98)
            }
        }

    }`

export const SeçãoMensagens = styled.div`
    display: grid;
    grid-template-rows: 90% 10%;
    overflow-y: auto;

    ul {
        list-style: none;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
    }

`

export const LinhaMensagem = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: ${(props)=>props.lado};
    align-items: flex-end;
    margin: 5px;
    margin-right: 50px;

    p {
        margin: 0;
    }
    
    p:nth-child(1) {
        display: ${(props)=> props.displayR};
        font-weight: bold;
    }
`

export const Mensagem = styled.div `
    padding: 10px;
    background-color: ${(props)=>props.corFundo};
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    max-width: 50vw;
    text-align: left;
    box-shadow: 1px 1px rgba(1, 1, 1, 0.2);
`

export const SeçãoInputs = styled.form`
    display: flex;
    align-items: flex-end;
    justify-content: space-around;
    background-color: white;
    margin: 10px;
    grid-row-start: 2;
`
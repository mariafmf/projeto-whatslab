import React, { useState } from "react";
import logo from './img/logo.png'
import { Body, Cabeçalho, Rodape, Sidebar, Imagem, Principal, LinhaMensagem, SeçãoMensagens, SeçãoInputs, Mensagem, GlobalStyle, InserirRemetente } from "./style";
import Botão from "./Components/Botão/Botão";
import InputMensagem from "./Components/InputMensagens/InputMensagens";

function App() {

  const [remetente, setRemetente] = useState("")
  const [mensagem, setMensagem] = useState("")
  const [listaMensagens, setlistaMensagens] = useState([])
  const [remetenteNome, setRemetenteNome] = useState("")
  const [nomeFornecido, setNomeFornecido] = useState(false)

const historico = listaMensagens.map((valor, index) => {
    if (valor.rmt === remetenteNome) {
      return (
      <LinhaMensagem lado="flex-end" displayR="none" onDoubleClick={() => deletarMensagem(index)}>
      <Mensagem corFundo="#FDDDFF" key={index}><p>{valor.rmt}</p> <p>{valor.msg}</p></Mensagem>
      </LinhaMensagem>
      )} else {
        return (
        <LinhaMensagem lado="flex-start" displayR="inherit" onDoubleClick={() => deletarMensagem(index)}>
        <Mensagem corFundo="#D7A5FF" key={index}><p>{valor.rmt}</p> <p>{valor.msg}</p></Mensagem>
        </LinhaMensagem>
        )
      }
  })

  const handleInputNomeRemetente = (e) => {
    setRemetenteNome(e.target.value)
  }

  const checkNome = () => {
    if (remetenteNome === "") {
      window.alert("Forneça um nome para continuar.")
    } else {
      setNomeFornecido(true)
    }
  }

  const onClickRemetenteNome = (e) => {
    console.log(nomeFornecido)
    checkNome()
  }

  const handleInputRemetente = (e) => {
    setRemetente(e.target.value)
  }

  const handleInputMensagem = (e) => {
    checkRemetente()
    setMensagem(e.target.value)
  }

  const checkRemetente = () => {
    if(remetente === "") {
      setRemetente(remetenteNome)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if(mensagem === "") {
      window.alert("Não é possível enviar mensagens em branco.")
    } else {
      const novasMensagens = [...listaMensagens, {rmt: remetente, msg: mensagem}]
      setlistaMensagens(novasMensagens)
      setRemetente("")
      setMensagem("")
    }
  }

  const deletarMensagem = (indexR) => {
    const mensagensRemover = listaMensagens.filter((valor, index) => {return index !== indexR})
    setlistaMensagens(mensagensRemover)
  }

  return (
    <>
    <GlobalStyle/>
    <Body>
      <Cabeçalho><Imagem src={logo}/><h1>WhatsLab</h1></Cabeçalho>
      <Principal>
        <Sidebar/>
        {!nomeFornecido && 
        <InserirRemetente>
          <form>
          <label>Insira seu nome.</label>
          <input value={remetenteNome} onChange={handleInputNomeRemetente}/> 
          <button type="submit" onClick={onClickRemetenteNome}>Ok</button>
          </form>
        </InserirRemetente>}
        {nomeFornecido &&
          <SeçãoMensagens>
              <div><ul>{historico}</ul></div>
          <SeçãoInputs onSubmit={handleSubmit}>
              <InputMensagem 
                  nomeInput="Remetente" 
                  textoInput={remetente} 
                  onChangeInput={handleInputRemetente} 
                  largura="180px"
              />
                <InputMensagem
                  nomeInput="Mensagem" 
                  textoInput={mensagem} 
                  onChangeInput={handleInputMensagem} 
                  largura="370px"
              />
              <Botão 
                  type="submit"
              ></Botão>
          </SeçãoInputs>
          </SeçãoMensagens>
        }
        <Sidebar/>
      </Principal>
      <Rodape><span>WhatsLab || 2022-2023</span></Rodape>
    </Body>
    </>
  );
}

export default App;
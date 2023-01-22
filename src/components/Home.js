import styled from "styled-components"
import {RiLogoutBoxRLine} from 'react-icons/ri'
import {AiOutlinePlusCircle, AiOutlineMinusCircle} from 'react-icons/ai'
import { useContext } from "react";
import AppContext from "../AppContext/Context"
import { useNavigate } from "react-router-dom"
export default function Home(){
    const {name} = useContext(AppContext)
    const {setName} = useContext(AppContext)
    const {setTok} = useContext(AppContext)
    const navigate = useNavigate();
    function exit(){
        if(!window.confirm('Tem certeza que deseja sair?')){
            return
        }
        setTok('')
        setName('')
        navigate('/')
    }
    return(
        <Box>
            <header>
            <p>Olá, {name}</p> <RiLogoutBoxRLine onClick={exit} color='white' font-size='25px'/>
            </header>
            <section>
        <h1>Não há registros de <br/>entrada ou saída</h1>
            </section>
            <footer>
                <div onClick={() => navigate('/nova-entrada')}><AiOutlinePlusCircle color='white' font-size='20px'/><p>Nova<br/>entrada</p></div>
                <div onClick={() => navigate('/nova-saida')}><AiOutlineMinusCircle color='white' font-size='20px'/><p>Nova<br/>saída</p></div>
            </footer>
        </Box>
    )
}

const Box = styled.div`
width:100%;
height:100vh;
display:flex;
flex-direction: column;
justify-content: space-between;
align-items:center;
header{
    display:flex;
    width: 100%;
    justify-content: space-between;
    padding-inline: 10%;
    padding-block: 25px;
    p{    font-family: 'Raleway';
font-style: normal;
font-weight: 700;
font-size: 26px;
line-height: 31px;
color: #FFFFFF;}
}
section{
    width: 80%;
height: 446px;
background-color: #FFFFFF;
border-radius: 5px;
display:flex;
flex-direction: column;
justify-content: space-around;
h1{
    font-family: 'Raleway';
font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 23px;
text-align: center;
color: #868686;
}
}
footer{
    width:100%;
    padding-inline:10%;
    margin-block:20px;
    display:flex;
    justify-content:space-between;
    div{
        width: 47%;
height: 114px;
background: #A328D6;
border-radius: 5px;
display:flex;
flex-direction:column;
align-items: bottom;
justify-content: space-between;
padding:10px;
p{
    font-family: 'Raleway';
font-style: normal;
font-weight: 700;
font-size: 17px;
line-height: 20px;
color: #FFFFFF;
}
    }
}
`
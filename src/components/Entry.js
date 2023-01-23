import styled from "styled-components"
import { ThreeDots } from "react-loader-spinner"
import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import { useContext } from "react";
import AppContext from "../AppContext/Context"
export default function Entry(){
    const [valor, setValor] = useState()
    const [desc, setDesc] = useState('')
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate();
    const {setRV} = useContext(AppContext)
    const {rV} = useContext(AppContext)
    const {config} = useContext(AppContext)
    function succes(){
        setLoading(false)
        setRV(rV+1)
        navigate('/home')
        
    }
    function fail(e){
        setLoading(false)
        if(e.response.data==='deslogado'){
            alert('Por favor, faça login novamente.')
            navigate('/')
        } else{
            alert(e.response.data)
        }
        
    }
    function send(e){
        e.preventDefault()
        setLoading(true)
        const obj = {
            valor: valor,
            description: desc
        }
        const promise = axios.post(`${process.env.REACT_APP_API_URL}entries`, obj, config)
        promise.then(succes)
        promise.catch(fail)
    }
    return(
        <Styl>
            <header>
                <p>Nova entrada</p>
            </header>
            <form onSubmit={send}>
            <input required disabled={loading} value={valor} onChange={(e) => setValor(e.target.value)} type='number' placeholder="Valor" />
                <input required disabled={loading} value={desc} onChange={(e) => setDesc(e.target.value)} type='text' placeholder="Descrição" />
                <button disabled={loading}>{loading ? <ThreeDots height='20px' color='#ffffff'/> : 'Salvar entrada'}</button>
                
            </form>
        </Styl>

    )
}

const Styl = styled.div`
display: flex;
flex-direction: column;
align-items: center;
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
form{
    display:flex;
    flex-direction: column;
    width:100%;
    align-items: center;
}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
input{
    
    width: 326px;
    margin-inline: 10%;
height: 58px;
background: #FFFFFF;
border-radius: 5px;
margin-block: 6px;
outline: none;
border: none;
font-family: 'Raleway';
font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 23px;
color: #000000;
padding: 15px;
::placeholder{
    font-family: 'Raleway';
font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 23px;
color: #000000;
}
}
button{
    width: 326px;
height: 46px;
margin-inline: 10%;
background: #A328D6;
border-radius: 5px;
font-family: 'Raleway';
font-style: normal;
font-weight: 700;
font-size: 20px;
line-height: 23px;
margin-block: 10px;
color: #FFFFFF;
display:flex;
align-items: center;
justify-content: center;
}
button:disabled{opacity: 0.7;}
button:hover{
    cursor:pointer;
}
input:disabled{
    background: #F2F2F2;
    color: #AFAFAF;
}
`

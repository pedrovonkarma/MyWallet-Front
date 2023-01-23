import styled from "styled-components"
import { Link } from "react-router-dom"
import { useState } from "react"
import { ThreeDots } from "react-loader-spinner"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import { useContext } from "react";
import AppContext from "../AppContext/Context"
export default function Login() {
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate();
    const {setTok} = useContext(AppContext)
    const {setName} = useContext(AppContext)
    function re(a){
        setLoading(false)
        alert(a.message)
        
    }
    function success(e){
        setTok(e.data.token)
        setName(e.data.name)
        navigate('/home')
    }
    function checkLogin(e){
        e.preventDefault()
        setLoading(true)
        let obj = {
            email: email,
            password: pass
        }
        const promise = axios.post(`${process.env.REACT_APP_API_URL}login`, obj)
        promise.then((e) => success(e))
        promise.catch(re)
    }
    return (
        <Box>
            <h1>MyWallet</h1>
            <form onSubmit={checkLogin}>
                <input data-test="email" required disabled={loading} value={email} onChange={(e) => setEmail(e.target.value)} type='email' placeholder="E-mail" />
                <input data-test="password" required disabled={loading} value={pass} onChange={(e) => setPass(e.target.value)} type='password' placeholder="Senha" />
                <button data-test="sign-in-submit" disabled={loading}>{loading ? <ThreeDots height='20px' color='#ffffff'/> : 'Entrar'}</button>
            </form>
            <Link to='/cadastro'>Primeira vez? Cadastre-se!</Link>
        </Box>
    )
}


const Box = styled.div`
display:flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 100%;
height: 100vh;

h1{
    font-family: 'Saira Stencil One';
font-style: normal;
font-weight: 400;
font-size: 32px;
line-height: 50px;

color: #FFFFFF;
margin-block: 15px;
}
form{
    display:flex;
    flex-direction: column;
}
input{
    width: 326px;
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
a{
    margin-top: 20px;
    font-family: 'Raleway';
font-style: normal;
font-weight: 700;
font-size: 15px;
line-height: 18px;
color: #FFFFFF;
text-decoration: none;
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
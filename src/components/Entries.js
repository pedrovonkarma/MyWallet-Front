import styled from "styled-components"
export default function Entries(props){
    const mov = props.mov
    const prices = mov.map((i) => Number(i.price))
    const sum = prices.reduce((partialSum, a) => partialSum + a, 0)
    return(<>
        <Itens>
            {mov.map((i) => <Iten key={i.desc} cor={i.price>=0}><div><h2>{i.date}</h2><h3>{i.desc}</h3></div><h4>{Number(i.price).toFixed(2)}</h4></Iten>)}
            
            
        </Itens>
        <Sald cor={sum>=0}>
            <h5>SALDO</h5><h4>{sum.toFixed(2)}</h4>
        </Sald></>
    )
}

const Itens = styled.div`
display:flex;
flex-direction: column;
align-items: center;
margin-block: 10px;
overflow-y:scroll;
height:90%;
`
const Iten = styled.div`
display: flex;
justify-content: space-between;
width:100%;
padding-inline:15px;
margin-block: 10px;
align-items: center;
div{
    display: flex;
}
h2{
    font-family: 'Raleway';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 19px;
color: #C6C6C6;
}
h3{
    font-family: 'Raleway';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 19px;
margin-left:10px;
color: #000000;
}
h4{
font-family: 'Raleway';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 19px;
text-align: right;

color: ${props => props.cor ? '#03AC00' : '#C70000'};}
`
const Sald = styled.div`
display: flex;
justify-content: space-between;
width:100%;
padding-inline:15px;
margin-block: 10px;
align-items: center;
h4{
font-family: 'Raleway';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 19px;
text-align: right;

color: ${props => props.cor ? '#03AC00' : '#C70000'};}
h5{
    font-family: 'Raleway';
font-style: normal;
font-weight: 700;
font-size: 17px;
line-height: 20px;
color: #000000;
}
`
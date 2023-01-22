import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./components/SignIn";
import AppProvider from "./AppContext/Provider";
import Login from "./components/Login";
import GlobalStyle from "./Reset";
import Home from "./components/Home";
import Entry from "./components/Entry";
import Out from "./components/Out";
export default function App() {
  return (
    <>
    <BrowserRouter>
    <GlobalStyle/>
    <AppProvider>
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/cadastro' element={<SignIn/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/nova-entrada' element={<Entry/>}/>
      <Route path='/nova-saida' element={<Out/>}/>
    </Routes>
    </AppProvider>
    </BrowserRouter>
    </>
  );
}
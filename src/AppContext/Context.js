import { createContext } from "react";

const AppContext = createContext({
    token: '',
    image: ''
})

export default AppContext;
import { BrowserRouter } from "react-router-dom"
import { AppRouter } from "./router"

//TODO
// Crear los usuarios y el token JWT, seria con el store?
// Hacer el post para que un juez pueda realizar una votación

export const VotingApp = () => {
    return (
        <>
            <BrowserRouter>
                <AppRouter />
            </BrowserRouter>
        </>
    )
}

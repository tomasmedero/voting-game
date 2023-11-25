import { BrowserRouter } from "react-router-dom"
import { AppRouter } from "./router"

//TODO
// Hacer en el navbar el loguito para que se loguee, lo tenes en VitaNav copialo
// Crear los usuarios y el token JWT, seria con el store?
// Eliminar un juego ---> El id va por el body del JSON. No por url creo oka
// CREATE del juego

export const VotingApp = () => {
    return (
        <>
            <BrowserRouter>
                <AppRouter />
            </BrowserRouter>
        </>
    )
}

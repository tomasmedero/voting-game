import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "./router";

// TODO falta el store
// Crear los usuarios y el token JWT
// Colocar el CRUD de los juegos

export const VotingApp = () => {
    return (
        <>
            <BrowserRouter>
                <AppRouter />
            </BrowserRouter>
        </>
    );
};

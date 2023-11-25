import { NavLink } from "react-router-dom";
export const FooterComponent = () => {
    return (
        <footer className="bg-zinc-900 text-white px-10 py-3">
            <div className="footer-links flex justify-between mb-5">
                <NavLink to="/" className="hover:underline">
                    Inicio
                </NavLink>
                <NavLink to="/games" className="hover:underline">
                    Juegos
                </NavLink>
                <NavLink to="/judges" className="hover:underline">
                    Jueces
                </NavLink>
                <NavLink to="/votes" className="hover:underline">
                    Votos
                </NavLink>
            </div>
            <div className="footer-info">
                <p className="text-center">
                    &copy; 2023 Goto Game Jam. All rights reserved | Leandro
                    Fernandez - DW4NBV
                </p>
            </div>
        </footer>
    );
};

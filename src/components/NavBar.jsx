import { NavLink } from "react-router-dom"

export const NavBar = () => {
    return (
        <nav className="flex justify-between px-10 py-3 font-bold bg-black text-white">
            <div className="font-bold">
                <img src="/gamejam.jpeg" alt="logo" className="w-20" />
            </div>
            <ul className="flex items-center space-x-10 text-xl">
                <li>
                    <NavLink
                        className="hover:bg-green-700 hover:text-black transition-all hover:p-3 rounded-md"
                        to="/"
                    >
                        Inicio
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        className="hover:bg-green-700 hover:text-black transition-all hover:p-3 rounded-md"
                        to="/games"
                    >
                        Juegos
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        className="hover:bg-green-700 hover:text-black transition-all hover:p-3 rounded-md"
                        to="/judges"
                    >
                        Jueces
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

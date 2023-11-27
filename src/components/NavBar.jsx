import { useEffect, useRef, useState } from "react"
import { NavLink, Link } from "react-router-dom"

// LÓGICA PARA EL DROPDOWN DEL NAVBAR
export const NavBar = () => {
    // Este es el estado para determinar si el perfil está abierto
    const [isOpenProfile, setIsOpenProfile] = useState(false)
    // Esta referencia se usa para detectar clics fuera del perfil
    const dropdownRef = useRef(null)

    // Esta función cambia el estado de isOpenProfile
    const toggleDropdownProfile = () => {
        setIsOpenProfile(!isOpenProfile)
    }
    // Esta función cierra el perfil
    const closeDropdownProfile = () => {
        setIsOpenProfile(false)
    }
    const status = "authenticated"

    // Este efecto se ejecuta cuando el componente se monta
    useEffect(() => {
        // Esta función se ejecuta cuando se hace clic fuera del perfil
        const handleClickOutside = (event) => {
            // Si se hizo clic fuera del perfil, cerramos el perfil
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target)
            ) {
                closeDropdownProfile()
            }
        }

        // Agregamos un escuchador de eventos para detectar clics fuera del perfil
        document.addEventListener("mousedown", handleClickOutside)

        // Retornamos una función de limpieza que se ejecuta cuando el componente se desmonta
        return () => {
            // Eliminamos el escuchador de eventos
            document.removeEventListener("mousedown", handleClickOutside)
        }
        // Este efecto no tiene dependencias, por lo que solo se ejecuta una vez
    }, [])
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

                {status === "authenticated" ? (
                    <div
                        className="relative inline-block text-left"
                        ref={dropdownRef}
                    >
                        <div>
                            <button
                                onClick={toggleDropdownProfile}
                                className=" flex text-sm border-2 border-transparent rounded-full focus:outline-none focus:border-gray-300"
                            >
                                <img
                                    className="w-8 h-8 rounded-full"
                                    src="/default-avatar.png"
                                    alt="Avatar"
                                />
                            </button>
                        </div>

                        {isOpenProfile && (
                            <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                                <div
                                    className="py-1"
                                    role="menu"
                                    aria-orientation="vertical"
                                    aria-labelledby="options-menu"
                                >
                                    <a
                                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                                        role="menuitem"
                                    >
                                        Salir
                                    </a>
                                </div>
                            </div>
                        )}
                    </div>
                ) : (
                    <Link to="/auth/login">
                        <button className="mt-2 bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
                            Ingresar
                        </button>
                    </Link>
                )}
            </ul>
        </nav>
    )
}

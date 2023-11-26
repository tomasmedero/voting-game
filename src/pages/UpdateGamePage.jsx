import { useState, useEffect } from "react"
import { MainTitle } from "../components"
import { useParams, Navigate } from "react-router-dom"

// ESTE COMPONENTE PERMITE ACTUALIZAR UN JUEGO
export const UpdateGamePage = () => {
    // Obtenemos el ID del juego de los parámetros de la ruta
    const { id } = useParams()
    // Este es el estado para los datos del juego
    const [gameData, setGameData] = useState({
        id: "",
        name: "",
        genre: "",
        edition: "",
    })

    // Este efecto se ejecuta cuando el componente se monta o cuando el ID del juego cambia
    useEffect(() => {
        // Esta función obtiene los detalles del juego de la API
        const fetchGames = async () => {
            const response = await fetch(
                `http://localhost:3000/api/games/${id}`
            )
            const data = await response.json()
            // Actualizamos el estado con los detalles del juego obtenidos
            setGameData({
                id: id,
                name: data.name,
                genre: data.genre,
                edition: data.edition,
            })
        }
        // Llamamos a la función para obtener los detalles del juego
        fetchGames()
    }, [id])

    // Esta función maneja los cambios en los campos del formulario
    const handleChange = (e) => {
        // Actualizamos el estado con el valor del campo que cambió
        setGameData({ ...gameData, [e.target.name]: e.target.value })
    }

    // Este es el estado para determinar si debemos redirigir al usuario
    const [shouldRedirect, setShouldRedirect] = useState(false)

    // Esta función maneja el envío del formulario
    const handleSubmit = async (e) => {
        // Prevenimos la recarga de la página
        e.preventDefault()
        // Hacemos una solicitud PUT a la API para actualizar los detalles del juego

        const response = await fetch(`http://localhost:3000/api/games`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            // Pasamos los datos del juego en el cuerpo de la solicitud
            body: JSON.stringify(gameData),
        })
        // Si la respuesta es exitosa, mostramos un mensaje en la consola y redirigimos al usuario a la página de juegos
        if (response.ok) {
            console.log("Juego actualizado correctamente")
            setShouldRedirect(true)
        } else {
            // Si hubo un error, lo mostramos en la consola
            console.error("Error al actualizar el juego")
        }
    }
    if (shouldRedirect) {
        return <Navigate to="/games" />
    }

    return (
        <div className="flex justify-center items-center max-h-screen">
            <div>
                <MainTitle title="Modificar juego" />
                <form
                    onSubmit={handleSubmit}
                    className="flex flex-col space-y-4 mx-auto"
                >
                    <label className="flex flex-col text-xl">
                        Título:
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={gameData.name}
                            onChange={handleChange}
                            className="px-2 py-1 border border-gray-300 rounded"
                        />
                    </label>
                    <label className="flex flex-col text-xl">
                        Género:
                        <input
                            type="text"
                            id="genre"
                            name="genre"
                            value={gameData.genre}
                            onChange={handleChange}
                            className="px-2 py-1 border border-gray-300 rounded"
                        />
                    </label>
                    <label className="flex flex-col text-xl">
                        Edición:
                        <input
                            type="text"
                            id="edition"
                            name="edition"
                            value={gameData.edition}
                            onChange={handleChange}
                            className="px-2 py-1 border border-gray-300 rounded"
                        />
                    </label>
                    <button
                        type="submit"
                        className="text-white hover:py-5 hover:px-7 hover:text-black bg-emerald-700 hover:bg-emerald-400 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-md px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 transition-all"
                    >
                        Actualizar
                    </button>
                </form>
            </div>
        </div>
    )
}

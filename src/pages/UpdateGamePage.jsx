import { useState, useEffect } from "react"
import { MainTitle } from "../components"
import { useParams } from "react-router-dom"

export const UpdateGamePage = () => {
    const { id } = useParams()
    const [gameData, setGameData] = useState({
        id: "",
        name: "",
        genre: "",
        edition: "",
    })

    useEffect(() => {
        const fetchGames = async () => {
            const response = await fetch(
                `http://localhost:3000/api/games/${id}`
            )
            const data = await response.json()
            setGameData({
                id: id,
                name: data.name,
                genre: data.genre,
                edition: data.edition,
            })
        }
        fetchGames()
    }, [id])

    const handleChange = (e) => {
        setGameData({ ...gameData, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const response = await fetch(`http://localhost:3000/api/games`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(gameData),
        })
        if (response.ok) {
            console.log("Juego actualizado correctamente")
            //ACA DEBERIAS PONERLE UN REDIRECT A LA PAGINA DE JUEGOS, se hace con un Navigate de react router dom
        } else {
            console.log("Error al actualizar el juego")
            //Ponele un error, si queres podemos hacer el sweetalert2
        }
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

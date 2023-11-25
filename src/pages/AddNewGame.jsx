import { useState } from "react"
import { MainTitle } from "../components"
import { Navigate } from "react-router-dom"

export const AddNewGame = () => {
    const [name, setName] = useState("")
    const [genre, setGenre] = useState("")
    const [edition, setEdition] = useState("")
    const [shouldRedirect, setShouldRedirect] = useState(false)

    const handleNameChange = (e) => {
        setName(e.target.value)
    }

    const handleGenreChange = (e) => {
        setGenre(e.target.value)
    }

    const handleEditionChange = (e) => {
        setEdition(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const game = {
            name: name,
            genre: genre,
            edition: edition,
        }

        fetch("http://localhost:3000/api/games", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(game),
        })
            .then((response) => response.json())
            .then(() => {
                console.log("Juego agregado con éxito")
                setShouldRedirect(true)
            })
            .catch((error) => {
                console.error("Error:", error)
            })
    }

    if (shouldRedirect) {
        return <Navigate to="/games" />
    }

    return (
        <>
            <MainTitle title={"Agregar nuevo juego"} />
            <div className="flex justify-center items-center max-h-screen">
                <div className="w-2/4 flex flex-col items-center">
                    <form
                        onSubmit={handleSubmit}
                        className="flex flex-col space-y-4 mx-auto w-[50%]"
                    >
                        <label className="flex flex-col text-xl">
                            Nombre:
                            <input
                                type="text"
                                value={name}
                                onChange={handleNameChange}
                                className="px-2 py-1 border border-gray-300 rounded"
                            />
                        </label>
                        <label className="flex flex-col text-xl">
                            Género:
                            <input
                                type="text"
                                value={genre}
                                onChange={handleGenreChange}
                                className="px-2 py-1 border border-gray-300 rounded"
                            />
                        </label>
                        <label className="flex flex-col text-xl">
                            Edición:
                            <input
                                type="text"
                                value={edition}
                                onChange={handleEditionChange}
                                className="px-2 py-1 border border-gray-300 rounded"
                            />
                        </label>
                        <button
                            type="submit"
                            className="text-white hover:py-5 hover:px-7 hover:text-black bg-emerald-700 hover:bg-emerald-400 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-md px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 transition-all"
                        >
                            Agregar juego
                        </button>
                    </form>
                </div>
            </div>
        </>
    )
}

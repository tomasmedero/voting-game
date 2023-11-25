import { useState } from "react";
import { MainTitle } from "../components";

const UpdateGame = () => {
    const [gameData, setGameData] = useState({
        title: "",
        description: "",
        genre: "",
        releaseYear: "",
    });

    const handleChange = (e) => {
        setGameData({ ...gameData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // TODO: agregar la lógica de UPDATE del juego
    };

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
                            id="title"
                            name="title"
                            value={gameData.title}
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
                            id="releaseYear"
                            name="releaseYear"
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
    );
};

export default UpdateGame;

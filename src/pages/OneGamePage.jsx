/* eslint-disable react/prop-types */

import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export const OneGamePage = () => {
    const { id } = useParams();

    const [game, setGame] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchGames = async () => {
            const response = await fetch(
                `http://localhost:3000/api/games/${id}`
            );
            const data = await response.json();
            setGame(data);
            setIsLoading(false);
        };
        fetchGames();
    }, [id]);

    const { name, genre, edition } = game;
    // TODO: Eliminar un juego
    // http://localhost:3000/api/games/
    // El id va por el body del JSON. No por url creo oka
    return (
        <>
            {isLoading && <span className="text-3xl">Estoy cargando...</span>}

            <div className="p-5 bg-white rounded shadow-lg text-center">
                <h1 className="text-4xl font-bold mb-4">{name}</h1>
                <p className="text-xl mb-2">
                    Genero:{" "}
                    <span className="bg-yellow-300 text-black p-1 font-medium">
                        {genre}
                    </span>
                </p>
                <p className="text-xl my-10">
                    Edición:{" "}
                    <span className="bg-yellow-300 text-black p-1 font-medium">
                        {edition}
                    </span>
                </p>
                <Link
                    to={`/games/update/${id}`}
                    className="text-black hover:py-4 hover:px-7 hover:text-white bg-cyan-400 hover:bg-cyan-600 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-md px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 transition-all"
                >
                    Modificar
                </Link>
                <button
                    onClick={() => {
                        if (
                            window.confirm(
                                "Are you sure you want to delete this game?"
                            )
                        ) {
                            // TODO: agregar la lógica para hacer el DELETE del juego
                        }
                    }}
                    className="text-white hover:py-4 hover:px-7 hover:text-black bg-pink-700 hover:bg-pink-400 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-md px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 transition-all"
                >
                    Eliminar
                </button>
            </div>
        </>
    );
};

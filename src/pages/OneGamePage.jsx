/* eslint-disable react/prop-types */

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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

    return (
        <>
            {isLoading && <span className="text-3xl">Estoy cargando...</span>}

            <div className="p-5 bg-white rounded shadow-lg text-center">
                <h1 className="text-4xl font-bold mb-4">{name}</h1>
                <p className="text-xl mb-2">
                    Genero:{" "}
                    <span className="text-rose-950 font-medium">{genre}</span>
                </p>
                <p className="text-xl">
                    Lanzamiento:{" "}
                    <span className="text-rose-950 font-medium">{edition}</span>
                </p>
            </div>
        </>
    );
};

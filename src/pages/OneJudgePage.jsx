import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MainTitle } from "../components";

export const OneJudgePage = () => {
    const { id } = useParams();
    const [vote, setVote] = useState(null);
    const [game, setGame] = useState(null);

    useEffect(() => {
        const fetchVote = async () => {
            const response = await fetch(
                `http://localhost:3000/api/judges/judge/${id}`
            );
            const data = await response.json();
            setVote(data[0]);

            const gameID = data[0].game; // Use the game ID from the vote data
            const responseGame = await fetch(
                `http://localhost:3000/api/games/${gameID}`
            ); // Fetch the game data using the game ID
            const dataGame = await responseGame.json();
            setGame(dataGame);
        };
        // TODO: Arreglar esto, esta es la página de votación, no sé bien donde colocarla
        // Si colocarla en la parte de los jueces o en la parte de los juegos
        // Acá debería traer la votación realizada por el juez a UN SOLO juego.
        // Por ejemplo Megaman X5 fue votador por Marcos y Luis nada más.
        // Con sus respectivos puntajes de jugabilidad, arte, sonido y afinidad temática.

        fetchVote();
    }, [id]);

    if (!vote || !game) {
        return <span className="text-3xl">Estoy cargando...</span>;
    }

    return (
        <>
            <MainTitle title={"Voto"} />
            <div className="flex">
                <div className="text-center w-[50%] mx-auto">
                    <p className="text-3xl font-bold mb-2">
                        La votación del juez:
                    </p>
                    <p className="text-xl mb-1">
                        Jugabilidad:{" "}
                        <span
                            className={`text-2xl font-bold ${
                                vote.gameplayPoints < 4
                                    ? "text-red-600"
                                    : vote.gameplayPoints < 6
                                    ? "text-orange-600"
                                    : "text-green-600"
                            }`}
                        >
                            {vote.gameplayPoints}
                        </span>
                    </p>
                    <p className="text-xl mb-1">
                        Arte:{" "}
                        <span
                            className={`text-2xl font-bold ${
                                vote.artPoints < 4
                                    ? "text-red-600"
                                    : vote.artPoints < 6
                                    ? "text-orange-600"
                                    : "text-green-600"
                            }`}
                        >
                            {vote.artPoints}
                        </span>
                    </p>
                    <p className="text-xl mb-1">
                        Sonido:{" "}
                        <span
                            className={`text-2xl font-bold ${
                                vote.soundPoints < 4
                                    ? "text-red-600"
                                    : vote.soundPoints < 6
                                    ? "text-orange-600"
                                    : "text-green-600"
                            }`}
                        >
                            {vote.soundPoints}
                        </span>
                    </p>
                    <p className="text-xl mb-1">
                        Afinidad a la temática:{" "}
                        <span
                            className={`text-2xl font-bold ${
                                vote.themePoints < 4
                                    ? "text-red-600"
                                    : vote.themePoints < 6
                                    ? "text-orange-600"
                                    : "text-green-600"
                            }`}
                        >
                            {vote.themePoints}
                        </span>
                    </p>
                </div>
            </div>
        </>
    );
};

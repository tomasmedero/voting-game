import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { MainTitle } from "../components"

// ESTE COMPONENTE MUESTRA UN JUEZ
export const OneJudgePage = () => {
    // Obtenemos el ID y el nombre del juez de los parámetros de la ruta
    const { id, name } = useParams()
    // Estos son los estados para los juegos y los votos del juez
    const [votedGames, setVotedGames] = useState([])
    const [votes, setVotes] = useState([])

    // Este efecto se ejecuta cuando el componente se monta
    useEffect(() => {
        // Esta función obtiene los votos del juez de la API
        const fetchVote = async () => {
            const responseJudgeVotes = await fetch(
                `http://localhost:3000/api/judges/judge/${id}`
            )
            const dataJudgeVotes = await responseJudgeVotes.json()

            // Para cada voto, hacemos una solicitud a la API para obtener los detalles del juego correspondiente
            const gamePromises = dataJudgeVotes.map(async (vote) => {
                if (vote.game) {
                    const responseGame = await fetch(
                        `http://localhost:3000/api/games/${vote.game}`
                    )
                    return responseGame.json()
                }
            })

            // Esperamos a que todas las solicitudes se completen y luego actualizamos el estado con los juegos obtenidos
            const gamesFetch = await Promise.all(gamePromises)
            setVotedGames(gamesFetch)

            // Para cada voto, calculamos la puntuación promedio y guardamos el ID del juego
            const votesPromises = dataJudgeVotes.map(async (vote) => {
                if (vote.game) {
                    // Calculamos la puntuación promedio de los votos
                    const responseVote =
                        (vote.artPoints +
                            vote.gameplayPoints +
                            vote.soundPoints +
                            vote.themePoints) /
                        4
                    // Guardamos el ID del juego
                    const idGameVote = vote.game
                    // Retornamos un objeto con la puntuación media y el ID del juego
                    return { totalVotes: responseVote, gameId: idGameVote }
                }
            })
            // Esperamos a que todas las promesas se resuelvan y luego actualizamos el estado con los votos obtenidos
            const votesFetch = await Promise.all(votesPromises)
            setVotes(votesFetch)
        }

        // Llamamos a la función para obtener los votos del juez
        fetchVote()
    }, [id])
    // Si los juegos aún no se han cargado, mostramos un mensaje de carga
    if (!votedGames) {
        return <span className="text-3xl">Estoy cargando...</span>
    }

    return (
        <>
            <MainTitle title={`Voto del Juez ${name}`} />
            <div className="flex">
                {votedGames.map((votedGame) => {
                    const vote = votes.find((v) => v.gameId === votedGame._id)
                    return (
                        <div
                            key={votedGame._id}
                            className="text-center w-[50%] mx-auto"
                        >
                            <p className="text-3xl font-bold mb-2">
                                {votedGame.name}
                            </p>
                            <p>Promedio Voto :{vote.totalVotes} </p>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

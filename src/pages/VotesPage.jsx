import { useParams } from "react-router-dom";
import { MainTitle } from "../components";

const VotesPage = () => {
    const { judgeId } = useParams();

    // Fetch the votes for the specific judgeId from your data source
    // For example, you can use an API call or retrieve data from a database

    // Assuming you have an array of votes for each judge
    const judgeVotes = [
        { id: 1, judgeId: 1, score: 8 },
        { id: 2, judgeId: 1, score: 9 },
        { id: 3, judgeId: 1, score: 7 },
        // ... other votes for judgeId 1
    ];

    // Filter the votes for the specific judgeId
    const filteredVotes = judgeVotes.filter(
        (vote) => vote.judgeId === parseInt(judgeId)
    );

    return (
        <div>
            <MainTitle title="Votos" />
            <ul>
                {filteredVotes.map((vote) => (
                    <li key={vote.id}>Score: {vote.score}</li>
                ))}
            </ul>
        </div>
    );
};

export default VotesPage;

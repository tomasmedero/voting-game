/* eslint-disable react/prop-types */
import { useHistory } from "react-router-dom";
import { MainTitle } from "../components";

export const EditionPage = ({ games }) => {
    const history = useHistory();

    // Get a list of all unique edition years
    const editions = [...new Set(games.map((game) => game.edition))];

    return (
        <div className="edition-page">
            <MainTitle title="Ediciones" />
            {editions.map((edition) => (
                <button
                    key={edition}
                    onClick={() => history.push(`/editions/${edition}`)}
                >
                    {edition}
                </button>
            ))}
        </div>
    );
};

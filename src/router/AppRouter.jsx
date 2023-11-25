import { Navigate, Route, Routes } from "react-router-dom";
import { HomePage, GamesPage, JudgesPage, OneGamePage } from "../pages";
import { NavBar, FooterComponent } from "../components";
import VotesPage from "../pages/VotesPage";
import { OneJudgePage } from "../pages/OneJudgePage";

export const AppRouter = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <NavBar />
            <div className="flex-grow">
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/games" element={<GamesPage />} />
                    <Route path="/games/:id" element={<OneGamePage />} />
                    <Route path="/judges" element={<JudgesPage />} />
                    <Route
                        path="/judges/judge/:id"
                        element={<OneJudgePage />}
                    />
                    <Route path="/votes" element={<VotesPage />} />
                    <Route path="/edition" element={<EditionPage />} />
                    <Route path="/*" element={<Navigate to="/" />} />
                </Routes>
            </div>
            <FooterComponent />
        </div>
    );
};

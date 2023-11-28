import { Navigate, Route, Routes } from "react-router-dom"
import { VotingRoutes } from "./VotingRoutes"
import { AuthRoutes } from "../auth/routes/AuthRoutes"

export const AppRouter = () => {
    return (
        <>
            <div>
                <Routes>
                    <Route path="/*" element={<VotingRoutes />} />
                    <Route path="/auth/*" element={<AuthRoutes />} />
                    <Route path="/*" element={<Navigate to="/" />} />
                </Routes>
            </div>
        </>
    )
}

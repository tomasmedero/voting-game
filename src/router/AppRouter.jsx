import { Navigate, Route, Routes } from "react-router-dom"
import { VotingRoutes } from "./VotingRoutes"
import { AuthRoutes } from "../auth/routes/AuthRoutes"

export const AppRouter = () => {
    const status = "authenticated"

    return (
        <>
            {status === "authenticatede" ? (
                <>
                    <div>
                        <Routes>
                            <Route path="/*" element={<VotingRoutes />} />
                            <Route path="/*" element={<Navigate to="/" />} />
                            <Route
                                path="/auth/*"
                                element={<Navigate to="/" />}
                            />
                        </Routes>
                    </div>
                </>
            ) : (
                <div>
                    <Routes>
                        <Route path="/*" element={<VotingRoutes />} />
                        <Route path="/auth/*" element={<AuthRoutes />} />
                        <Route path="/*" element={<Navigate to="/" />} />
                    </Routes>
                </div>
            )}
        </>
    )
}

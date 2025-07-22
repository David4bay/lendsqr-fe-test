import { Route, Routes, useNavigate } from "react-router-dom"
import { useAuth } from "../context/UserContext"
import Nav from "./Nav"
import Sidebar from "./Sidebar"
import { Helmet } from "react-helmet"
import UserList from "./UserList"
import UserProfile from "./UserProfile"

interface UserProp {
    user: {
        username?: string | null 
        key?: string | null
    }
}
function Dashboard() {

    const navigate = useNavigate()

    const userLoggedStatus = useAuth() as UserProp

    console.log("userLoggedStatus", userLoggedStatus)
    
    if (userLoggedStatus.user === null) {
        navigate("/")
    }

    return (
        <>
        <Helmet>
            <title>
                Lendsqr | Dashboard
            </title>
        </Helmet>
        <Nav />
        <main className="main">
        <Sidebar />
            <Routes>
                <Route path="/" element={<UserList />} />
                <Route path=":id" element={<UserProfile />} />
            </Routes>
        </main>
        </>
    )
}

export default Dashboard
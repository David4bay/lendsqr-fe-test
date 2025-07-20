import { useNavigate } from "react-router-dom"
import { useAuth } from "../context/UserContext"
import Nav from "./Nav"
import Sidebar from "./Sidebar"
import { Helmet } from "react-helmet"
import UserList from "./UserList"

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
        <UserList />
        </main>
        </>
    )
}

export default Dashboard
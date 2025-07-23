import { Route, Routes, useNavigate } from "react-router-dom"
import Nav from "./Nav"
import Sidebar from "./Sidebar"
import { Helmet } from "react-helmet"
import UserList from "./UserList"
import UserProfile from "./UserProfile"
import { useEffect } from "react"

function Dashboard() {

    const navigate = useNavigate()

        const userLoggedStatus = localStorage.loggedUser

        console.log("userLoggedStatus", typeof userLoggedStatus)

        useEffect(() => {
            if (userLoggedStatus?.user === "") {
                navigate("/")
                return 
            }
        })
        
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
 
/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useEffect, useState, type ReactNode} from "react"

interface UserContextProp {
    children: ReactNode
}

interface UserContextDataProp {
    username: string 
    key: string
}

interface UserProp {
    user: UserContextDataProp | null
}

const UserContextData = createContext<UserProp | undefined>(undefined)

function UserContext({children}: UserContextProp) {

    const [user, setUser] = useState<UserProp | null>(null)

    useEffect(() => {
        const storedUser: UserProp | null | undefined | string = localStorage.getItem("loggedUser")
        if (storedUser) {
            try {
                const parsedUser = JSON.parse(storedUser)
                setUser(parsedUser)
            } catch(error: unknown) {
                console.error("Unable to get user: ", error)
            }
        }
    }, [])

    const loggedUser = { user } as UserProp

    return (
        <UserContextData.Provider value={loggedUser}>
            {children}
        </UserContextData.Provider>
    )
}

export function useAuth() {
    const context = useContext(UserContextData)
    if (context === undefined) {
        throw new Error("useAuth must be used within an AuthProivder")
    }
    return context
}

export default UserContext
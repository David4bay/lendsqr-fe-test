import { useParams } from "react-router-dom"
import type { UserListType } from "./UserList"
import { useQuery } from "@tanstack/react-query"


function UserProfile() {

    const userId = useParams().id

    console.log("userId", userId)

    const { data, isLoadingError, error, isLoading } = useQuery({
        queryKey: ["user_profile"],
        queryFn: async () => await fetch("/generated.json").then((response) => response.json()),
        select: (users) => users.find((user: UserListType) => user._id === userId)
    })

    if (isLoading || isLoadingError) return <p>Loading....</p>

    if (error) return <p>No user with such id exists.</p>

    console.log("userId", userId, "userData", data)

    return (
        <article>
        <div>
            <p>Hello user {data._id}</p>
        </div>
        </article>
    )
}

export default UserProfile
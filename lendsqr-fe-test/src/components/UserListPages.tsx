import type { SyntheticEvent, Dispatch, SetStateAction } from "react"
import type { UserListType } from "./UserList"
import LastPages from "./LastPages"
import DynamicList from "./DynamicList"

interface PagesPropType {
    remainingPages: number
    setCurrentPage: Dispatch<SetStateAction<number>>
    setUsers: Dispatch<SetStateAction<UserListType[]>>
    data: UserListType[]
    currentPage: number
    isLoading: boolean
    error: Error | null | boolean
    setRefresh: Dispatch<SetStateAction<boolean>>
}

function UserListPages(props: PagesPropType) {

    const { remainingPages, setCurrentPage, currentPage, isLoading, error, setRefresh } = props

    /*
    This makes a list of pages starting from the first 3 pages
    to the last or just returns a single page.
    */

    if (isLoading) return <p>Loading...</p>

    if (error) return <p>Something went wrong.</p>

    function handleViews(e: SyntheticEvent<HTMLButtonElement>) {
        const target = e.target as HTMLSelectElement
        console.log("page number", target.innerText)
        setCurrentPage(Number(target.innerText))
        setRefresh(true)
    }

    const listOfPages = Array.from({length: Math.floor(currentPage + 3)}, (_, i) => i + 1).slice(currentPage - 1)

    return (
         <article className="userlist__floor">
                <div className="userlist__floor-container">
                    <span>showing</span>
                    <select className="view__rows" disabled>
                        <option value="9">9</option>
                    </select>
                    <span>out of {remainingPages}</span>
                </div>
                <div>
                    <ul className="page__style">
                        {currentPage >= remainingPages - 2 ?
                    (
                    <LastPages
                    remainingPages={remainingPages}
                    handleViews={handleViews}
                    />) 
                    :
                    (
                    <DynamicList
                    listOfPages={listOfPages}
                    handleViews={handleViews}
                    remainingPages={remainingPages}
                    currentPage={currentPage}
                    />
                    )}    
                </ul>
            </div>
        </article>
    )
}

export default UserListPages
import type { UserListType } from "./UserList"
import UserListBody from "./UserListBody"

interface UserListTypes {
    users: UserListType[]
    isLoading: boolean 
    error: Error | boolean | null
}

function UserListNav(props: UserListTypes) {

    const { users, isLoading, error } = props

    if (isLoading) return <p>Loading...</p>

    if (error) return <p>Something went wrong.</p>

    const tableHeadItems = ["username", "email", "phone number", "date joined", "status"]

    return (
        <article className="table__container">
                <table>
                    <thead>
                        <tr>
                            <th scope="row">
                                <div className="row__head">
                                    <h4>
                                        organizations
                                    </h4>
                                    <button className="filter__button">
                                        <img src="/filter-icon.png" alt="organization filter icon" />
                                    </button>
                                </div>
                            </th>
                            {tableHeadItems.map((tableItem) => (
                                 <th key={tableItem}>
                                <div>
                                    <h4>
                                        {tableItem}
                                    </h4>
                                    <button className="filter__button">
                                        <img src="/filter-icon.png" alt={`${tableItem} filter icon`} />
                                    </button>
                                </div>
                            </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        <UserListBody users={users} /> 
                    </tbody>
                </table>
            </article>
    )
}

export default UserListNav
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
                            <th>
                                <div>
                                    <h4>
                                        username
                                    </h4>
                                    <button className="filter__button">
                                        <img src="/filter-icon.png" alt="username filter icon" />
                                    </button>
                                </div>
                            </th>
                            <th>
                                <div>
                                    <h4>
                                        email
                                    </h4>
                                    <button className="filter__button">
                                        <img src="/filter-icon.png" alt="email filter icon" />
                                    </button>
                                </div>
                            </th>
                            <th>
                                <div>
                                    <h4>
                                        phone number
                                    </h4>
                                    <button className="filter__button">
                                        <img src="/filter-icon.png" alt="phone number filter icon" />
                                    </button>
                                </div>
                            </th>
                            <th>
                                <div>
                                    <h4>
                                        date joined
                                    </h4>
                                    <button className="filter__button">
                                        <img src="/filter-icon.png" alt="date joined filter icon" />
                                    </button>
                                </div>
                            </th>
                            <th>
                                <div>
                                    <h4>
                                        status
                                    </h4>
                                    <button className="filter__button">
                                        <img src="/filter-icon.png" alt="status filtere icon" />
                                    </button>
                                </div>
                            </th>
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
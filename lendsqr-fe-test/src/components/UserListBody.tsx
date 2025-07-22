import moment from "moment"
import type { UserListType } from "./UserList"
import { Link } from "react-router-dom"

function UserListBody(props: { users: UserListType[] }) {

    const { users } = props

    function formatDate(date: string):string {
        return moment(date).format("LLL")
    }

    function statusStyle(status: string):string {
        switch(true) {
            case status === "inactive":
                return "inactive"
            case status === "active":
                return "active"
            case status === "blacklisted":
                return "blacklisted"
            case status === "pending":
                return "pending"
            default:
                return "unavailable"
        }
    }

    return (
         <>
                {users?.length > 0 ? users.map((userlist: UserListType) => (
                    <tr key={userlist.non_zero_index}>
                            <td>
                                <span className="user__link">
                                    <Link to={`/users/${userlist._id}`}>
                                        {userlist.organization}
                                    </Link>
                                </span>
                            </td>
                            <td>
                                <span className="user__link">
                                    <Link to={`/users/${userlist._id}`}>
                                        {userlist.username}
                                    </Link>
                                </span>
                            </td>
                            <td>
                                <span className="user__link">
                                    <Link to={`/users/${userlist._id}`}>
                                        {userlist.email}
                                    </Link>
                                </span>
                            </td>
                            <td>
                                <span className="user__link">
                                    <Link to={`/users/${userlist._id}`}>
                                        {userlist.phone_number}
                                    </Link>
                                </span>
                            </td>
                            <td>
                                <span className="user__link">
                                    <Link to={`/users/${userlist._id}`}>
                                        {formatDate(userlist.join_date)
                                    }</Link>
                                </span>
                            </td>
                            <td>
                                <div className="status__row">
                                    <span className={statusStyle(userlist.status)}>{userlist.status}</span>
                                    <button>
                                        <img src="/more-icon.png" alt="more settings icon" />
                                    </button>
                                </div>
                            </td>
                    </tr>
                )) : ""}
            </>
    )
}

export default UserListBody
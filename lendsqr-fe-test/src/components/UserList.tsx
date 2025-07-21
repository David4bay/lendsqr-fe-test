import { useQuery } from "@tanstack/react-query"
import moment from "moment"
import React, { useLayoutEffect, useState } from "react"

type StatusType = "inactive" | "pending" | "blacklisted" | "active"

interface EducationType {
    level_of_education: string 
    employment_status: string 
    sector_of_employment: string 
    duration_of_employment: string 
    monthly_income: string 
    loan_repayment: number
}

interface GuarantorType {
    ftrlname: string 
    phone_number: string 
    email: string 
    relationship: string
}

interface UserListType {
    _id: string 
    index: number 
    non_zero_index: number 
    tier: number 
    bank: string 
    bank_account: number 
    organization: string 
    firstname: string 
    lastname: string 
    username: string 
    email: string 
    phone_number: string 
    join_date: string 
    status: StatusType 
    ftrlname: string 
    bvn: string 
    gender: string 
    marital_status: string 
    children: number 
    type_of_residence: string 
    education: EducationType[]
    age: number 
    facebook: string 
    twitter: string 
    instagram: string 
    guarantor: GuarantorType[]
}


function UserList() {

    const [pages, setPages] = useState<number>(9)
    const [remainingPages, setRemainingPages] = useState<number>(0)
    const [users, setUsers] = useState<UserListType[]>([])
    const [refresh, setRefresh] = useState(true)

    const { data, isLoadingError, error, isLoading } = useQuery({
        queryKey: ["user_list"],
        queryFn: async () => await fetch("/generated.json").then((response) => response.json())
    })

    console.log("data", data as UserListType[])

    useLayoutEffect(() => {
        if (data?.length > 0 && !isLoading && !isLoadingError && !error && refresh) {
            if (pages > data.length) {
                setPages(data.length)
            }
            if (pages < 9) {
                setPages(9)
            }
            const originalDataLength = data.length 
            const pagesLeft = Math.floor((originalDataLength - pages) / pages)
            setRemainingPages(pagesLeft)
            data.length = pages
            setUsers(data)
            setRefresh(false)
        }
    }, [data, error, isLoading, isLoadingError, pages, refresh])

    function formatDate(date: string):string {
        return moment(date).format("LLL")
    }

    console.log("users", users)

    return (
        <section>
            <article>
                <h3>
                    users
                </h3>
                <div>
                    <div>
                        <img src="/users-icon.png" alt="users icon" />
                        <strong>
                            users
                        </strong>
                        <p>2,453</p>
                    </div>
                    <div>
                        <img src="/active-users-icon.png" alt="active users icon" />
                        <strong>
                            active users
                        </strong>
                        <p>2,453</p>
                    </div>
                    <div>
                        <img src="/users-with-loans-icon.png" alt="users with loans icon" />
                        <strong>
                            users with loans
                        </strong>
                        <p>12,453</p>
                    </div>
                    <div>
                        <img src="/users-with-savings-icon.png" alt="users with savings icon" />
                        <strong>
                            users with savings
                        </strong>
                        <p>102,453</p>
                    </div>
                </div>
            </article>
            <article>
                <table>
                    <thead>
                        <tr>
                            <th scope="row">
                                <div>
                                    <h4>
                                        organizations
                                    </h4>
                                    <button>
                                        <img src="/filter-icon.png" alt="organization filter icon" />
                                    </button>
                                </div>
                            </th>
                            <th>
                                <div>
                                    <h4>
                                        username
                                    </h4>
                                    <button>
                                        <img src="/filter-icon.png" alt="username filter icon" />
                                    </button>
                                </div>
                            </th>
                            <th>
                                <div>
                                    <h4>
                                        email
                                    </h4>
                                    <button>
                                        <img src="/filter-icon.png" alt="email filter icon" />
                                    </button>
                                </div>
                            </th>
                            <th>
                                <div>
                                    <h4>
                                        phone number
                                    </h4>
                                    <button>
                                        <img src="/filter-icon.png" alt="phone number filter icon" />
                                    </button>
                                </div>
                            </th>
                            <th>
                                <div>
                                    <h4>
                                        date joined
                                    </h4>
                                    <button>
                                        <img src="/filter-icon.png" alt="date joined filter icon" />
                                    </button>
                                </div>
                            </th>
                            <th>
                                <div>
                                    <h4>
                                        status
                                    </h4>
                                    <button>
                                        <img src="/filter-icon.png" alt="status filtere icon" />
                                    </button>
                                </div>
                            </th>
                            <th>

                            </th>
                        </tr>
                    </thead>
                <tbody>
                {users?.length > 0 ? users.map((userlist: UserListType) => (
                    <React.Fragment key={userlist.non_zero_index}>
                        <tr>
                            <td>
                                <span>{userlist.organization}</span>
                            </td>
                            <td>
                                <span>{userlist.username}</span>
                            </td>
                            <td>
                                <span>{userlist.email}</span>
                            </td>
                            <td>
                                <span>{userlist.phone_number}</span>
                            </td>
                            <td>
                                <span>{formatDate(userlist.join_date)}</span>
                            </td>
                            <td>
                                <span>{userlist.status}</span>
                            </td>
                            <td>
                                <button>
                                    <img src="/more-icon.png" alt="more settings icon" />
                                </button>
                            </td>
                        </tr>
                    </React.Fragment>
                )) : ""}
                </tbody>
                </table>
            </article>
        </section>
    )
}

export default UserList
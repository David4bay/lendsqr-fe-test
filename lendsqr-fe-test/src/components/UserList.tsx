import { useQuery } from "@tanstack/react-query"


function UserList() {

    const { data } = useQuery({
        queryKey: ["user_list"],
        queryFn: async () => await fetch("/generated.json").then((response) => response.json())
    })

    console.log("data", data)

    return (
        <section className="userlist">
            <article className="userlist__container">
                <h3 className="userlist__container-title">
                    users
                </h3>
                <div className="userlist__container-info">
                    <div className="info__item">
                        <img className="info__item-image" src="/users-icon.png" alt="users icon" />
                        <strong className="info__item-title">
                            users
                        </strong>
                        <p className="info__item-stat">2,453</p>
                    </div>
                    <div className="info__item">
                        <img className="info__item-image" src="/active-users-icon.png" alt="active users icon" />
                        <strong className="info__item-title">
                            active users
                        </strong>
                        <p className="info__item-stat">2,453</p>
                    </div>
                    <div className="info__item">
                        <img className="info__item-image" src="/users-with-loans-icon.png" alt="users with loans icon" />
                        <strong className="info__item-title">
                            users with loans
                        </strong>
                        <p className="info__item-stat">12,453</p>
                    </div>
                    <div className="info__item">
                        <img className="info__item-image" src="/users-with-savings-icon.png" alt="users with savings icon" />
                        <strong className="info__item-title">
                            users with savings
                        </strong>
                        <p className="info__item-stat">102,453</p>
                    </div>
                </div>
            </article>
            <article className="userlist__table">
                <div className="userlist__table-heading">
                    <div className="heading">
                        <h4 className="heading__title">
                            organizations
                        </h4>
                        <img src="/filter-icon.png" alt="organization filter icon" className="heading__icon" />
                    </div>
                    <div className="heading">
                        <h4 className="heading__title">
                            username
                        </h4>
                        <img src="/filter-icon.png" alt="username filter icon" className="heading__icon" />
                    </div>
                    <div className="heading">
                        <h4 className="heading__title">email</h4>
                        <img src="/filter-icon.png" alt="email filter icon" className="heading__icon" />
                    </div>
                    <div className="heading">
                        <h4 className="heading__title">
                            phone number
                        </h4>
                        <img src="/filter-icon.png" alt="phone number filter icon" className="heading__icon" />
                    </div>
                    <div className="heading">
                        <h4 className="heading__title">
                            date joined
                        </h4>
                        <img src="/filter-icon.png" alt="date joined filter icon" className="heading__icon" />
                    </div>
                    <div className="heading">
                        <h4 className="heading__title">
                            status
                        </h4>
                        <img src="/filter-icon.png" alt="status filtere icon" className="heading__icon" />
                    </div>
                </div>
            </article>
        </section>
    )
}

export default UserList
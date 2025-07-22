

function UserListHeader() {

    return (
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
    )
}

export default UserListHeader
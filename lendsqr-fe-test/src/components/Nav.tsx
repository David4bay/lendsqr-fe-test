

function Nav() {
    
    return (
        <nav className="nav">
            <ul className="nav__intro">
                <li className="nav__logo-container">
                    <img className="logo__container-favicon" src="/lendsqr_login_logo.png" alt="login aside logo" />
                    <strong className="logo__container-title">lendsqr</strong>
                </li>
                <li className="nav__search-container search">
                    <input className="search__input" type="search" placeholder="Search for anything" />
                    <button className="search__button">
                        <img src="/search_logo.png" alt="dashboard search logo" />
                    </button>
                </li>
            </ul>
            <ul className="nav__profile">
                <li className="nav__profile-docs docs">
                    <a className="docs__link" href="#">Docs</a>
                </li>
                <li className="nav__profile-container profile">
                    <img className="profile__alerts" src="/dashboard_bell-icon.png" alt="dashboard bell icon" />
                    <span className="profile__container">
                        <img className="profile__container-image" src="/profile_image.png" alt="profile picture" />
                    </span>
                    <img className="profile__arrow" src="/profile_picture_arrow.png" alt="profile picture arrow" />
                </li>
            </ul>
        </nav>
    )
}

export default Nav
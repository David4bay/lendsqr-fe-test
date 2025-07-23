import { useEffect, type SyntheticEvent } from "react";
import { useNavigate } from "react-router-dom";

export default function Sidebar() {

    const navigate = useNavigate()
    
    function handleLogout(e: SyntheticEvent) {
        e.preventDefault()
        localStorage.loggedUser = ""
        navigate("/")
        return
    }

    useEffect(() => {
        const loggedUser = localStorage.loggedUser 
        if (loggedUser === "") {
            navigate("/")
        }
    }, [navigate])

    return (
        <aside className="sidebar">
            <div className="switch__organizations">
                <img src="/organizations_logo.png" alt="switch organizations logo" />
                <h3 className="swtich__organizations-text">
                    switch organizations
                </h3>
                <button className="switch__organizations-button">
                    <img src="/close_arrow.png" alt="close switch organizations button" />
                </button>
            </div>
            <div className="aside__dashboard">
                <img src="/home_1.png" alt="aside dashboard home icon" className="aside__dashboard-icon" />
                <a href="#" className="aside__dashboard-text">dashboard</a>
            </div>
            <nav className="customer__options">
                <h4 className="customer__options-title">
                    customers
                </h4>
                <ul className="options">
                    <li className="options__item selected">
                        <div className="options__item-content">
                            <img src="/user-friends_1.png" alt="users logo" />
                            <p>users</p>
                        </div>
                    </li>
                    <li className="options__item">
                        <div className="options__item-content">
                            <img src="/users_1.png" alt="guarantors logo" />
                            <p>guarantors</p>
                        </div>
                    </li>
                    <li className="options__item">
                        <div className="options__item-content">
                            <img src="/sack_1.png" alt="loans logo" />
                            <p>loans</p>
                        </div>
                    </li>
                    <li className="options__item">
                        <div className="options__item-content decision__models">
                            <img src="/decision_models.png" alt="decision model logo" />
                            <p>decision models</p>
                        </div>
                    </li>
                </ul>
                <ul className="options">
                    <li className="options__item">
                        <div className="options__item-content">
                            <img src="/piggy-bank_1.png" alt="savings logo" />
                            <p>savings</p>
                        </div>
                    </li>
                    <li className="options__item">
                        <div className="options__item-content">
                            <img src="/request.png" alt="load request logo" />
                            <p>loan request</p>
                        </div>
                    </li>
                    <li className="options__item">
                        <div className="options__item-content">
                            <img src="/user-check_1.png" alt="whitelist logo" />
                            <p>whitelist</p>
                        </div>
                    </li>
                    <li className="options__item">
                        <div className="options__item-content">
                            <img src="/user-karma_1.png" alt="karma logo" />
                            <p>karma</p>
                        </div>
                    </li>
                </ul>
                <h4 className="business__options-title">
                    businesses
                </h4>
                <ul className="options">
                    <li className="options__item">
                        <div className="options__item-content">
                            <img src="/organizations_logo.png" alt="Organization logo" />
                            <p>Organization</p>
                        </div>
                    </li>
                    <li className="options__item">
                        <div className="options__item-content">
                            <img src="/request.png" alt="Loan products logo" />
                            <p>Loan Products</p>
                        </div>
                    </li>
                    <li className="options__item">
                        <div className="options__item-content">
                            <img src="/savings_products.png" alt="savings products logo" />
                            <p>Savings Products</p>
                        </div>
                    </li>
                    <li className="options__item">
                        <div className="options__item-content">
                            <img src="/fees.png" alt="Fees and charges logo" />
                            <p>Fees and Charges</p>
                        </div>
                    </li>
                    <li className="options__item">
                        <div className="options__item-content">
                            <img src="/transactions.png" alt="Transactions logo" />
                            <p>Transactions</p>
                        </div>
                    </li>
                    <li className="options__item">
                        <div className="options__item-content">
                            <img src="/galaxy.png" alt="Galaxy logo" />
                            <p>Services</p>
                        </div>
                    </li>
                    <li className="options__item">
                        <div className="options__item-content">
                            <img src="/service_account.png" alt="Service account logo" />
                            <p>Service Account</p>
                        </div>
                    </li>
                    <li className="options__item">
                        <div className="options__item-content">
                            <img src="/settlements.png" alt="Settlements logo" />
                            <p>Settlements</p>
                        </div>
                    </li>
                    <li className="options__item">
                        <div className="options__item-content">
                            <img src="/reports.png" alt="Reports logo" />
                            <p>Reports</p>
                        </div>
                    </li>
                </ul>
                <h4 className="settings__options-title">
                    settings
                </h4>
                <ul className="options">
                    <li className="options__item">
                        <div className="options__item-content">
                            <img src="/preferences.png" alt="Preferences logo" />
                            <p>Preferences</p>
                        </div>
                    </li>
                    <li className="options__item">
                        <div className="options__item-content">
                            <img src="/fees_pricing.png" alt="Fees and pricing logo" />
                            <p>Fees and Pricing</p>
                        </div>
                    </li>
                    <li className="options__item">
                        <div className="options__item-content">
                            <img src="/audit.png" alt="Audit logs logo" />
                            <p>Audit Logs</p>
                        </div>
                    </li>
                    <li className="options__item">
                        <div className="options__item-content">
                            <img src="/systems_messages.png" alt="systems messages logo" />
                            <p>Sytems Messages</p>
                        </div>
                    </li>
                </ul>
                <ul className="options">
                    <button onClick={handleLogout} className="logout__container">
                        <img src="/sign-out.png" alt="sign out logo" />
                        <span className="logout__container-button">
                            Logout
                        </span>
                    </button>
                    <p className="app__version">1.2.0</p>
                </ul>
            </nav>
        </aside>
    )
}
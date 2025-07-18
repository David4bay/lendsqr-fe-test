import { useState, type SyntheticEvent } from "react"

function Login() {

    const [showPassword, setShowPassword] = useState<boolean>(false)

    function revealPassword(e: SyntheticEvent) {
        e.preventDefault()
        setShowPassword(!showPassword)
    }

    // function handleUserLogin(e: SyntheticEvent) {
    //     e.preventDefault()
    // }

    return (
        <>
            <section className="login">
                <article className="login__article">
                    <div className="login__article-wrapper">
                        <div className="logo__container">
                            <img className="logo__container-favicon" src="/lendsqr_login_logo.png" alt="login aside logo" />
                            <strong className="logo__container-title">lendsqr</strong>
                        </div>
                        <div className="logo__container">
                            <img className="logo__container-image" src="/pablo-sign-in_1.png" alt="login aside image" width="100%" height="100%" />
                        </div>
                    </div>
                </article>
                <article className="login__article form__container">
                    <div className="form__container-greeting">
                        <h1 className="form__container-greeting-title">
                            welcome!
                        </h1>
                        <p className="form__container-greeting-paragraph">
                            enter details to login.
                        </p>
                    </div>
                    <form className="form__container-body form__body">
                        <div className="form__body-email">
                            <label htmlFor="email" className="email__label" aria-hidden hidden>email</label>
                            <input className="user__input email" id="email" type="email" placeholder="Email" />
                        </div>
                        <div className="form__body-password">
                            <label htmlFor="Password" className="Password__label" aria-hidden hidden>password</label>
                            <input className="user__input password" id="password" type={showPassword ? "text" : "password"} placeholder="Password" />
                            <button className="input__reveal" onClick={revealPassword} type="button">{showPassword ? "Hide" : "Show"}</button>
                        </div>
                        <div className="form__body-forgot-password">
                            <a href="#" className="forgot-password">forgot password?</a>
                        </div>
                        <div className="form__body-login">
                            <button className="login__button" type="button">log in</button>
                        </div>
                    </form>
                </article>
            </section>
        </>
    )
}

export default Login
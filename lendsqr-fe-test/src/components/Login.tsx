 
// /* eslint-disable prefer-const */

import { useEffect, useState, type FormEvent, type SyntheticEvent } from "react"
import { useNavigate } from "react-router-dom"

function Login() {

    const navigate = useNavigate()
    // const userLoggedStatus = useAuth() as UserProp

    const [showPassword, setShowPassword] = useState<boolean>(false)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    
    function revealPassword(e: SyntheticEvent) {
        e.preventDefault()
        setShowPassword(!showPassword)
    }
    
    function handleUserLogin(e: FormEvent<HTMLFormElement>) {
        e.preventDefault()
        setLoading(true)
        const formData = new FormData(e.currentTarget)

        const email = formData.get("email") as string 
        const password = formData.get("password") as string 

        if (!email || !password) {
            // the loading state will error in 4 seconds
            return
        }
        
        /* Note - The password is not sent to any servers and is for 
        a simple project, so it's saved to localStorage
        */
       const loggedUser = JSON.stringify({
            user: { username: email, key: password }
        })

        localStorage.setItem("loggedUser", loggedUser)
        navigate("/users")
        return
    }

    useEffect(() => {   
        const userLoggedStatus = localStorage.loggedUser
        if (userLoggedStatus !== "") {
            navigate("/users/")
        }
    }, [navigate])

    // raise error message if unable to sign in after 4 seconds
    useEffect(() => {
        let timeout: number | undefined
        if (loading) {
        timeout = setTimeout(() => {
                setLoading(false)
                setError(true)
            }, 4000)
        }
        return () => clearTimeout(timeout)
    }, [loading])

    // hide error notice after 3 seconds
    useEffect(() => {
        let timeout: number | undefined
        if (error) {
        timeout = setTimeout(() => {
                setError(false)
                setLoading(false)
            }, 3000)
        }
        return () => clearTimeout(timeout)
    })

    return (
        <>
            <section className="login">
                <article className="login__article">
                    <header className="login__article-wrapper">
                        <div className="logo__container">
                            <img className="logo__container-favicon" src="/lendsqr_login_logo.png" alt="login aside logo" />
                            <strong className="logo__container-title">lendsqr</strong>
                        </div>
                        <div className="logo__container">
                            <img className="logo__container-image" src="/pablo-sign-in_1.png" alt="login aside image" width="100%" height="100%" />
                        </div>
                    </header>
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
                    <form onSubmit={handleUserLogin} className="form__container-body form__body">
                        <div className="form__body-email">
                            <label htmlFor="email" className="email__label" aria-hidden hidden>email</label>
                            <input name="email" className="user__input email" id="email" type="email" placeholder="Email" autoComplete="email" />
                        </div>
                        <div className="form__body-password">
                            <label htmlFor="Password" className="Password__label" aria-hidden hidden>password</label>
                            <input name="password" className="user__input password" id="password" type={showPassword ? "text" : "password"} placeholder="Password" autoComplete="current-password" />
                            <button className="input__reveal" onClick={revealPassword} type="button">{showPassword ? "Hide" : "Show"}</button>
                        </div>
                        <div className="form__body-forgot-password">
                            <a href="#" className="forgot-password">forgot password?</a>
                        </div>
                        <div className="form__body-login">
                            {error ? (<button className="login__button" type="submit">Error logging in</button>) : (<button className="login__button" type="submit">{loading ? "loading..." : "log in"}</button>)}
                        </div>
                    </form>
                </article>
            </section>
        </>
    )
}

export default Login
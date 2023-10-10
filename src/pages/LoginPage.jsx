    import { Link } from "react-router-dom"
    import { useForm } from "react-hook-form"
    import useAuth from "../hooks/useAuth"
    import "../pages/styles/loginPage.css"
    import { useState } from "react"
    import Show from "../../public/icons/show.ico";
    import Esconder from "../../public/icons/esconder.ico";



    const LoginPage = () => {

        const {handleSubmit, register}= useForm()
        const { loginUser }= useAuth()
        const [showPassword, setShowPassword] = useState(false);

        const togglePasswordVisibility = () => {
            setShowPassword(!showPassword);
        };


        const submit = data => {
            loginUser(data);
        }

    return (
        <div className="login__container">
            <img className="login__image" src="/images/iniciar-sesion.svg" alt="" />
            <article className="login">
                <h1 className="login__title">Login</h1>
                <form className="login__form" onSubmit={handleSubmit(submit)}>
                    <div className="login__items__container">
                        <label htmlFor="email">Email</label>
                        <input {...register("email")} type="email" id="email" placeholder="marco@mail.com" className="input1" />
                    </div>
                    
                      <div className="login__items__container">
                        <label htmlFor="password">Password</label>
                        <input
                            {...register("password")}
                            type={showPassword ? 'text' : 'password'}
                            id="password"
                            placeholder="............"
                            maxLength="47"
                            className={showPassword ? 'has-icon' : ''}
                        />
                        <img src={showPassword ? Show : Esconder} alt="Mostrar/Ocultar contraseña" className="toggle-password-icon" onClick={togglePasswordVisibility} />
                        </div>

                    
                    <button className="login__container__button">Get in</button>
                </form>
                <p className="login__text">Create a new account <Link to="/auth/register">Go to Register</Link></p>
            </article>
        </div>
    )
    }

    export default LoginPage
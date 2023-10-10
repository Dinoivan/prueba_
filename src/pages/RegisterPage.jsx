import { Link } from "react-router-dom"
import { useForm } from "react-hook-form"
import useAuth from "../hooks/useAuth"
import "../pages/styles/registerPage.css"

const RegisterPage = () => {

    const { reset, handleSubmit, register} = useForm()
    const { registerUser }= useAuth()

    const submit = data => {
        registerUser(data)
        reset({
            name: "",
            email: "",
            password: ""
        })

    }
  return (
    <div className="register__container">
        <img className="register__image" src="/images/cuenta-nueva.svg" alt="" />
        <article className="register">
            <h1 className="register__title">Create a new acoount</h1>
            <form className="register__form" onSubmit={handleSubmit(submit)}>
                <div className="register__items__container first">
                    <label htmlFor="email">Email</label>
                    <input {...register("email")} type="email" id="email" />
                </div>
                <div className="register__items__container second">
                    <label htmlFor="name">User Name</label>
                    <input {...register("name")} type="text" id="name" />
                </div>
                <div className="register__items__container third">
                    <label htmlFor="password">Password</label>
                    <input {...register("password")} type="password" id="password" />
                </div>
                <button className="register__button">Create</button>
            </form>
            <p className="register__text">Enter to your account <Link to="/auth/login">login</Link> </p>
        </article>
    </div>
  )
}

export default RegisterPage
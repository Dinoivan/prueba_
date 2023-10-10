import axios from "axios"
import { useDispatch } from "react-redux"
import { setCredentialSlice } from "../store/slices/credentials.slice"
import { useNavigate } from "react-router-dom"
import HomePage from "../pages/HomePage"

const useAuth = () => {

   const baseUrl = `https://playlist-share-dev.fl0.io`

   const dispatch = useDispatch()
   const navigate = useNavigate()

  const loginUser = (data) => {
    const url = `${baseUrl}/api/auth/login`
    axios.post(url, data)
        .then(res => {
            console.log(res.data)
            const token = res.data.token
            const userName = res.data.name
            const email = res.data.email
            localStorage.setItem("token", token )
            localStorage.setItem("username", userName)
            localStorage.setItem("email", email )
            const obj = {token, userName, email}
            dispatch(setCredentialSlice(obj))
            navigate("/")
        })
        .catch(err => {
          console.log(err)
          dispatch(setCredentialSlice(null))
          localStorage.removeItem("token")
          localStorage.removeItem("username")
          localStorage.removeItem("email")

        })
  }

  const registerUser = (data) => {
    const url = `${baseUrl}/api/auth/register`
    axios.post(url, data)
        .then(res => console.log(res.data))
        .catch(err => console.log(res.data))

  }

  return { loginUser, registerUser }
}

export default useAuth
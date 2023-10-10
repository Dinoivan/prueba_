import { Routes, Route } from "react-router-dom"
import './App.css'
import HomePage from './pages/HomePage'
import LoginPage from "./pages/LoginPage"
import RegisterPage from "./pages/RegisterPage"
import { useEffect } from "react"
import { setCredentialSlice } from "./store/slices/credentials.slice"
import { useDispatch } from "react-redux"
import ProtectedRoute from "./pages/ProtectedRoute"
import TrackPage from "./pages/TrackPage"
import ArtistPage from "./pages/ArtistPage"
import PlayListPage from "./pages/PlayListPage"


function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    const token = localStorage.getItem("token")
    const username = localStorage.getItem("username")
    const email = localStorage.getItem("email")
    const obj = { token, username, email}
    dispatch(setCredentialSlice(obj))
  }, [])


  return (

   <div>
    <Routes>
      <Route path="/auth/login"   element={<LoginPage />} />
      <Route path="/auth/register"   element={<RegisterPage />} />
      <Route element={<ProtectedRoute />}>
        <Route path="/" element={<HomePage />} />
        <Route  path="/tracks/:id" element={<TrackPage />}/>
        <Route path="/artist/:id" element={<ArtistPage />} />
        <Route path="/playList" element={<PlayListPage />} />
      </Route>
    </Routes>
   </div>
  )
}

export default App

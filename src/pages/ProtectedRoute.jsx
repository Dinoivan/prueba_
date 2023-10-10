import { useSelector } from "react-redux"
import { Outlet, Navigate } from "react-router-dom"
import HeaderMusic from "../components/shared/HeaderMusic"

const ProtectedRoute = () => {

    const credential = useSelector(store => store.credentials)

    if (credential !== null) {
        return (
            <>
                <HeaderMusic />
                <Outlet />
            </>
        )



    } else {
        return <Navigate to='/auth/login' />
    }
  
}

export default ProtectedRoute
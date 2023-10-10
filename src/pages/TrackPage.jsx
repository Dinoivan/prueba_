import { Link, useNavigate, useParams } from "react-router-dom"
import useFetch from "../hooks/useFetch"
import { useEffect} from "react"
import TrackInfo from "../components/trackPage/TrackInfo"
import TrackRelated from "../components/trackPage/TrackRelated"

const TrackPage = () => {

    const { id }= useParams()

    const [ track, getTrack ] = useFetch()
    
    useEffect(()=>{
        getTrack(`/api/tracks/${id}`)
    },[id])

    const navigate = useNavigate()

    const handleBack = () => {
        navigate("/")

    }

    
  return (
    <div>
        <div onClick={handleBack}>Back</div>
        <TrackInfo 
            track={track}
        />
        <TrackRelated
            artist={track?.artists[0].name}
         />
        
    </div>
  )
}

export default TrackPage
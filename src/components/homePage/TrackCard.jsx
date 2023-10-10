import { useDispatch } from "react-redux"
import { addTrack } from "../../store/slices/tracksSlice"
import { Link, useNavigate } from "react-router-dom"
import "../homePage/trackCard.css"

const TrackCard = ({ track }) => {

    const dispatch = useDispatch()

    const navigate = useNavigate()

    const handleAddTrack = () => {
        dispatch(addTrack(track))

    }
    const handleArtist = (id) => {
        navigate(`/artist/${id}`)

    }

    
  return (
    <section className="card__music__container">
        <header className="card__music__header">
            <img src={track.album.images[0].url} alt="" />
        </header>
        <article className="card__music__body">
            <Link className="card__music__name" to={`/tracks/${track.id}`}><h3>{track.name}</h3></Link>
            <ul className="card__music-artists__container">
                {
                    track.artists.map(art => (
                        <li className="card__music-artist__name" onClick={() => handleArtist(art.id)} key={art.id}>{art.name}</li>
                    ))
                }
            </ul>
        </article>
        <footer className="card__music__footer">   
            <a className="spotify__icon" target="_blank" href={track.external_urls.spotify}>
                <i className='bx bxl-spotify'></i>
            </a>
            <span className="plus__icon" onClick={handleAddTrack}>
                <i className='bx bx-plus-circle'></i>
            </span>
        </footer>
    </section>
  )
}

export default TrackCard
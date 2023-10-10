import { useDispatch } from "react-redux"
import { deleteTrack } from "../../store/slices/tracksSlice"
import "../shared/shared-style/trackList.css"


const TrackList = ({ track }) => {

    const dispatch = useDispatch()
    
    const handleDelete = () => {
       dispatch(deleteTrack(track))
    }
    console.log(track)

    
  return (
    <section className="tracklist__container">
        <header className="tracklist__header">
            <img src={track.album.images[0].url} alt="" />
        </header>
        <article className="tracklist__body">
            <h3 className="tracklist__name">{track.name}</h3>
            <ul className="artist__name__container">
                {
                    track.artists.map( artist => (
                        <li className="artist__name" key={artist.id}>{artist.name}</li>
                    ))
                }
            </ul>
        </article>
        <footer onClick={handleDelete}>
            <i className='bx bx-minus-circle'></i>
        </footer>
    </section>
  )
}

export default TrackList
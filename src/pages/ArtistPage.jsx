import { Link, useParams } from "react-router-dom"
import useFetch from "../hooks/useFetch"
import { useEffect } from "react"
import ArtistInfo from "../components/artistPage/ArtistInfo"
import AlbumArtist from "../components/artistPage/AlbumArtist"
import ArtistTopSong from "../components/artistPage/ArtistTopSong"

const ArtistPage = () => {

    const { id } = useParams()
    const [ artist, getArtist ] = useFetch()

    useEffect(() => {
        getArtist(`/api/artists/${id}`)
    }, [id])


  return (
    <div>
        <Link to="/">Back</Link>
        <ArtistInfo 
            artist={artist}
        />
        <AlbumArtist
            albums={artist?.albums}
         />
         <ArtistTopSong
            tracks={artist?.songsTop}
        />

        
    </div>
  )
}

export default ArtistPage
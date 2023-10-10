import AlbumCard from "./AlbumCard"

const AlbumArtist = ( { albums }) => {


  return (
    <div>
        <h3>Artist´s Album</h3>
        <div>
            {
                albums?.map(albumInfo => (
                    <AlbumCard
                        key={albumInfo.id}
                        album={albumInfo}
                    />
                ))
            }
        </div>
    </div>
  )
}

export default AlbumArtist
import React from 'react'
import TrackCard from '../homePage/TrackCard'

const ArtistTopSong = ({ tracks }) => {




  return (
    <section>
        <h3>Artists Songs Top</h3>
        <div>
            {
                tracks?.map(trackInfo => (
                    <TrackCard
                        key={trackInfo.id}
                        track={trackInfo}
                     />
                ))
            }
        </div>
    </section>
  )
}

export default ArtistTopSong
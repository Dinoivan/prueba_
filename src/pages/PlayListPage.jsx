import { useEffect } from "react"
import usePlayList from "../hooks/usePlayList"

const PlayListPage = () => {
    const {getPlayList, playList} = usePlayList()

    useEffect(()=> {
        getPlayList()

    }, [])

  return (
    <article>
        {
            playList.map(track => (
                <div key={track.id}>
                    <h2>{track.title}</h2>
                </div>
            ))
        }

    </article>
  )
}

export default PlayListPage
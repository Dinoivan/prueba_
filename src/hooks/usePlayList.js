import axios from "axios"
import { useState } from "react"
import { setTracksSlice } from "../store/slices/tracksSlice"
import { useDispatch } from "react-redux"
import getConfigToken from "../services/getConfigToken"

const usePlayList = () => {
    const [playList, setUsePlayList] = useState([])

    const dispatch = useDispatch()

    const baseUrl = 'https://playlist-share-dev.fl0.io'

    const getPlayList = () => {
        const url = `${baseUrl}/api/playlists/me`
        axios.get(url, getConfigToken())
            .then(res => setUsePlayList(res.data))
            .catch(err => console.log(err))

    }

    const postPlayList = (data) => {
        const url = `${baseUrl}/api/playlists`
        axios.post(url, data, getConfigToken())
            .then(res => {
                console.log(res.data)
                setUsePlayList([...playList, res. data.info])
                dispatch(setTracksSlice([]))
            })
            .catch(err => console.log(err))
    }

    const deletePlayList = (id) => {
        const url = `${baseUrl}/api/playlists/${id}`
        axios.delete(url, getConfigToken())
            .then(res => console.log(res.data))
            .catch(err => console.log(err))

    }
    return {playList, getPlayList, postPlayList, deletePlayList}
  
}

export default usePlayList
import { useState } from "react"
import axios from "axios"
import getConfigToken from "../services/getConfigToken"


const useFetch = () => {

    const [infoApi, setInfoApi] = useState()
    const baseUrl = `https://playlist-share-dev.fl0.io`
  

    const getApi = (path) => {
        const url = `${baseUrl}${path}`
        console.log(url)
        axios.get(url, getConfigToken())
        .then(res => setInfoApi(res.data))
        .catch(err => console.log(err))
    }

    return [infoApi, getApi]
}

export default useFetch
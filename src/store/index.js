import { configureStore } from "@reduxjs/toolkit"
import Credentials from "./slices/credentials.slice"
import tracks from "./slices/tracksSlice"

export default configureStore({
    reducer: {
        Credentials,
        tracks
    }

})

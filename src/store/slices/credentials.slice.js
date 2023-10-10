import { createSlice } from '@reduxjs/toolkit';

export const credentialSlice = createSlice({
    name: 'credentials',
    initialState: null,
    reducers: {
    setCredentialSlice: (state, action) => action.payload
    }
})

export const { setCredentialSlice } = credentialSlice.actions;

export default credentialSlice.reducer;

import { createSlice } from '@reduxjs/toolkit'




export const contactSlice = createSlice({
    name: 'contacts',
    initialState: {
        red: '',
        blue: '',
        white: '',
        all: ''
    },
    reducers: {
        redSock: (state, action) => {
            if(action.payload.count !== undefined && action.payload.price !== undefined) {
                state.red = action.payload.count * action.payload.price
            }

        },
        blueSock: (state, action) => {
            if(action.payload.count !== undefined && action.payload.price !== undefined) {
                state.blue = action.payload.count * action.payload.price
            }
        },
        whiteSock: (state, action) => {
            if(action.payload.count !== undefined && action.payload.price !== undefined) {
                state.white = action.payload.count * action.payload.price
            }
        },
        allSock: (state) => {
            state.all = state.red + state.blue + state.white
        }

    }
})


export const { redSock, blueSock, whiteSock, allSock } = contactSlice.actions

export default contactSlice.reducer
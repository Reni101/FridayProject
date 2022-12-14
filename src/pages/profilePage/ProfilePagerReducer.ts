import {profileEditType, profilePageAPI, updatedUser} from "./profileAPI";
import {AxiosError} from "axios";
import {setStatusApp} from "../../AppReducer";
import {handleError} from "../../common/ErrorUtils/errorFunck";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {AppThunk} from "../../Redux/Store";


const initialProfileState = {
    user_id: "" as string,
    email: null as string | null,
    name: null as string | null,
    publicCardPacksCount: null as number | null,
    avatar: null as string | null
}

export type ActionsProfileType =
    | ReturnType<typeof editProfileNameAvatarAC>
    | ReturnType<typeof setProfileDataAC>


export type sliceProfileType = typeof initialProfileState

const slice = createSlice({
    name: "ProfilePageReducer",
    initialState: initialProfileState,
    reducers: {
        editProfileNameAvatarAC(state, action: PayloadAction<{ name: string | null, avatar: string | null }>) {
            state.name = action.payload.name
            state.avatar = action.payload.avatar
        },
        setProfileDataAC(state, action: PayloadAction<{ data: updatedUser }>) {
            state.name = action.payload.data.name
            state.email = action.payload.data.email
            state.avatar = action.payload.data.avatar
            state.user_id = action.payload.data._id
        }
    }
})

export const ProfilePageReducer = slice.reducer
export const {editProfileNameAvatarAC, setProfileDataAC} = slice.actions


//==============================TC============================
export const editProfileNameAvatarTC = ({name, avatar}: profileEditType):AppThunk => async (dispatch) => {
    dispatch(setStatusApp({status:'loading'}))
    try {
        const res = await profilePageAPI.editProfileName({name, avatar})
        dispatch(editProfileNameAvatarAC({name: res.data.updatedUser.name, avatar: res.data.updatedUser.avatar}))
        dispatch(setStatusApp({status:'succeeded'}))
    } catch (e) {
        const err = e as Error | AxiosError
        handleError(err, dispatch)
    }
}


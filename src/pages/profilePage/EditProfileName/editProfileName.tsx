import React, {ChangeEvent, FC, useState} from 'react';
import {useAppDispatch} from "../../../hooks/hooks";
import {editProfileNameAvatarTC} from "../ProfilePagerReducer";
import styleEditProfile from './editProfileName.module.css'
import EditIcon from '@mui/icons-material/Edit';
import {Button, TextField} from "@mui/material";


type PropsType = {
    profileName: string | null
}
export const EditProfileName: FC<PropsType> = React.memo((props: PropsType) => {
    const [Name, setName] = useState(props.profileName)
    const [editMode, setEditMode] = useState(false)
    const dispatch = useAppDispatch()

    const setEditModeHandler = () => {
        setEditMode(!editMode)

    }
    const changeNameHandler = () => {
        dispatch(editProfileNameAvatarTC({name:Name}))

    }
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setName(e.currentTarget.value.trim())
    }


    return (
        <div>
            {editMode ? <div className={styleEditProfile.EditNickName}>
                    <TextField label="Nickname"
                               style={{marginTop: "30.5px", width: "300px"}}
                               variant="standard"
                               autoFocus
                               onChange={onChangeHandler}
                               onBlur={setEditModeHandler}
                               defaultValue={props.profileName}
                               color={"success"}

                    />
                    <Button size="small"
                            onMouseDown={changeNameHandler}
                            variant="contained"
                            color={"success"}
                    >SAVE</Button>
                </div>

                : <div className={styleEditProfile.Name}>{props.profileName} <EditIcon onClick={setEditModeHandler}
                                                                                       style={{cursor: "pointer"}}/>
                </div>}
        </div>
    );
})
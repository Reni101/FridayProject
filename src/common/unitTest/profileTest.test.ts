import {
    editProfileNameAvatarAC,
    ProfilePageReducer, sliceProfileType
} from "../../pages/profilePage/ProfilePagerReducer";


let startState: sliceProfileType


beforeEach(() => {
    startState = {
        user_id: "",
        email: "",
        name: "",
        publicCardPacksCount: 0,
        avatar: "",
    }
})

test('correct edit profile name', () => {
    const endState = ProfilePageReducer(startState, editProfileNameAvatarAC({name: "Maxim1", avatar: null}))

    expect(endState.name).toBe("Maxim1")
    expect(endState.avatar).toBe(null)
})
test('correct edit profile avatar', () => {
    const endState = ProfilePageReducer(startState, editProfileNameAvatarAC({name: "", avatar: "new avatar"}))

    expect(endState.name).toBe("")
    expect(endState.avatar).toBe("new avatar")
})


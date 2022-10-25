import { createSlice } from "@reduxjs/toolkit";
import initialProfile from "./profile.json";

const profileSlice = createSlice({
    name: 'profile',
    initialState: initialProfile,
    reducers: {
        updateProfile(state, action) {
            state.name = action.payload.name.name;
            state.bio = action.payload.bio.bio;
            state.dateOfBirth = action.payload.dateOfBirth.dateOfBirth;
            state.location = action.payload.location.location;
            state.website = action.payload.website.website;
        }
    }
});

export const {updateProfile} = profileSlice.actions;
export default profileSlice.reducer
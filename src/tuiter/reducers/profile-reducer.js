import { createSlice } from "@reduxjs/toolkit";
import initialProfile from "../data/profile.json";

const profileSlice = createSlice({
    name: 'profile',
    initialState: initialProfile,
    reducers: {
        updateProfile(state, action) {
            state.name = action.payload.name;
            state.bio = action.payload.bio;
            state.dateOfBirth = action.payload.dateOfBirth;
            state.location = action.payload.location;
            state.website = action.payload.website;
        }
    }
});

export const {updateProfile} = profileSlice.actions;
export default profileSlice.reducer
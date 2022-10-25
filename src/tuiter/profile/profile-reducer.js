import { createSlice } from "@reduxjs/toolkit";

const initialProfile = {
        firstName: 'Chuying',
        lastName: 'Huang',
        handle: '@daisy',
        profilePicture: 'profilepic.png',
        bannerPicture: 'profilebanner.PNG',
        bio: 'Student, Software Engineer, Space, and renewable enthusiast. Retuits and likes are not endorsements.',
        website: 'youtube.com/webdevtv',
        location: 'San Jose, CA',
        dateOfBirth: '12/29/1996',
        dateJoined: '4/2009',
        followingCount: 340,
        followersCount: 223
    }


const profileSlice = createSlice({
    name: 'profile',
    initialState: initialProfile,
});

export default profileSlice.reducer
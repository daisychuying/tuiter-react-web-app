import React, {useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateProfile } from "../profile/profile-reducer";
import { useNavigate } from "react-router-dom";

const EditProfile = () => {
    const profile = useSelector( state => state.profile );
    const [name, setName] = useState({name: profile.name});
    const [bio, setBio] = useState({bio: profile.bio});
    const [location, setLocation] = useState({locaton: profile.location});
    const [website, setWebsite] = useState({website: profile.website});
    const [dateOfBirth, setDOB] = useState({dateOfBirth: profile.dateOfBirth});
    const dispatch = useDispatch();
    let navigate = useNavigate();

    const profileSaveHandler = (n, b, l, w, dob) => {
        const newProfile = {
            name: n,
            bio: b,
            location: l,
            website: w,
            dateOfBirth: dob,
        }
        dispatch(updateProfile(newProfile));
        navigate('/tuiter/profile');
    }


    return (
        <>
            <div className="position-relative">
                <div className="row">
                    <a className="col col-2 mt-2" href="/tuiter/profile"><i className="bi bi-x-lg fs-4 fw-bold"></i></a>
                    <div className="col col-8 mt-2"><span className="fs-4 fw-bold">Edit Profile</span></div>
                    <button className="col col-2 btn btn-dark float-end rounded-pill"
                            onClick={() => profileSaveHandler(name, bio, location, website, dateOfBirth)}>
                        Save</button>
                </div>
                <br/>
                <img className="" width="100%" alt="" src={`/images/${profile.bannerPicture}`}/>
                <div className="row">
                    <div className="col col-8">
                        <img className="position-absolute float-start rounded-circle bottom-0 start-0 ms-5"
                             height="125px" alt=""
                             src={`/images/${profile.profilePicture}`}/>
                    </div>
                    <div className="col col-4">
                        <br/>
                        <br/>
                        <br/>
                    </div>
                </div>
            </div>
            <div className="mt-3 form-group">
                <label htmlFor="inputName">Name</label><br/>
                <input type="text" id="inputName" className="form-control"
                        onChange={(e)=>{setName({name: e.target.value})}}
                        value={name.name}/><br/>
                <label htmlFor="inputBio">Bio</label><br/>
                <textarea type="text" className="form-control"
                          onChange={(e)=>{setBio({bio: e.target.value})}}
                          value={bio.bio} id="inputBio"/><br/>
                <label htmlFor="inputLocation">Location</label><br/>
                <input type="text" id="inputLocation" className="form-control"
                       onChange={(e)=>{setLocation({location: e.target.value})}}
                       value={location.locaton}/><br/>
                <label htmlFor="inputWebsoye">Website</label><br/>
                <input type="text" id="inputWebsite" className="form-control"
                       onChange={(e)=>{setWebsite({website: e.target.value})}}
                       value={website.website}/><br/>
                <label htmlFor="inputDOB">Date of Birth</label><br/>
                <input type="date" id="inputDOB" className="form-control"
                       onChange={(e)=>{setDOB({dateOfBirth: e.target.value})}}
                       value={dateOfBirth.dateOfBirth}/>
            </div>
        </>
    )
}

export default EditProfile;
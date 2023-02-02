import React, {useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateProfile } from "../reducers/profile-reducer";
import { useNavigate } from "react-router-dom";

const EditProfile = () => {
    const profile = useSelector( state => state.profile );
    const [name, setName] = useState(profile.name);
    const [bio, setBio] = useState(profile.bio);
    const [location, setLocation] = useState(profile.location);
    const [website, setWebsite] = useState(profile.website);
    const [dateOfBirth, setDOB] = useState(profile.dateOfBirth);
    const dispatch = useDispatch();
    let navigate = useNavigate();

    const profileSaveHandler = () => {
        const newProfile = {
            ...profile,
            name: name,
            bio: bio,
            location: location,
            website: website,
            dateOfBirth: dateOfBirth,
        }
        dispatch(updateProfile(newProfile));
        navigate('/tuiter/profile');
    }


    return (
        <>
            <div className="position-relative">
                <div className="row">
                    <div className="col col-2 mt-2"
                         onClick={() => navigate('/tuiter/profile')} >
                        <i className="bi bi-x-lg fs-4 fw-bold"></i></div>
                    <div className="col col-8 mt-2"><span className="fs-4 fw-bold">Edit Profile</span></div>
                    <button className="col col-2 btn btn-dark float-end rounded-pill"
                            onClick={() => profileSaveHandler()}>
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
                        onChange={(e)=> setName( e.target.value)}
                        value={name}/><br/>
                <label htmlFor="inputBio">Bio</label><br/>
                <textarea type="text" className="form-control"
                          onChange={(e)=> setBio( e.target.value)}
                          value={bio} id="inputBio"/><br/>
                <label htmlFor="inputLocation">Location</label><br/>
                <input type="text" id="inputLocation" className="form-control"
                       onChange={(e)=> setLocation( e.target.value)}
                       value={location}/><br/>
                <label htmlFor="inputWebsoye">Website</label><br/>
                <input type="text" id="inputWebsite" className="form-control"
                       onChange={(e)=> setWebsite( e.target.value)}
                       value={website}/><br/>
                <label htmlFor="inputDOB">Date of Birth</label><br/>
                <input type="date" id="inputDOB" className="form-control"
                       onChange={(e)=> setDOB( e.target.value)}
                       value={dateOfBirth}/>
            </div>
        </>
    )
}

export default EditProfile;
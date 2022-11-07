import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const ProfileComponent = () => {
    const profile = useSelector( state => state.profile );
    let navigate = useNavigate();
    const routeChange = () => {
        // let path = `edit-profile`;
        navigate('/tuiter/edit-profile');
    }

    return (
        <>
            <div className="position-relative">
                <div className="row">
                    <i className="col col-2 bi bi-arrow-left fs-4 fw-bold mt-2"></i>
                    <div className="col col-10"><span className="fs-4 fw-bold">{profile.name}</span>
                    <p className="text-secondary">6,432 Tuits</p></div>
                </div>
                <img className="" width="100%" alt="" src={`/images/${profile.bannerPicture}`}/>
                <div className="row">
                    <div className="col col-8">
                        <img className="position-absolute float-start rounded-circle bottom-0 start-0 ms-5"
                             height="125px" alt=""
                             src={`/images/${profile.profilePicture}`}/>
                    </div>
                    <div className="col col-4">
                        <br/>
                        <button type="button" className="btn btn-light float-end rounded-pill"
                                onClick={routeChange}>
                                Edit Profile</button>
                    </div>
                </div>
            </div>
            <div>
                <div className="fs-4 fw-bold">{profile.name} </div>
                <div className="text-secondary">{profile.handle}</div>
                <br/>
                <div>{profile.bio}</div>
                <div className="text-secondary mt-3">
                    <i className="bi bi-geo-alt"></i><span> {profile.location} </span>
                    <i className="bi bi-balloon"></i><span> {profile.dateOfBirth} </span>
                    <i className="bi bi-calendar"></i><span> Joined {profile.dateJoined}</span>
                </div>
            </div>

        </>
    );
}

export default ProfileComponent;
import React from "react";
import {deleteTuit} from "./tuits-reducer";
import {useDispatch} from "react-redux";
const TuitItem = (
    {
        tuit = {
            "topic": "Space",
            "userName": "SpaceX",
            "time": "2h",
            "title": "Tesla Cybertruck lands on Mars and picks up the Curiosity rover on its 6' bed",
            "image": "tesla-logo.png",
            "liked":  true,
            "replies": 123,
            "retuits": 432,
            "likes": 2345,
            "handle": "@spacex",
            "tuit": "You want to wake up in the morning and think the future is going to be great - and that’s what being a spacefaring civilization is all about. It’s about believing in the future and thinking that the future will be better than the past. And I can’t think of anything more exciting than going out there and being among the stars"

        }
    }
) => {
    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {
        dispatch(deleteTuit(id));
    }
    return(
        <li className="list-group-item wd-bg-black">
            <div className="row">
                <div className="col col-2">
                    <div><img className="float-start rounded-circle" height="60px" alt="" src={`/images/${tuit.image}`}/></div>
                </div>
                <div className="col-10">
                    <div className="fw-bolder fs-6 my-1">{tuit.userName} <i className="bi bi-patch-check"></i>
                        <span className="text-secondary fw-normal"> {tuit.handle} • {tuit.time}</span>
                        <i className="bi bi-x-lg float-end" onClick={() => deleteTuitHandler(tuit._id)}></i>
                    </div>
                    <div className="my-1">{tuit.tuit}</div>
                    <div className="row  my-2">
                        <div className="col-3 mx-auto text-secondary">
                            <a href="index.js" className="px-1"><i className="bi bi-chat-left-heart text-secondary"></i></a> <span>{tuit.replies}</span>
                        </div>
                        <div className="col-3 mx-auto text-secondary">
                            <a href="index.js" className="px-1"><i className="bi bi-repeat text-secondary"></i></a> <span>{tuit.retuits}</span>
                        </div>
                        <div className="col-3 mx-auto text-secondary">
                            <a href="index.js" className="px-1"><i className={`bi bi-suit-heart-fill text-secondary ${tuit.liked && "text-danger"}`}></i></a> <span>{tuit.likes}</span>
                        </div>
                        <div className="col-3 mx-auto text-secondary">
                            <a href="index.js" className="px-1"><i className="bi bi-box-arrow-up text-secondary"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </li>
    );
};
export default TuitItem;
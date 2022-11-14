import React from "react";
import {useDispatch} from "react-redux";
import {updateTuitThunk} from "../../services/tuits-thunks";

const TuitStats = ({tuit}) => {
    const dispatch = useDispatch();
    return(
        <div className="row  my-2">
            <div className="col mx-auto text-secondary">
                <i className="bi bi-chat-left-heart text-secondary px-1"></i> {tuit.replies}
            </div>
            <div className="col mx-auto text-secondary">
                <i className="bi bi-repeat text-secondary px-1"></i> {tuit.retuits}
            </div>
            <div className="col mx-auto text-secondary">
                <i onClick={() => dispatch(updateTuitThunk(
                    {...tuit,
                    likes: tuit.likes + 1}
                ))} className="bi bi-heart-fill me-2 text-danger"></i>{tuit.likes}
            </div>
            <div className="col mx-auto text-secondary">
                <i onClick={() => dispatch(updateTuitThunk(
                    {...tuit,
                    dislikes: tuit.dislikes + 1}
                ))} className="bi bi-hand-thumbs-down-fill px-1"></i> {tuit.dislikes}
            </div>
            <div className="col mx-auto text-secondary">
                <i className="bi bi-box-arrow-up text-secondary"></i>
            </div>
        </div>
    )
}
export default TuitStats;
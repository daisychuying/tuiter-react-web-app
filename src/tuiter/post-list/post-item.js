import React from "react";


const PostItem = (
    {
        post = {
            "userName": "Chuying Huang",
            "handle": "chuyinghuang",
            "time": "2h",
            "comment": "Future in NanoEngineering",
            "title": "Combining NanoParticles using DNA Double Helix | Science",
            "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            "profileImg": "profilepic.png",
            "postImg": "profilebanner.PNG",
            "comments": "100",
            "likes": "89",
            "tweets": "3.5K"
        }
    }
) => {
    return(
    <li className="list-group-item wd-bg-black">
        <div className="row">
            <div className="col col-2">
                <div><img className="float-start rounded-circle" height="60px" alt="" src={`/images/${post.profileImg}`}/></div>
            </div>
            <div className="col-10">
                <div className="fw-bolder fs-6 my-1">{post.userName} <i className="bi bi-patch-check"></i> <span className="text-secondary fw-normal"> @{post.handle} • {post.time}</span><span className="text-secondary float-end">•••</span></div>
                <div className="my-1">{post.comment}</div>
                <div className="rounded-3 border border-secondary">
                    <img className="rounded-2 " width="100%" alt="" src={`/images/${post.postImg}`}/>
                    <div className="border-top border-secondary">
                        <div className="fw-normal px-2 my-1">{post.title}</div>
                        <div className="text-secondary px-2">{post.content}</div>
                    </div>
                </div>
                <div className="row  my-2">
                    <div className="col-3 mx-auto text-secondary">
                        <a href="index.js" className="px-1"><i className="bi bi-chat-left-heart text-secondary"></i></a> <span>{post.comments}</span>
                    </div>
                    <div className="col-3 mx-auto text-secondary">
                        <a href="index.js" className="px-1"><i className="bi bi-repeat text-secondary"></i></a> <span>{post.tweets}</span>
                    </div>
                    <div className="col-3 mx-auto text-secondary">
                        <a href="index.js" className="px-1"><i className="bi bi-suit-heart-fill text-secondary"></i></a> <span>{post.likes}</span>
                    </div>
                    <div className="col-3 mx-auto text-secondary">
                        <a href="index.js" className="px-1"><i className="bi bi-box-arrow-up text-secondary"></i></a>
                    </div>
                </div>
            </div>
        </div>     
    </li>

    );
}

export default PostItem;
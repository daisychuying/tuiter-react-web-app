import React from "react";
import {Link} from "react-router-dom";
import {useLocation} from "react-router";

const NavigationSidebar = () => {
    const {pathname} = useLocation();
    const paths = pathname.split('/')
    const active = paths[2];
    return (
        <div className="list-group">
            <a href="index.js" className="list-group-item">Tuiter</a>
            <Link to="/tuiter/home" className={`list-group-item ${active === 'home'?'active':''}`}>
                <i className="pe-2 bi bi-house-door-fill"></i>
                Home
            </Link>
            <Link to="/tuiter/explore" className={`list-group-item ${active === 'explore'?'active':''}`}>
                <i className="pe-2 bi bi-hash"></i>
                Explore
            </Link>
            <Link to="/" className="list-group-item">
                <i className="pe-2 bi bi-asterisk"></i>
                Labs
            </Link>
            <a href="index.js" className={`list-group-item
                    ${active === 'notifications'?'active':''}`}>
                <i className="pe-2 bi bi-bell"></i>
                Notifications
            </a>
            <a href="index.js" className={`list-group-item
                    ${active === 'messages'?'active':''}`}>
                <i className="pe-2 bi bi-envelope"></i>
                Messages
            </a>
            <a href="index.js" className={`list-group-item
                    ${active === 'bookmarks'?'active':''}`}>
                <i className="pe-2 bi bi-bookmark"></i>
                Bookmarks
            </a>
            <a href="index.js" className={`list-group-item
                    ${active === 'lists'?'active':''}`}>
                <i className="pe-2 bi bi-card-list"></i>
                Lists
            </a>
            <Link to="/tuiter/profile" className={`list-group-item ${active === 'profile'?'active':''}`}>
                <i className="pe-2 bi bi-person"></i>
                Profile
            </Link>
            <a href="index.js" className={`list-group-item
                    ${active === 'more'?'active':''}`}>
                <i className="pe-2 bi bi-three-dots"></i>
                More
            </a>
        </div>
            );
};
export default NavigationSidebar;
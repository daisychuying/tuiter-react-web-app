import ExploreComponent from "./explore";
import HomeComponent from "./home";
import NavigationSidebar from "./navigation-sidebar";
import WhoToFollowList from "./who-to-follow-list";
import {Routes, Route} from "react-router";




function Tuiter() {
    return (
        <div className="row mt-2">
            <div className="col-2 col-md-2 col-lg-1 col-xl-2">
                <NavigationSidebar active="explore"/>
            </div>
            <div className="col-9 col-md-10 col-lg-7 col-xl-6"
                 style={{"position": "relative"}}>
                <Routes>
                    <Route path="/home"    element={<HomeComponent/>}/>
                    <Route path="/explore" element={<ExploreComponent/>}/>
                </Routes>
            </div>
            <div className="col-3 col-lg-2 col-xl-4">
                <WhoToFollowList/>
            </div>
        </div>
    );
}

export default Tuiter
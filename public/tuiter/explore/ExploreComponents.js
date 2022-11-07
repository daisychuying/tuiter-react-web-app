import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
    return(`
    <div class="ms-0 row">
                <div class="col col-11 fs-4 position-relative">
                    <input class="wd-background-darkgray wd-text-gray wd-border-darkgray ps-5 fs-5 form-control rounded-pill" placeholder="Search Tuiter">
                    <i class="wd-text-gray fas fa-search position-absolute top-0 start-0 mt-2 ms-4"></i>

                </div>
                <div class="col-1 fs-4">
                    <a href="explore-settings.html"><i class="wd-text-gray fa fa-cog"></i> </a>
                </div>
            </div>

            <ul class="ms-0 nav nav-pills align-items-stretch mt-2 mb-2">
                <li class="nav-item wd-nav-selected">
                    <a class="nav-link active wd-nav-selected fs-6" href="#">For you</a>
                </li>
                <li class="nav-item">
                    <a class="wd-background-black wd-text-gray nav-link fs-6" href="#">Trending</a>
                </li>
                <li class="nav-item">
                    <a class="wd-background-black wd-text-gray nav-link fs-6" href="#">News</a>
                </li>
                <li class="nav-item">
                    <a class="wd-background-black wd-text-gray nav-link fs-6" href="#">Sports</a>
                </li>
                <li class="nav-item">
                    <a class="wd-background-black wd-text-gray nav-link fs-6 d-sm-none d-md-block" href="#">Entertainment</a>
                </li>
            </ul>
            <div class="pb-0 wd-border-top-darkgray position-relative mb-2">
                <img src="../../images/starship.png" width="100%" class="mt-0 wd-border-top-darkgray">
                <h3 class="text-white position-absolute bottom-0 wd-left-16 ps-2" > SpaceX's Starship <i class="fa-solid fa-rocket"></i></h3>
            </div>
            ${PostSummaryList()}
    
    `);
}

export default ExploreComponent;
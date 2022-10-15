import whos from "./who.js";
import WhoToFollowListItem from "./WhoToFollowListItem.js";

const WhoToFollowList = () => {
    return (`
    <ul class="list-group">
        <li class="wd-background-darkgray wd-text-white list-group-item">
            <h5 class="fw-bold">Who to follow</h5>
        </li>
        ${
            whos.map(who => {
                return(WhoToFollowListItem(who));
            }).join('')
    }
    </ul>
    `);
}

export default WhoToFollowList;
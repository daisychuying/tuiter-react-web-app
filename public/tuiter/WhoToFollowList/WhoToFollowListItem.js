import who from "./who.js";

const WhoToFollowListItem = (who) => {
    return(`
    <li class="wd-background-darkgray wd-text-white list-group-item">
        <div class="row">
            <div class="col col-2">
                <img class="float-start rounded-circle" height="50px" src=${who.avatarIcon}>
            </div>
            <div class="col col-6">
                <div class="fw-bold">${who.userName} <i class="fa fa-check-circle"></i></div>
                <div class="text-secondary">@${who.handle}</div>
            </div>
            <div class="col-4 my-auto">
                <button class="btn btn-primary rounded-pill" >Follow</button>
            </div>
        </div>
    </li>
    `);
}

export default WhoToFollowListItem;
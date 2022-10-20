import post from "./posts.js";

const PostSummaryItem = (post) => {
    return(`
    <li class="wd-border-top-darkgray wd-background-black wd-text-white list-group-item">
        <div class="row">
            <div class="col col-9">
                <div class="text-secondary">${post.topic}</div>
                <div class="fw-bolder">${post.userName} <i class="fa fa-check-circle"></i> <span class="text-secondary">- ${post.time}</span></div>
                <div class="fw-bolder">${post.title}</div>
                <div class="text-secondary">${post.tweets}</div>
            </div>
            <div class="col col-3 mx-auto my-suto"><img class="float-end rounded-3" height="90px" src=${post.image}></div>
        </div>
    </li>

    `);
}

export default PostSummaryItem;
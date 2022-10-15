import post from "./posts.js";


const PostItem = (post) => {
    return(`
    <li class="list-group-item">
        <div class="row">
            <div class="col col-2">
                <div><img src=${post.profileImg} class="float-start rounded-circle" height="60px"></div>
            </div>
            <div class="col-10">
                <div class="text-white fw-bolder fs-6 my-1">${post.userName} <i class="fa fa-check-circle"></i> <span class="text-secondary fw-normal"> @${post.handle} • ${post.time}</span><span class="text-secondary float-end">•••</span></div>
                <div class="text-white my-1">${post.comment}</div>
                <div class="rounded-3 border border-secondary">
                    <img src=${post.postImg} class="rounded-2 " width="100%">
                    <div class="border-top border-secondary">
                        <div class="fw-normal px-2 my-1">${post.title}</div>
                        <div class="text-secondary px-2">${post.content}</div>
                    </div>
                </div>
                <div class="row  my-2">
                    <div class="col-3 mx-auto text-secondary">
                        <a href="#" class="px-2"><i class="fa-regular fa-comment text-secondary"></i></a> <span>${post.comments}</span>
                    </div>
                    <div class="col-3 mx-auto text-secondary">
                        <a href="#" class="px-2"><i class="fa-solid fa-retweet text-secondary"></i></a> <span>${post.tweets}</span>
                    </div>
                    <div class="col-3 mx-auto text-secondary">
                        <a href="#" class="px-2"><i class="fa-solid fa-heart text-secondary"></i></a> <span>${post.likes}</span>
                    </div>
                    <div class="col-3 mx-auto text-secondary">
                        <a href="#" class="px-2"><i class="fa-solid fa-arrow-up-from-bracket text-secondary"></i></a>
                    </div>
                </div>
            </div>
        </div>     
    </li>

    `);
}

export default PostItem;
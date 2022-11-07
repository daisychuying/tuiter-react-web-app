import posts from "./posts.js";
import PostItem from "./PostItem.js";

const PostList = () => {
    return (`
    <ul class="list-group wd-bg-black">
    ${
        posts.map(post => {
            return(PostItem(post));
        }).join('')
    }
    </ul>
    `);
}

export default PostList;
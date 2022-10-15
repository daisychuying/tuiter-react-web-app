import posts from "./posts.js";
import PostSummaryItem from "./PostSummaryItem.js";

const PostSummaryList = () => {
    return (`
    <ul class="wd-border-top-darkgray list-group">
    ${
        posts.map(post => {
            return(PostSummaryItem(post));
        }).join('')
    }
    </ul>
    `);
}

export default PostSummaryList;
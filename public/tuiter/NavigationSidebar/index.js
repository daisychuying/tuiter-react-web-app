const NavigationSidebar = (active) => {
    return(`
    <div class="list-group">
        <a class="pt-3 pb-3 fs-5 list-group-item" href="/"><i class="fab fa-twitter"></i></a>
        
        <a href="../HomeScreen/index.html" class="pt-3 pb-3 list-group-item list-group-item-action fs-6
        ${active === 'home' ? 'active' : ''}">
        <i class="pe-3 fa fa-solid fa-home"></i>Home</a>
        
        <a href="../explore/index.html" class="pt-3 pb-3 list-group-item list-group-item-action fs-6
        ${active === 'explore' ? 'active' : ''}">
        <i class="pe-3 fa fa-solid fa-hashtag"></i> Explore</a>
        
        <a href="../notifications.html" class="pt-3 pb-3 list-group-item list-group-item-action fs-6
        ${active === 'notifications' ? 'active' : ''}">
        <i class="pe-3 fa fa-solid fa-bell"></i> Notifications</a>
        
        <a href="../messages.html" class="pt-3 pb-3 list-group-item list-group-item-action fs-6
        ${active === 'notifications' ? 'active' : ''}">
        <i class="pe-3 fa fa-solid fa-envelope"></i> Messages</a>
        
        <a href="../bookmarks.html" class="pt-3 pb-3 list-group-item list-group-item-action fs-6
        ${active === 'bookmarks' ? 'active' : ''}">
        <i class="pe-3 fa fa-solid fa-bookmark"></i> Bookmarks</a>
        
        <a href="../lists.html" class="pt-3 pb-3 list-group-item list-group-item-action fs-6
        ${active === 'lists' ? 'active' : ''}">
        <i class="pe-3 fa fa-solid fa-list"></i> Lists</a>
        
        <a href="../profile.html" class="pt-3 pb-3 list-group-item list-group-item-action fs-6
        ${active === 'profile' ? 'active' : ''}">
        <i class="pe-3 fa fa-solid fa-user"></i> Profile</a>
        
        <a href="../more.html" class="pt-3 pb-3 list-group-item list-group-item-action fs-6
        ${active === 'more' ? 'active' : ''}">
        <i class="pe-3 fa fa-solid fa-info-circle"></i> More</a>
           
    </div>
    <div class="d-grid mt-2">
    <a href="tweet.html"
        class="btn btn-primary btn-block rounded-pill">
        Tweet</a>
   </div>
 `);
}
export default NavigationSidebar;
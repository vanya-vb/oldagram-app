import { posts } from './index.js'

const postsContainer = document.querySelector('.posts');

function getPostsHtml() {
    let postHtml = [];

    posts.forEach(post =>
        postHtml.push(`<article class="post">
                <header class="post-header">
                    <a href="#"><img class="avatar" src="${post.avatar}" alt=""></a>
                    <div class="user-info">
                        <p class="name"><span class="bold">${post.name}</span></p>
                        <p class="location">${post.location}</p>
                    </div>
                </header>

                <div class="img-container">
                    <img class="img" src="${post.post}" data-like="${post.id}" alt="post image">
                </div>

                <footer class="post-footer">
                    <div class="icons-container">
                        <i 
                        class="${post.isLiked ? 'fa-solid' : 'fa-regular'} fa-heart heart" 
                        data-like="${post.id}" 
                        style="color: ${post.isLiked ? 'red' : ''}">
                        </i>
                        <i class="fa-regular fa-comment"></i>
                        <i class="fa-regular fa-share-from-square"></i>
                    </div>

                    <p class="likes"><span class="bold">${post.likes} likes</span></p>
                    <span class="bold">${post.username}</span>
                    <p class="caption"></p>${post.comment}</p>
                </footer>
            </article>`
        )
    )

    return postHtml.join("");
}

function render() {
    postsContainer.innerHTML = getPostsHtml();
}

render()


postsContainer.addEventListener('click', (e) => {
    if (e.target.matches('.img') || e.target.matches('.heart')) {
        like(e.target.dataset.like, e.target);
    }
})

function like(id, heartIcon) {
    const likeTarget = posts.filter(post => post.id === id)[0];

    if (likeTarget.isLiked) {
        likeTarget.isLiked = false;
        likeTarget.likes--;
    } else {
        likeTarget.isLiked = true;
        likeTarget.likes++;
    }

    render()
}
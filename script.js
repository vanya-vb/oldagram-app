import { posts } from './index.js'

const postsContainer = document.querySelector('.posts');

function getPostsHtml() {
    let postHtml = '';

    posts.forEach(post =>
        postHtml += `<article class="post">
                <header class="post-header">
                    <a href="#"><img class="avatar" src="${post.avatar}" alt=""></a>
                    <div class="user-info">
                        <p class="name"><span class="bold">${post.name}</span></p>
                        <p class="location">${post.location}</p>
                    </div>
                </header>

                <div class="img-container">
                    <img class="img" src="${post.post}" alt="">
                </div>

                <footer class="post-footer">
                    <div class="icons-container">
                        <img class="icon" clas src="images/icon-heart.png" alt="heart icon for likes">
                        <img class="icon" clas src="images/icon-comment.png" alt="icon for comment">
                        <img class="icon" clas src="images/icon-dm.png" alt="icon for share">
                    </div>

                    <p class="likes"><span class="bold">${post.likes} likes</span></p>
                    <span class="bold">${post.username}</span>
                    <p class="caption"></p>${post.comment}</p>
                </footer>
            </article>`
    )

    return postHtml;
}

function render() {
    postsContainer.innerHTML = getPostsHtml()
}

render()
const NewPost = document.querySelector('input')


// if (no recentPosts) {

//     display some kind of no post sign

// } else {

//     show posts

// }


document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();
    let newPostText = NewPost.value;
    const post1 = document.createElement('div');
    post1.classList.add('row');
    post1.classList.add('content');
    post1.innerText = newPostText;
    document.querySelector('.prependme').prepend(post1);
    document.querySelector('form').reset();
})
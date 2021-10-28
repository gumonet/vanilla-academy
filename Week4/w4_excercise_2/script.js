let d       = document;
let app     = document.querySelector('#post-list');

function renderPost( posts, authors ){
    let html_posts = posts.map( function( post ){
        return `<div class="item-post bg-white shadow-lg my-3 rounded-md p-4">
        <h2 class="text-4xl text-gray-700 font-medium">${post.title}</h2>
        <div class="meta-data flex justify-between	my-2">
            <span class="font-light text-sm text-gray-500">${post.pubdate}</span>
        </div>
        <div class="post-content">
            <p class="text-gray-500"> ${post.article} </p>
        </div>
        <div class="author mt-5"> 
            <span class="font-bold text-sm ">By: ${post.author} </span>
            <p class="text-gray-500"> Bio: <br> ${getAuthor( authors, post.author ).bio} </p>
        </div>
    </div>`
    }).join('');
    
   app.innerHTML = html_posts;
}

function getAuthor( authors, author_ ) {
    return authors.find(function ( author ) {
        return author.author === author_;
    });
}

function getAllPosts() {
    Promise.all([
        fetch('https://vanillajsacademy.com/api/dragons.json'),
        fetch('https://vanillajsacademy.com/api/dragons-authors.json')
    ]).then(function (responses) {
        return Promise.all(responses.map(function (response) {
            return response.json();
        }));
    }).then(function (data) {
        
        authors = data[1].authors;
        posts   = data[0].articles;
        renderPost( posts, authors );

    }).catch(function (error) {
        console.log(error);
    });
}

d.addEventListener('DOMContentLoaded', (event) => { getAllPosts(); });
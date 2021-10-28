let d   = document;
let app = document.querySelector('#post-list');

async function getAllPosts() {
    console.log("Testing function");
    try{
        let response = await fetch('https://vanillajsacademy.com/api/dragons.json');
        if ( !response.ok ) {
            throw response.statusText;
            return;
        }

        let post_list = await response.json();
        /* <ul>
		${wizards.map(function (wizard) {
			return `<li>${wizard}</li>`;
		}).join('')}
	</ul>`; */
    console.log(post_list.articles);
        let html_post_list = post_list.articles.map( function(post){
            return `<div class="item-post bg-white shadow-lg my-3 rounded-md p-4">
            <h2 class="text-4xl text-gray-700 font-medium">${post.title}</h2>
            <div class="meta-data flex justify-between	my-2">
                <span class="font-light text-sm text-gray-500">${post.author}</span>
                <span class="font-light text-sm text-gray-500">${post.pubdate}</span>
            </div>
            <div class="post-content">
                <p class="text-gray-500"> ${post.article} </p>
            </div>
        </div>`
        }).join('');
        
       app.innerHTML = html_post_list;

    }catch( error ){
        console.warn( error );
    }
}

d.addEventListener('DOMContentLoaded', (event) => { getAllPosts(); });
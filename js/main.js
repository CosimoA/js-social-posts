/* 
Ricreiamo un feed social aggiungendo al layout di base fornito, il nostro script JS in cui:

Milestone 1:
Prendendo come riferimento il layout di esempio presente nell’html, 
stampiamo i post del nostro feed, prendendo le informazioni dall’array di oggetti che già trovate.

Milestone 2:
Se clicchiamo sul tasto “Mi Piace” cambiamo il colore al testo del bottone 
e incrementiamo il counter dei likes relativo. 
Salviamo in un secondo array gli id dei post ai quali abbiamo messo il like.
*/

// VARIABILI PREIMPOSTATE
    
    // recupero il container dall'HTML
const container = document.getElementById("container");
// console.log(container); 


    // Arrey
const likePosts = [];
const posts = [
    {
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
            "name": "Phil Mangione",
            "image": "https://unsplash.it/300/300?image=15"
        },
        "likes": 80,
        "created": "2021-06-25"
    }, {
        "id": 2,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=112",
        "author": {
            "name": "Sofia Perlari",
            "image": "https://unsplash.it/300/300?image=10"
        },
        "likes": 120,
        "created": "2021-09-03"
    }, {
        "id": 3,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=234",
        "author": {
            "name": "Chiara Passaro",
            "image": "https://unsplash.it/300/300?image=20"
        },
        "likes": 78,
        "created": "2021-05-15"
    }, {
        "id": 4,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=24",
        "author": {
            "name": "Luca Formicola",
            "image": null
        },
        "likes": 56,
        "created": "2021-04-03"
    }, {
        "id": 5,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image=29"
        },
        "likes": 95,
        "created": "2021-03-05"
    }];


// MILESTONE 1

// lancio la funzione per generare i post
creaPosts(posts);

// MILESTONE 2
const likeButtons = document.querySelectorAll(".like-button");
// console.log(likeButtons);


// Aggiungi un event listener a ciascun pulsante "Mi Piace"
likeButtons.forEach(likeButton =>  {
    likeButton.addEventListener('click', 
        function(event) {
            // funzione che previene il ricaricamento della pagina quando click su un link
            event.preventDefault();
            
            // Ottieni l'id del post dal dataset
            const postId = likeButton.getAttribute("data-postid");
                console.log("Click su Mi Piace!", postId);
            
            // Se l'id non è presente nell'array dei post che hanno ricevuto like
            if (!likePosts.includes(postId)) {
                // Aggiungi l'id all'array
                likePosts.push(postId);
                    console.log("Hai messo like ai post: " + likePosts);
                // Aggiorna il colore del testo del pulsante
                likeButton.classList.add('like-button--liked');

                // Incrementa il contatore dei like
                const likeCounter = document.getElementById(`like-counter-${postId}`);
                likeCounter.textContent = parseInt(likeCounter.textContent) + 1;
                    console.log("Il totale dei Like è di: " + likeCounter.textContent);
            }
        }
    )
});
// console.log("Script loaded!");

// FUNZIONI
function creaPosts(posts) {
    // Scorro l'intero array con forEach
    posts.forEach(post => {

        // creo struttura HTML personalizzata con i riferimenti dell'array
        const postTemplate = `
        <div class="post">
            <div class="post__header">
                <div class="post-meta">                    
                    <div class="post-meta__icon">
                        <img class="profile-pic" src="${post.author.image || ''}" alt="${post.author.name}">
                    </div>
                    <div class="post-meta__data">
                        <div class="post-meta__author">${post.author.name}</div>
                        <div class="post-meta__time">${post.created}</div>
                    </div>                    
                </div>
            </div>
            <div class="post__text">${post.content}</div>
            <div class="post__image">
                <img src="${post.media}" alt="${post.media}">
            </div>
            <div class="post__footer">
                <div class="likes js-likes">
                    <div class="likes__cta">
                        <a class="like-button js-like-button" href="#" data-postid="${post.id}">
                            <i class="likebutton__icon fas fa-thumbs-up" aria-hidden="true"></i>
                            <span class="like-button__label">Mi Piace</span>
                        </a>
                    </div>
                    <div class="likes__counter">
                        Piace a <b id="like-counter-${post.id}" class="js-likes-counter">${post.likes}</b> persone
                    </div>
                </div> 
            </div>
        </div>
        `;
    // Aggiungo al container il template creato a inizo file
    container.innerHTML += postTemplate;
    });
}
// declaring variables
let openButton = document.querySelector('.openButton');
let closeButton = document.querySelector('.closeButton');
let modalContainer = document.querySelector('.modalContainer');

// Adding EventListener
openButton.addEventListener('click', function(){
    modalContainer.style.display = "block";
});

closeButton.addEventListener('click', function(){
    modalContainer.style.display = "none";
});

window.addEventListener('click', function(e){
    if(e.target === modalContainer){
        modalContainer.style.display = 'none';
    }
});
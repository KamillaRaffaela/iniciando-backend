const modalOverlay = document.querySelector('.modal-overlay')
const cards = document.querySelectorAll('.card')


console.log(cards)
for(let card of cards) {
    card.addEventListener("click", function(){
        const videoId = card.getAttribute("id")
        modalOverlay.classList.add('active')
        modalOverlay.querySelector("iframe").src = `https://www.youtube.com/embed/GykTLqODQuU/${videoId}`
    })
}

document.querySelector(".close-modal").addEventListener("click", function() {
    modalOverlay.classList.remove("active")
    modalOverlay.querySelector("iframe").src = ""
}); 

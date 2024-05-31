document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link');
    console.log(navLinks)
    navLinks.forEach(item => {
    item.addEventListener('click', function(){
        navLinks.forEach(nav => nav.classList.remove('active'));
        this.classList.add('active');
        })
    })
})


// Function to handle sliding of cards
// function scrollCards(direction) {
//     const container = document.getElementById('cardContainer');
//     const containerWidth = container.offsetWidth;
//     const scrollDistance = direction * containerWidth;
//     container.scrollBy({ left: scrollDistance, behavior: 'smooth' });
// }

// // Event listeners for previous and next buttons
// document.querySelector('.carousel-control-prev').addEventListener('click', function() {
//     scrollCards(-1);
// });

// document.querySelector('.carousel-control-next').addEventListener('click', function() {
//     scrollCards(1);
// });

// const container = document.getElementById('cardContainer');
// const cards = document.querySelectorAll('.card');
  
// let scrollLeft = 0;
// let visibleCards = 4;
  
// container.addEventListener('scroll', () => {
//     const newScrollLeft = container.scrollLeft;
//     if (newScrollLeft > scrollLeft) {
//       // Scrolling to the right
//       for (let i = 0; i < cards.length; i++) {
//         if (i < visibleCards && !cards[i].classList.contains('visible')) {
//           cards[i].classList.add('visible');
//         } else if (i >= visibleCards && cards[i].classList.contains('visible')) {
//           cards[i].classList.remove('visible');
//         }
//       }
//     } else {
//       // Scrolling to the left
//       for (let i = cards.length - 1; i >= 0; i--) {
//         if (i >= cards.length - visibleCards && !cards[i].classList.contains('visible')) {
//           cards[i].classList.add('visible');
//         } else if (i < cards.length - visibleCards && cards[i].classList.contains('visible')) {
//           cards[i].classList.remove('visible');
//         }
//       }
//     }
//     scrollLeft = newScrollLeft;
// });


// document.addEventListener('DOMContentLoaded', function(){
//     var myCarousel = document.querySelector("#projectCarousel")
//     // var carousel = new bootstrap.Carousel(myCarousel, {
//     //     interval:3000,
//     //     ride : 'carousel'
//     // })
// })
// Assuming you have an array of card elements with class "card"
// const cards = document.querySelectorAll('.card');
// const numCardsToShow = 4; // Number of cards to display at a time
// let currentIndex = 0; // Current index of the first card to display

// // Function to display the next set of cards
// function displayNextCards() {
//     const maxIndex = cards.length - numCardsToShow;
//     if (currentIndex < maxIndex) {
//         // Hide current set of cards
//         for (let i = currentIndex; i < currentIndex + numCardsToShow; i++) {
//             cards[i].style.display = 'none';
//         }
//         // Display next set of cards
//         currentIndex++;
//         for (let i = currentIndex; i < currentIndex + numCardsToShow; i++) {
//             cards[i].style.display = 'block';
//         }
//     }
// }

// // Function to display the previous set of cards
// function displayPreviousCards() {
//     if (currentIndex > 0) {
//         // Hide current set of cards
//         for (let i = currentIndex; i < currentIndex + numCardsToShow; i++) {
//             cards[i].style.display = 'none';
//         }
//         // Display previous set of cards
//         currentIndex--;
//         for (let i = currentIndex; i < currentIndex + numCardsToShow; i++) {
//             cards[i].style.display = 'block';
//         }
//     }
// }

// // Event listener for scrolling down
// window.addEventListener('scroll', function() {
//     if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
//         displayNextCards();
//     }
// });

// // Event listener for scrolling up
// window.addEventListener('scroll', function() {
//     if (window.scrollY === 0) {
//         displayPreviousCards();
//     }
// });


// document.addEventListener('DOMContentLoaded', (event) => {
//     const carouselElement = document.querySelector('#projectCarousel');
//     const carousel = new bootstrap.Carousel(carouselElement, {
//         interval: false
//     });
    
//     const cards = Array.from(document.querySelectorAll('.carousel-item .card'));
//     let currentStart = 0;

//     function showCards() {
//         cards.forEach((card, index) => {
//             card.parentElement.style.display = 
//                 (index >= currentStart && index < currentStart + 4) ? 'block' : 'none';
//         });
//     }

//     showCards();

//     document.querySelector('.carousel-control-next').addEventListener('click', () => {
//         currentStart = (currentStart + 4) % cards.length;
//         showCards();
//     });

//     document.querySelector('.carousel-control-prev').addEventListener('click', () => {
//         currentStart = (currentStart - 4 + cards.length) % cards.length;
//         showCards();
//     });
// });



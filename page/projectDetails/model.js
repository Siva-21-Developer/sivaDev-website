let cards = document.querySelectorAll('.card');
let closeButtons = document.querySelectorAll(".cross");

cards.forEach((item) => {
    item.addEventListener("click", () => {
        // Set display to none for all cards except the clicked one
        cards.forEach((card) => {
            if (card !== item) {
                card.style.display = "none";
            }
        });
        // Add 'active' class to the clicked card
        item.classList.add("active");
    });
});

closeButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
        event.stopPropagation();  // Prevent the click from propagating to the card
        let activeCard = button.closest(".card");
        activeCard.classList.remove("active");
        // Set display back to block for all cards
        cards.forEach((card) => {
            card.style.display = "flex";
        });
    });
});

// let cards = document.querySelectorAll('.card');
// let closeButtons = document.querySelectorAll(".cross");

// cards.forEach((item) => {
//     item.addEventListener("click", () => {
//         item.classList.add("active");
//     });
// });

// closeButtons.forEach((button) => {
//     button.addEventListener("click", (event) => {
//         event.stopPropagation();  // Prevent the click from propagating to the card
//         button.closest(".card").classList.remove("active");
//     });
// });
document.addEventListener('contextmenu', (e) => e.preventDefault());

function ctrlShiftKey(e, keyCode) {
  return e.ctrlKey && e.shiftKey && e.keyCode === keyCode.charCodeAt(0);
}

document.onkeydown = (e) => {
  if (
    event.keyCode === 123 ||
    ctrlShiftKey(e, 'I') ||
    ctrlShiftKey(e, 'J') ||
    ctrlShiftKey(e, 'C') ||
    (e.ctrlKey && e.keyCode === 'U'.charCodeAt(0))
  )
    return false;
};

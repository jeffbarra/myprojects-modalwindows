"use strict";

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnsOpenModal = document.querySelectorAll(".show-modal");

// OPEN MODAL FUNCTION will REMOVE the "hidden" model box

const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

// CLOSE MODAL FUNCTION will ADD the "hidden" model box (hide the box)

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

// This loop will run through each Modal Button, add an event listener of "click", which will then run the OPEN MODAL FUNCTION (from above)

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener("click", openModal);

// When btnCloseModal ("X") is clicked in modal box, it will run the CLOSE MODAL FUNCTION (from above), adding the "hidden" back and close window
// When the overlay area is clicked, it will run the CLOSE MODAL function (from above), adding the "hidden" back and close window

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

// When ESC key is pressed, it will close the Modal Window
// "e" = event
//!modal.classList.contains("hidden") = IF Modal Window isn't hidden

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal(); // Calls the closeModal function from above
  }
});

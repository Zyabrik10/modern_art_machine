import { hideModal, showModal, modal } from "./modalTrigger.js";

const user = JSON.parse(localStorage.getItem("user")) || {
  firstAttanted: true,
};
const clsBtn = $(".cls-btn");

clsBtn.click(() => {
  if (user.firstAttanted) {
    user.firstAttanted = false;
    localStorage.setItem("user", JSON.stringify(user));
  }
  hideModal();
});

modal.mousedown(({ target }) => {
  if (!Array.from(target.classList).includes("modal-box")) return;

  if (user.firstAttanted) {
    user.firstAttanted = false;
    localStorage.setItem("user", JSON.stringify(user));
  }

  hideModal();
});

$(window).on("load", () => {
  if (user.firstAttanted) showModal();
});

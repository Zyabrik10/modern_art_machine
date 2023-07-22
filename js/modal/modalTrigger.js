export const modal = $(".modal-box");

export function showModal() {
  modal.fadeIn();
}

export function hideModal() {
  modal.fadeOut();
}

$(window).keydown(function ({ key }) {
  switch (key) {
    case "f":
          showModal();
      break;
    case "Escape":
      hideModal();
  }
});

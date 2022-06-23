const addButtons = document.querySelectorAll('.button');

function handleButton() {
  modal.style.display = 'block';
}

for (let i = 0; i < addButtons.length; i++) {
  addButtons[i].addEventListener('click', handleButton);
}

const modal = document.getElementById('modal');

const span = document.getElementsByClassName('modal__close')[0];

addButtons.onclick = function () {
  modal.style.display = 'block';
};

span.onclick = function () {
  modal.style.display = 'none';
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
};

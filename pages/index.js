const addButtons = document.querySelectorAll('.button');

function handleButton() {
  alert('Button pushed');
}

for (let i = 0; i < addButtons.length; i++) {
  addButtons[i].addEventListener('click', handleButton);
}

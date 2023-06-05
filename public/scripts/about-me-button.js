const toggleButton = document.getElementById('toggleButton');
const hiddenContent = document.getElementById('hiddenContent');

toggleButton.addEventListener('click', () => {
	hiddenContent.classList.toggle('hidden');
});
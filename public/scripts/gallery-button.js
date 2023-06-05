const toggleButtonGal = document.getElementById('toggleButtonGallery');
const hiddenContentGal = document.getElementById('hiddenContentGallery');

toggleButtonGal.addEventListener('click', () => {
	hiddenContentGal.classList.toggle('hidden');
});
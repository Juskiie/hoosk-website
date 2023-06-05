const imageContainer = document.getElementById('imageContainer');
const currentImage = document.getElementById('currentImage');
const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');

document.getElementById('particles-js').getElementsByClassName('particles-js-canvas-el')

const images = [
	'./assets/image-1.PNG',
	'./assets/image-2.PNG',
	'./assets/image-3.PNG',
	'./assets/image-4.PNG',
	'./assets/image-5.JPG',
	'./assets/ref-sheet.JPG',
	'./assets/image-7.JPG',
	'./assets/image-8.JPG',
	'./assets/image-9.JPG',
	'./assets/image-10.png',
	'./assets/image-11.PNG',
	'./assets/image-12.jpg',
];

// const images = ['./assets/image-1.PNG','./assets/image-2.PNG','/assets/image-3.PNG']; // Add your image URLs here
let currentIndex = 0;

function showImage(index) {
	currentImage.src = images[index];
	currentImage.classList.remove('hidden');
}

function hideImage() {
	currentImage.classList.add('hidden');
}

function prevImage() {
	currentIndex = (currentIndex - 1 + images.length) % images.length;
	showImage(currentIndex);
}

function nextImage() {
	currentIndex = (currentIndex + 1) % images.length;
	showImage(currentIndex);
}

prevButton.addEventListener('click', prevImage);
nextButton.addEventListener('click', nextImage);
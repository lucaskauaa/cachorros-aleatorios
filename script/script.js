const buttonGenerator = document.getElementById('buttonGenerator');
const divDisplayImage = document.getElementById('divDisplayImage');

const dogImageSrc = [
    '../images/image01.jpg',
    '../images/image02.jpg',
    '../images/image03.jpg',
    '../images/image04.jpg',
    '../images/image05.jpg',
    '../images/image06.jpg',
    '../images/image07.jpg',
    '../images/image08.jpg',
    '../images/image09.jpg',
    '../images/image010.jpg',
    '../images/image011.jpg',
    '../images/image012.jpg',
    '../images/image013.jpg',
    '../images/image014.jpg',
    '../images/image015.jpg',
    '../images/image016.jpg',
    '../images/image017.jpg',
    '../images/image018.jpg',
    '../images/image019.jpg',
    '../images/image020.jpg',
];

const img = document.createElement('img');
divDisplayImage.appendChild(img);

buttonGenerator.addEventListener('click', () => {
    img.src = dogImageSrc[Math.floor(Math.random() * dogImageSrc.length)];
});
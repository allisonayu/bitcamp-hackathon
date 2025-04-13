const container = document.getElementById('imageStack') as HTMLDivElement;

// Base image
const baseImg = document.createElement('img');
baseImg.src = 'image1.jpg';
baseImg.alt = 'Base Image';
baseImg.classList.add('stacked-img');

// Top image
const topImg = document.createElement('img');
topImg.src = 'image2.png';
topImg.alt = 'Overlay Image';
topImg.classList.add('stacked-img');

// Offset the top image slightly
topImg.style.top = '40px';
topImg.style.left = '60px';
topImg.style.width = '100px';
topImg.style.height = 'auto';

// Append both to the container
container.appendChild(baseImg);
container.appendChild(topImg);

let photo = document.querySelector('.active-photo');
let photoTwo = document.querySelector('.second-active');
let leftBtn = document.querySelector('#left-btn');
let rightBtn = document.querySelector('#right-btn');
let leftBtnTwo = document.querySelector('#left-btn2');
let rightBtnTwo = document.querySelector('#right-btn2');
let mainPhoto = 'http://127.0.0.1:5500/assets/images/fairy-tale-photo.svg';
let mainPhoto2 = 'http://127.0.0.1:5500/assets/images/our-trip-photo.svg';
let secondPhoto = 'http://127.0.0.1:5500/assets/images/fairy-tale-photo2.png';
let thirdPhoto= 'http://127.0.0.1:5500/assets/images/fairy-tale-photo3.png';
let secondPhoto2 = 'http://127.0.0.1:5500/assets/images/our-trip-photo2.png';
let thirdPhoto2 = 'http://127.0.0.1:5500/assets/images/our-trip-photo3.png';

console.log(photo.src);

function slideLeft() {
    if(photo.src==mainPhoto){
        photo.src=secondPhoto;
    }   else if(photo.src==secondPhoto){
        photo.src=thirdPhoto;
    }
    else{
        photo.src=mainPhoto;
    }
};
function slideRight() {
    if(photo.src==thirdPhoto){
        photo.src=secondPhoto;
    }   else if(photo.src==secondPhoto){
        photo.src=mainPhoto;
    }   else{
        photo.src=thirdPhoto;
    }
};

function slideRight2() {
    if(photoTwo.src==mainPhoto2){
        photoTwo.src=secondPhoto2;
    }   else if(photoTwo.src==secondPhoto2){
        photoTwo.src=thirdPhoto2;
    }   else{
        photoTwo.src=mainPhoto2;
    }
};
function slideLeft2() {
    if(photoTwo.src==thirdPhoto2){
        photoTwo.src=secondPhoto2;
    }   else if(photoTwo.src==secondPhoto2){
        photoTwo.src=mainPhoto2;
    }   else{
        photoTwo.src=thirdPhoto2
    }
};

leftBtn.addEventListener('click', slideLeft);
rightBtn.addEventListener('click', slideRight)

leftBtnTwo.addEventListener('click', slideLeft2);
rightBtnTwo.addEventListener('click', slideRight2);

console.log(photoTwo.src);
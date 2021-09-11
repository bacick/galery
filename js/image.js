import '../media/images/1.jpg';
import '../media/images/2.jpg';
import '../media/images/3.jpg';
import '../media/images/4.gif';

let images = [
    { img: '1.jpg', titel: 'Мельница у реки' },
    { img: '2.jpg', titel: 'Горы осенью' },
    { img: '3.jpg', titel: 'Деревня летом' },
    { img: '4.gif', titel: 'Котэ' },
];
let content = document.querySelector('.content');

const imageParse = function () {
    images.forEach(el => {
        content.insertAdjacentHTML('beforeend',
            `<div class="block"><img class="media" src='../media/images/${el.img}'><p>${el.titel}</p></div>`)
    });
}

export { imageParse };
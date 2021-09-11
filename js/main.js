import '../css/style.scss';
import { imageParse } from './image.js';
import { audioParse } from './audio.js';
import { videoParse } from './video.js';

imageParse();
audioParse();
videoParse();

/* let images = [
    { img: '1.jpg', name: 'Мельница у реки' },
    { img: '2.jpg', name: 'Горы осенью' },
    { img: '3.jpg', name: 'Деревня летом' },
    { img: '4.gif', name: 'Котэ' },
    { img: '1.mp3', name: 'Птички чипчихуйки' },
    { img: '2.mp3', name: 'Ручей' },
    { img: '3.mp3', name: 'Звуки леса' },
    { img: '1.mp4', name: 'Never Gonna Give You Up' },
    { img: '2.mp4', name: 'Морской прибой' },
];
let regexpimg = /\.(png|jpg?g|gif)$/;
let regexaudio = /\.mp3$/;
let content = document.querySelector('.content');

images.forEach(el => {
    if (regexpimg.test(el.img)) {
        content.insertAdjacentHTML('beforeend',
            `<div class="block"><img class="media" src='../media/images/${el.img}'><p>${el.name}</p></div>`)
    } else if(regexaudio.test(el.img)){
        content.insertAdjacentHTML('beforeend',
            `<div class="block"><audio class="media" controls><source src='../media/audio/${el.img}'></audio><p>${el.name}</p></div>`);
    } else {
        content.insertAdjacentHTML('beforeend',
            `<div class="block"><video class="media" controls><source src='../media/video/${el.img}'></video><p>${el.name}</p></div>`);
    }
    }); */
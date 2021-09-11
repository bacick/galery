import '../media/audio/1.mp3';
import '../media/audio/2.mp3';
import '../media/audio/3.mp3';

let audios = [
    { audio: '1.mp3', titel: 'Птички чипчихуйки' },
    { audio: '2.mp3', titel: 'Ручей' },
    { audio: '3.mp3', titel: 'Звуки леса' },
];

let content = document.querySelector('.content');

const audioParse = function () {
    audios.forEach(el => {
        content.insertAdjacentHTML('beforeend',
            `<div class="block"><audio class="media" controls><source src='../media/audio/${el.audio}'></audio><p>${el.titel}</p></div>`);
    });
}

export { audioParse }
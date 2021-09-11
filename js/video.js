import '../media/video/1.mp4';
import '../media/video/2.mp4';

let videos = [
    { video: '1.mp4', titel: 'Never Gonna Give You Up' },
    { video: '2.mp4', titel: 'Морской прибой' },
];

let content = document.querySelector('.content');

const videoParse = function () {
    videos.forEach(el => {
        content.insertAdjacentHTML('beforeend',
            `<div class="block"><video class="media" controls><source src='../media/video/${el.video}'></video><p>${el.titel}</p></div>`);
    });
}

export { videoParse }
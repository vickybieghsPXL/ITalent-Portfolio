
const element = document.querySelector('body, html');

element.addEventListener('wheel', (event) => {
    event.preventDefault();

    element.scrollBy({
        left: event.deltaY < 0 ? -30 : 30,

    });
});
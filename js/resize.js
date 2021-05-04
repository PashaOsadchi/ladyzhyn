// При завантаженні враховуючи ширину екрана приховує або показує бокові панелі
document.addEventListener("DOMContentLoaded",() => {if (window.innerWidth > 700) open_close_sidebar()}, true);
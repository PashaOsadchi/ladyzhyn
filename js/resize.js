/* // При зміні ширини екрана приховує або показує бокові панелі
window.addEventListener("resize", function (event) {
    if (window.innerWidth < 1500) {
        document.body.style.gridTemplateColumns = "1fr 0%";

        sidebar.style.display = "none";
    }

    if (window.innerWidth > 1500) {
        document.body.style.gridTemplateColumns = "1fr 350px";

        sidebar.style.display = "block";
    }
});

// При завантаженні враховуючи ширину екрана приховує або показує бокові панелі
if (window.innerWidth < 1500) {
    document.body.style.gridTemplateColumns = "1fr 0%";

    sidebar.style.display = "none";
}

if (window.innerWidth > 1500) {
    document.body.style.gridTemplateColumns = "1fr 350px";

    sidebar.style.display = "block";
} */

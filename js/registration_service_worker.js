// https://habr.com/ru/post/547436/
// https://developers.google.com/web/tools/workbox/

if ("serviceWorker" in navigator) {
    window.addEventListener("load", function () {
        navigator.serviceWorker.register("/sw.js", { scope: "/" }).then(
            function (registration) {
                // Registration was successful
                // console.log('Реєстрація Service Worker пройшла успішно: ', registration.scope);
            },
            function (err) {
                // registration failed :(
                console.log("Виникла помилка при реєстрації Service Worker: ", err);
            }
        );
    });
}

/* if ("serviceWorker" in navigator) {
    self.addEventListener("load", async () => {
        const container = navigator.serviceWorker;
        if (container.controller === null) {
            const reg = await container.register("/sw.js");
        }
    });
} */

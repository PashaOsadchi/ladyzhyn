// Кешує всі ресурси тому викликає помилку переповнення кешу
// self.addEventListener("install", (event) => event.waitUntil(caches.open("v1").then((cache) => cache.addAll(["/"]))));

// Кешує тільки визначені ресурси
self.addEventListener("install", (event) => event.waitUntil(caches.open("v1").then((cache) => cache.addAll(["/index.html"]))));



/* self.addEventListener("fetch", function (event) {
    // тут нічого не робити, просто реєструвати всі запити мережі
    // console.log(event.request.url);
}); */

addEventListener("fetch", function (event) {
    if (event.request.headers.get("Accept").includes("text/html")) {
        event.respondWith(
            fetch(event.request)
                .then(function (response) {
                    return response;
                })
                .catch(function (error) {
                    return caches.match("index.html");
                })
        );
    }
});
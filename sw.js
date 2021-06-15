/* self.addEventListener("fetch", function (event) {
    // тут нічого не робити, просто реєструвати всі запити мережі
    // console.log(event.request.url);
}); */

self.addEventListener("install", function (event) {
    event.waitUntil(
        caches.open("v1").then(function (cache) {
            return cache.addAll(["/index.html"]);
        })
    );
});

addEventListener("fetch", function (event) {
    // Отримайте запит
    // var request = event.request;

    // BВиправлено помилку
    // https://stackoverflow.com/a/49719964
    // if (event.request.cache === "only-if-cached" && event.request.mode !== "same-origin") return;

    // HTML files
    // Network-first
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

/* self.addEventListener("fetch", (event) => {
    event.respondWith(
        caches.match(event.request).then((resp) => {
            return (
                resp ||
                fetch(event.request).then((response) => {
                    return caches.open("v1").then((cache) => {
                        cache.put(event.request, response.clone());
                        return response;
                    });
                })
            );
        })
    );
}); */

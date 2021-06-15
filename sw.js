/* self.addEventListener("fetch", function (event) {
    // тут нічого не робити, просто реєструвати всі запити мережі
    // console.log(event.request.url);
}); */

/* self.addEventListener("install", function (event) {
    event.waitUntil(
        caches.open("v1").then(function (cache) {
            return cache.addAll(["/index.html"]);
        })
    );
});

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
}); */



self.addEventListener("install", function (event) {
    event.waitUntil(
        caches.open("v1").then(function (cache) {
            return cache.addAll(["/"]);
        })
    );
});

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



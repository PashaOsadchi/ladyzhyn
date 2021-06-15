self.addEventListener("fetch", function (event) {
    // тут нічого не робити, просто реєструвати всі запити мережі
    // console.log(event.request.url);
    
    // Кешувати статичний ресурс, але не зображення
    if (event.request.url.indexOf(staticHost) !== -1 && event.request.url.search(/\.(svg|png|jpeg|jpg|gif)/) === -1) {
        return event.respondWith(
            // Перевірте, чи дані в кеші
            caches.match(event.request).then(function (response) {
                if (response) {
                    return response;
                }
                // Якщо у нас немає ресурсу в кеші, зробіть запит і кешуйте його
                return fetch(event.request).then(function (response) {
                    caches.open(cacheStatic).then(function (cache) {
                        cache.add(event.request.url);
                    });

                    return response;
                });
            })
        );
    }
});

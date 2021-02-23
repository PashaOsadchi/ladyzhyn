// Визначає чи змінювалась карта після певної події false - не змінювалась
let map_bounds_changed = false;

// Прослуховувач події який спрацьовує коли змінився центр карти або маштаб карти
const listener_bounds_changed = google.maps.event.addListenerOnce(map, "bounds_changed", function () {
    map_bounds_changed = true;
});
// Вказує що продовжити виконання фунції потрібно після закриття меню
let need_continue_map_offset_house_multifamily_after_close_sidebar = false;
let need_continue_map_offset_house_private_after_close_sidebar = false;

// Прослуховувачі подій карти
let listener_add_map_density_population_house_multifamily;
let listener_add_map_density_population_house_private;
let listener_map_offset_house_private;
let listener_map_offset_house_multifamily;

// Вміщає повну інформацію про вибрану адресу
const full_address_information_obj = {
    human_settlement: '',
    street: '',
    house: '',
    entrance: '',
    apartment: ''
}

// Налаштування маркера поточного місцезнаходження
const marker_you_are_here_obj = {
    url: "icon/marker_you_are_here.png",
    // Цей маркер має ширину 20 пікселів і висоту 32 пікселі.
    //size: new google.maps.Size(20, 32),
    // Початком цього зображення є (0, 0).
    origin: new google.maps.Point(0, 0),
    // Якором для цього зображення є основа на (0,0).
    anchor: new google.maps.Point(20, 50),
    scaledSize: new google.maps.Size(40, 50), //676-919
};

// Містить останню вибрану адресу
let full_address_str = "";

// Вид транспорту який використовується для руху маршрутом
let paving_route_travel_mode = "DRIVING";

// Дані із останньої вибраної адреса
let last_selected_address_obj = {
    lat: 0,
    lon: 0,
};

// Кординати першої і другої точки які потрібно показати маштабуючи карту
const coordinates_map_scaling_obj = {
    lat_1: 0,
    lon_1: 0,
    lat_2: 0,
    lon_2: 0,
}

let markers_route = [];

// Якщо true то карта прихована
let map_hidden = false;

// Якщо true то меню приховане
let sidebar_hidden = true;

// Містить масив маркерів які додаються на карту
let markers = [];

// Містить масив будинків які додаються на карту
let arr_house = [];

// Зберігає сформовану повну адресу
let full_address = "";

// Перелік маршрутних точок для використання у службі google api
let waypoints_arr = [];
/* const waypoints_arr = [
    {
        location: {
            lat: 48.67908443555729,
            lng: 29.248346389079146
        },
        stopover: true
    },
    {
        location: {
            lat: 48.68803780488432,
            lng: 29.228433670107123
        },
        stopover: true
    },
    {
        location: {
            lat: 48.69432687831613,
            lng: 29.214958252526934
        },
        stopover: true
    },
]; */

// Перелік маршрутних точок для створення маркерів
let waypoints_full_arr = [];
/* waypoints_full_arr = [
    {
        id: ,
        name_arr: ,
        name: ,
        longitude: ,
        latitude:
    }
]; */

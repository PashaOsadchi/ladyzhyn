// Змінні для генерації вибраної адреси
let human_settlement;
let street;
let house;
let apartment;

// Змінні для генерації вибраної адреси 
let human_settlement_2;
let entrance_2;

// Обєкт для визначення типу адреси яка виводиться на карту
const selected_code_administrative_unit = {
    human_settlement_code: '',
    street_code: '',
    house_code: '',
    house_selected_index: '',
    entrance_code: '',
    apartment_code: ''
}

// Масиви які містять адреси які додаються до додаткових полів
let human_settlement_arr = [];
let street_arr = [];
let house_arr = [];
let entrance_arr = [];
let apartment_arr = [];

// Додає вулиці
async function onchange_human_settlements() {
    // Очищає повну інформацію про вибрану адресу
    full_address_information_obj.human_settlement = '';
    full_address_information_obj.street = '';
    full_address_information_obj.house = '';
    full_address_information_obj.entrance = '';
    full_address_information_obj.apartment = '';

    // Очищає додаткові поля у вулиці
    clears_div('bloc_detailed_information_street');

    // Очищає додаткові поля у будинкові
    clears_div('bloc_detailed_information_house');

    // Очищає додаткові поля у підїзді
    clears_div('bloc_detailed_information_entrance');

    // Очищає додаткові поля у квартирі
    clears_div('bloc_detailed_information_apartment');

    // Очищає список із будинками
    const select_house = document.querySelector("#id_select_house");
    select_house.innerHTML = '<option value=""></option>';
    clears_div('bloc_detailed_information_house');

    // Очищає список із підїздами
    const select_entrance = document.querySelector("#id_select_entrance");
    select_entrance.innerHTML = '<option value=""></option>';

    // Очищає список із квартирами
    const select_apartment = document.querySelector("#id_select_apartment");
    select_apartment.innerHTML = '<option value=""></option>';

    // Визначає вибраний населений пункт
    const select_human_settlements_selectedIndex = document.getElementById('id_human_settlements').selectedIndex;
    const select_human_settlements_options = document.getElementById('id_human_settlements').options;
    const select_find_text = select_human_settlements_options[select_human_settlements_selectedIndex].text;
    const street_human_settlement_code = select_human_settlements_options[select_human_settlements_selectedIndex].value;

    selected_code_administrative_unit.human_settlement_code = select_human_settlements_options[select_human_settlements_selectedIndex].value;
    selected_code_administrative_unit.street_code = '';
    selected_code_administrative_unit.house_code = '';
    selected_code_administrative_unit.house_selected_index = '';
    selected_code_administrative_unit.entrance_code = '';
    selected_code_administrative_unit.apartment_code = '';

    // Поміщає у повну адресу
    human_settlement = "";
    street = "";
    house = "";
    apartment = "";
    human_settlement_arr = data_human_settlement_arr.filter(function (e) { return e.human_settlement_code == street_human_settlement_code });
    human_settlement = human_settlement_arr[0].human_settlement_name;
    full_address_str = human_settlement;

    entrance_2 = "";
    human_settlement_2 = human_settlement_arr[0].human_settlement_short_name;
    full_address = human_settlement_arr[0].human_settlement_short_name;

    // Фільтрує вулиці
    street_arr = data_street_arr.filter((e) => e.street_human_settlement_code == street_human_settlement_code);

    // Очищає список
    const select_street = document.querySelector("#id_select_streets");
    select_street.innerHTML = '<option value=""></option>';

    // Додає у список Вулиці
    for (let i = 0; i < street_arr.length; i++) {
        const name = (street_arr[i].street_name_old == '') ? street_arr[i].street_name : `${street_arr[i].street_name} (${street_arr[i].street_name_old})`;
        o = new Option(name, street_arr[i].street_code, false, false);
        select_street.add(o);
    };

    // Виводить на сторінку детальну інформацію про населений пункт
    human_settlement_name.value = human_settlement_arr[0].human_settlement_name;
    human_settlement_zip_code.value = human_settlement_arr[0].human_settlement_zip_code;

    const number_entrance_arr = data_entrance_arr.filter((e) => e.entrance_human_settlement_code == street_human_settlement_code);
    number_entrance.value = number_entrance_arr.length;
    
    const number_house_arr = data_house_arr.filter((e) => e.house_human_settlement_code == street_human_settlement_code);
    number_house.value = number_house_arr.length;
    
    number_private_house.value = number_house_arr.filter((e) => e.house_multifamily == false).length;

    number_artment_building.value = number_house_arr.filter((e) => e.house_multifamily == true).length;

    // Виводить на сторінку детальну інформацію про населений пункт (населення)
    const total_number_registered_person = human_settlement_arr[0].human_settlement_total_number_registered_men + human_settlement_arr[0].human_settlement_total_number_registered_women + human_settlement_arr[0].human_settlement_total_number_registered_children_up_14_years + human_settlement_arr[0].human_settlement_total_number_registered_children_from_14_to_18_years;
    
    human_settlement_total_number_registered_person.value = total_number_registered_person;
    human_settlement_total_number_registered_men.value = `${human_settlement_arr[0].human_settlement_total_number_registered_men} (${Math.trunc((((human_settlement_arr[0].human_settlement_total_number_registered_men / total_number_registered_person) * 100) * 100) / 100)}%)`;
    human_settlement_total_number_registered_women.value = `${human_settlement_arr[0].human_settlement_total_number_registered_women} (${Math.trunc((((human_settlement_arr[0].human_settlement_total_number_registered_women / total_number_registered_person) * 100) * 100) / 100)}%)`;
    human_settlement_total_number_registered_children_up_14_years.value = `${human_settlement_arr[0].human_settlement_total_number_registered_children_up_14_years} (${Math.trunc((((human_settlement_arr[0].human_settlement_total_number_registered_children_up_14_years / total_number_registered_person) * 100) * 100) / 100)}%)`;
    human_settlement_total_number_registered_children_from_14_to_18_years.value = `${human_settlement_arr[0].human_settlement_total_number_registered_children_from_14_to_18_years} (${Math.trunc((((human_settlement_arr[0].human_settlement_total_number_registered_children_from_14_to_18_years / total_number_registered_person) * 100) * 100) / 100)}%)`;

    number_street.value = street_arr.length;

    let counter_apartment = 0;
    for (let i = 0; i < number_entrance_arr.length; i++) {
        const arr = data_apartment_arr.filter((e) => e.entrance_code == number_entrance_arr[i].entrance_id);
        counter_apartment += arr.length;
    }
    number_apartment.value = counter_apartment;

    // Знаходить кординати останньої вибраної адреси
    find_coordinates_last_selected_address();

// Формує для копіювання повну інформацію про населений пункт
full_address_information_obj.human_settlement = `
Загальна кількість будинків: ${number_house_arr.length}
Кількість будинків приватного сектору: ${number_house_arr.filter((e) => e.house_multifamily == false).length}
Кількість багатоквартирних будинків: ${number_house_arr.filter((e) => e.house_multifamily == true).length}
Кількість вулиць: ${street_arr.length}
Кількість підїздів: ${number_entrance_arr.length}
Кількість квартир: ${counter_apartment}
Імя населеного пункту: ${human_settlement_arr[0].human_settlement_name}
Індекс: ${human_settlement_arr[0].human_settlement_zip_code}
Зареєстровано всього осіб: ${total_number_registered_person}
Зареєстровано чоловіків (% від загальної кількості): ${human_settlement_total_number_registered_men.value}
Зареєстровано жінок (% від загальної кількості): ${human_settlement_total_number_registered_women.value}
Зареєстровано дітей до 14 років (% від загальної кількості): ${human_settlement_total_number_registered_children_up_14_years.value}
Зареєстровано дітей від 14 до 18 років (% від загальної кількості): ${human_settlement_total_number_registered_children_from_14_to_18_years.value}`;
}

// Додає будинки
async function onchange_streets() {
    // Очищає повну інформацію про вибрану адресу
    full_address_information_obj.street = '';
    full_address_information_obj.house = '';
    full_address_information_obj.entrance = '';
    full_address_information_obj.apartment = '';

    // Очищає додаткові поля у будинкові
    clears_div('bloc_detailed_information_house');

    // Очищає додаткові поля у підїзді
    clears_div('bloc_detailed_information_entrance');

    // Очищає додаткові поля у квартирі
    clears_div('bloc_detailed_information_apartment');

    // Очищає список із вулицями
    const select_house = document.querySelector("#id_select_house");
    select_house.innerHTML = '<option value=""></option>';

    // Очищає список із підїздами
    const select_entrance = document.querySelector("#id_select_entrance");
    select_entrance.innerHTML = '<option value=""></option>';

    // Очищає список із квартирами
    const select_apartment = document.querySelector("#id_select_apartment");
    select_apartment.innerHTML = '<option value=""></option>';

    // Визначає вибрану вулицю
    const select_street_selectedIndex = document.getElementById('id_select_streets').selectedIndex;
    const select_street_options = document.getElementById('id_select_streets').options;
    const house_code_street = select_street_options[select_street_selectedIndex].value;

    selected_code_administrative_unit.street_code = select_street_options[select_street_selectedIndex].value;
    selected_code_administrative_unit.house_code = '';
    selected_code_administrative_unit.house_selected_index = '';
    selected_code_administrative_unit.entrance_code = '';
    selected_code_administrative_unit.apartment_code = '';

    // Поміщає у повну адресу
    street = "";
    house = "";
    apartment = "";
    street_arr = data_street_arr.filter((e) => e.street_code == house_code_street);
    street = street_arr[0].street_name;
    full_address_str = `${human_settlement} ${street}`;

    entrance_2 = "";
    full_address = `${human_settlement_2}, ${street}`;

    // Завантажує будинки
    house_arr = data_house_arr.filter(function (e) { return e.house_code_street == house_code_street });

    // Додає у список будинки
    for (let i = 0; i < house_arr.length; i++) {
        let name = house_arr[i].house_name;
        if (house_arr[i].house_multifamily) name += '  (багатоквартирний)';
        o = new Option(name, house_arr[i].house_id, false, false);
        select_house.add(o);
    };

    // Виводить на сторінку детальну інформацію про вулицю
    const number_house_arr = data_house_arr.filter((e) => e.house_code_street == house_code_street);
    street_number_house.value = number_house_arr.length;

    street_number_private_house.value = number_house_arr.filter((e) => e.house_multifamily == false).length;

    street_number_artment_building.value = number_house_arr.filter((e) => e.house_multifamily == true).length;

    const number_entrance_arr = data_entrance_arr.filter((e) => e.entrance_code_street == house_code_street);
    street_number_entrance.value = number_entrance_arr.length;

    let counter_apartment = 0;
    for (let i = 0; i < number_entrance_arr.length; i++) {
        const arr = data_apartment_arr.filter((e) => e.entrance_code == number_entrance_arr[i].entrance_id);
        counter_apartment += arr.length;
    }
    street_number_apartment.value = counter_apartment;

    street_name.value = street_arr[0].street_name;
    street_name_old.value = street_arr[0].street_name_old;
    street_voice_search.value = street_arr[0].street_voice_search;
    street_zip_code.value = street_arr[0].street_zip_code;

    // Знаходить кординати останньої вибраної адреси
    find_coordinates_last_selected_address();

// Формує для копіювання повну інформацію про вулицю
full_address_information_obj.street = `
Загальна кількість будинків: ${street_number_house.value}
Кількість будинків приватного сектору: ${street_number_private_house.value}
Кількість багатоквартирних будинків: ${street_number_artment_building.value}
Кількість підїздів: ${street_number_entrance.value}
Кількість квартир: ${street_number_apartment.value}
Назва вулиці: ${street_name.value}
Минула назва вулиці: ${street_name_old.value}
Текст голосового пошуку: ${street_voice_search.value}
Індекс: ${street_zip_code.value}`;
}

// Додає підїзди
async function onchange_house() {
    // Очищає повну інформацію про вибрану адресу
    full_address_information_obj.house = '';
    full_address_information_obj.entrance = '';
    full_address_information_obj.apartment = '';

    // Очищає додаткові поля у квартирі
    clears_div('bloc_detailed_information_apartment');

    // Очищає додаткові поля у підїзді
    clears_div('bloc_detailed_information_entrance');

    // Очищає список із підїздами
    const select_entrance = document.querySelector("#id_select_entrance");
    select_entrance.innerHTML = '<option value=""></option>';

    // Очищає список із квартирами
    const select_apartment = document.querySelector("#id_select_apartment");
    select_apartment.innerHTML = '<option value=""></option>';

    // Визначає вибрану вулицю
    const select_house_selectedIndex = document.getElementById('id_select_house').selectedIndex;
    const select_house_options = document.getElementById('id_select_house').options;
    const entrance_code_house = select_house_options[select_house_selectedIndex].value;

    selected_code_administrative_unit.house_code = select_house_options[select_house_selectedIndex].value;
    selected_code_administrative_unit.house_selected_index = select_house_selectedIndex - 1;
    selected_code_administrative_unit.entrance_code = '';
    selected_code_administrative_unit.apartment_code = '';

    // Поміщає у повну адресу
    house = "";
    apartment = "";

    house_arr = data_house_arr.filter((e) => e.house_id == entrance_code_house);
    house = house_arr[0].house_name;

    full_address_str = `${human_settlement} ${street}, буд. ${house}`;

    entrance_2 = "";
    full_address = `${human_settlement_2}, ${street}, буд. ${house}`;

    // Завантажує підїзди
    entrance_arr = data_entrance_arr.filter(function (e) { return e.entrance_code_house == entrance_code_house });

    // Додає у список підїзди
    for (let i = 0; i < entrance_arr.length; i++) {
        const name = `кв. ${entrance_arr[i].entrance_first_apartment_entrance}-${entrance_arr[i].entrance_last_apartment_entrance}`
        o = new Option(name, entrance_arr[i].entrance_id, false, false);
        select_entrance.add(o);
    };

    // Виводить на сторінку детальну інформацію про будинок
    house_name.value = house_arr[0].house_name;
    id_house_longitude.value = house_arr[0].longitude;
    id_house_latitude.value = house_arr[0].latitude;
    id_house_kadastr_number.value = house_arr[0].house_kadastr_number;

    const number_entrance_arr = data_entrance_arr.filter((e) => e.entrance_code_house == entrance_code_house);
    id_house_number_entrance.value = number_entrance_arr.length;

    let counter_apartment = 0;
    for (let i = 0; i < number_entrance_arr.length; i++) {
        const arr = data_apartment_arr.filter((e) => e.entrance_code == number_entrance_arr[i].entrance_id);
        counter_apartment += arr.length;
    }
    id_house_number_apartment.value = counter_apartment;

    // Знаходить кординати останньої вибраної адреси
    find_coordinates_last_selected_address();

// Формує для копіювання повну інформацію про будинок
full_address_information_obj.house = `
Кількість підїздів: ${id_house_number_entrance.value}
Кількість квартир: ${id_house_number_apartment.value}
Номер будинку: ${house_name.value}
Довгота: ${id_house_longitude.value}
Широта: ${id_house_latitude.value}
Кадастровий номер земельної ділянки: ${id_house_kadastr_number.value}`;
}

// Додає Квартири
async function onchange_entrance() {
    // Очищає повну інформацію про вибрану адресу
    full_address_information_obj.entrance = '';
    full_address_information_obj.apartment = '';

    // Очищає додаткові поля у квартирі
    clears_div('bloc_detailed_information_apartment');

    // Очищає список із квартирами
    const select_apartment = document.querySelector("#id_select_apartment");
    select_apartment.innerHTML = '<option value=""></option>';

    // Визначає вибраний підїзд
    const select_entrance_selectedIndex = document.getElementById('id_select_entrance').selectedIndex;
    const select_entrance_options = document.getElementById('id_select_entrance').options;
    select_find_text = select_entrance_options[select_entrance_selectedIndex].text;
    const entrance_code = select_entrance_options[select_entrance_selectedIndex].value;

    selected_code_administrative_unit.entrance_code = select_entrance_options[select_entrance_selectedIndex].value;
    selected_code_administrative_unit.apartment_code = '';

    // Завантажує квартири
    apartment_arr = data_apartment_arr.filter(function (e) { return e.entrance_code == entrance_code });

    // Додає у список квартири
    for (let i = 0; i < apartment_arr.length; i++) {
        o = new Option('кв. ' + apartment_arr[i].name, apartment_arr[i].id, false, false);
        select_apartment.add(o);
    };

    // Завантажує підїзди
    entrance_arr = data_entrance_arr.filter((e) => e.entrance_id == entrance_code);

    // Виводить на сторінку детальну інформацію про підїзд
    entrance_first_apartment_entrance.value = entrance_arr[0].entrance_first_apartment_entrance;
    entrance_last_apartment_entrance.value = entrance_arr[0].entrance_last_apartment_entrance;
    entrance_latitude.value = entrance_arr[0].entrance_latitude;
    entrance_longitude.value = entrance_arr[0].entrance_longitude;
    entrance_name.value = entrance_arr[0].entrance_name;

    entrance_2 = `підїзд №-${entrance_arr[0].entrance_name}, квартири ${entrance_arr[0].entrance_first_apartment_entrance}-${entrance_arr[0].entrance_last_apartment_entrance}`;
    full_address = `${human_settlement_2}, ${street}, буд. ${house}, ${entrance_2}`;

    // Знаходить кординати останньої вибраної адреси
    find_coordinates_last_selected_address();

// Формує для копіювання повну інформацію про підїзд
full_address_information_obj.entrance = `
№ підїзду: ${entrance_name.value}
Початковий номер квартири у підїзді: ${entrance_first_apartment_entrance.value}
Кінцевий номер квартири у підїзді: ${entrance_last_apartment_entrance.value}
Довгота: ${entrance_latitude.value}
Широта: ${entrance_longitude.value}`;
}

function onchange_apartment() {
    // Очищає повну інформацію про вибрану адресу
    full_address_information_obj.apartment = '';

    // Визначає вибрану квартиру
    const select_apartment_selectedIndex = document.getElementById('id_select_apartment').selectedIndex;
    const select_apartment_options = document.getElementById('id_select_apartment').options;
    select_find_text = select_apartment_options[select_apartment_selectedIndex].text;
    const select_apartment_find_code = select_apartment_options[select_apartment_selectedIndex].value;

    selected_code_administrative_unit.apartment_code = select_apartment_options[select_apartment_selectedIndex].value;

    // Поміщає у повну адресу
    apartment = "";
    apartment = select_find_text;

    full_address = `${human_settlement_2}, ${street}, буд. ${house}, ${entrance_2}, ${apartment}`;

    // Завантажує квартиру
    apartment_arr = data_apartment_arr.filter((e) => e.id == select_apartment_find_code);

    // Виводить на сторінку детальну інформацію про квартиру
    apartment_kadastr_number.value = apartment_arr[0].kadastr_number;
    apartment_name.value = apartment_arr[0].name;

    // Знаходить кординати останньої вибраної адреси
    find_coordinates_last_selected_address();

// Формує для копіювання повну інформацію про квартиру
full_address_information_obj.apartment = `
Номер квартири: ${apartment_name.value}
Кадастровий номер прибудови: ${apartment_kadastr_number.value}`;
}
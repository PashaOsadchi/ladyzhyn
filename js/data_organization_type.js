
const data_organization_type_arr = [
    {
        "organization_id": "1",
        "organization_type": "Автомагазин"
    },
    {
        "organization_id": "2",
        "organization_type": "Автомийка"
    },
    {
        "organization_id": "3",
        "organization_type": "Автомобільна школа"
    },
    {
        "organization_id": "4",
        "organization_type": "Автосервіс"
    },
    {
        "organization_id": "5",
        "organization_type": "Автостанція"
    },
    {
        "organization_id": "6",
        "organization_type": "Аптека"
    },
    {
        "organization_id": "7",
        "organization_type": "Ательє з пошиття одягу"
    },
    {
        "organization_id": "8",
        "organization_type": "Банк"
    },
    {
        "organization_id": "9",
        "organization_type": "Безоплатна правова допомога"
    },
    {
        "organization_id": "10",
        "organization_type": "Будівельна організація"
    },
    {
        "organization_id": "11",
        "organization_type": "Будівельний супермаркет"
    },
    {
        "organization_id": "12",
        "organization_type": "Ветаптека"
    },
    {
        "organization_id": "13",
        "organization_type": "Виробництво пам'ятників"
    },
    {
        "organization_id": "14",
        "organization_type": "Відділення кабельного  телебачення"
    },
    {
        "organization_id": "15",
        "organization_type": "Відділення обміну валют"
    },
    {
        "organization_id": "16",
        "organization_type": "Відділення ПАТ"
    },
    {
        "organization_id": "17",
        "organization_type": "Відділення ремонту телерадіоапаратури"
    },
    {
        "organization_id": "18",
        "organization_type": "Відділення служби доставки"
    },
    {
        "organization_id": "19",
        "organization_type": "Відділення страхової компанії"
    },
    {
        "organization_id": "20",
        "organization_type": "Відділення ТРК"
    },
    {
        "organization_id": "21",
        "organization_type": "ВКП"
    },
    {
        "organization_id": "22",
        "organization_type": "Гаражний кооператив"
    },
    {
        "organization_id": "23",
        "organization_type": "Готель"
    },
    {
        "organization_id": "24",
        "organization_type": "Державна установа"
    },
    {
        "organization_id": "25",
        "organization_type": "Дошкільний навчальний заклад"
    },
    {
        "organization_id": "26",
        "organization_type": "Друкарня"
    },
    {
        "organization_id": "27",
        "organization_type": "Заправка"
    },
    {
        "organization_id": "28",
        "organization_type": "Кавярня"
    },
    {
        "organization_id": "29",
        "organization_type": "Кафе"
    },
    {
        "organization_id": "30",
        "organization_type": "Кінотеатр"
    },
    {
        "organization_id": "31",
        "organization_type": "Кіоск"
    },
    {
        "organization_id": "32",
        "organization_type": "Комунальне підприємство"
    },
    {
        "organization_id": "33",
        "organization_type": "Кузня"
    },
    {
        "organization_id": "34",
        "organization_type": "Лазня"
    },
    {
        "organization_id": "35",
        "organization_type": "Ломбард"
    },
    {
        "organization_id": "36",
        "organization_type": "Лото Маркет"
    },
    {
        "organization_id": "37",
        "organization_type": "Магазин"
    },
    {
        "organization_id": "38",
        "organization_type": "Майстерня"
    },
    {
        "organization_id": "39",
        "organization_type": "Масажний кабінет"
    },
    {
        "organization_id": "40",
        "organization_type": "МАФ"
    },
    {
        "organization_id": "41",
        "organization_type": "Меблевий цех"
    },
    {
        "organization_id": "42",
        "organization_type": "Медичний заклад"
    },
    {
        "organization_id": "43",
        "organization_type": "Медичний кабінет"
    },
    {
        "organization_id": "44",
        "organization_type": "Медичний центр"
    },
    {
        "organization_id": "45",
        "organization_type": "Модуль"
    },
    {
        "organization_id": "46",
        "organization_type": "Олійня"
    },
    {
        "organization_id": "47",
        "organization_type": "Перукарня"
    },
    {
        "organization_id": "48",
        "organization_type": "Приватний нотаріус"
    },
    {
        "organization_id": "49",
        "organization_type": "Пункт збору вторсировини"
    },
    {
        "organization_id": "50",
        "organization_type": "Релігійна споруда"
    },
    {
        "organization_id": "51",
        "organization_type": "Ресторан"
    },
    {
        "organization_id": "52",
        "organization_type": "Розважальний комплекс"
    },
    {
        "organization_id": "53",
        "organization_type": "Салон краси"
    },
    {
        "organization_id": "54",
        "organization_type": "Сервісний центр"
    },
    {
        "organization_id": "55",
        "organization_type": "Склад"
    },
    {
        "organization_id": "56",
        "organization_type": "Спортзал"
    },
    {
        "organization_id": "57",
        "organization_type": "Стоматологічний кабінет"
    },
    {
        "organization_id": "58",
        "organization_type": "Супермаркет"
    },
    {
        "organization_id": "59",
        "organization_type": "Торгівельний павільйон"
    },
    {
        "organization_id": "60",
        "organization_type": "Торгівельний центр"
    },
    {
        "organization_id": "61",
        "organization_type": "Торгівельно-розважальний комплекс"
    },
    {
        "organization_id": "62",
        "organization_type": "Торговий причіп"
    },
    {
        "organization_id": "63",
        "organization_type": "Туристична агенція"
    },
    {
        "organization_id": "64",
        "organization_type": "Фотопослуги"
    },
    {
        "organization_id": "65",
        "organization_type": "Центр вивчення мов"
    },
    {
        "organization_id": "66",
        "organization_type": "Швейна майстерня"
    },
    {
        "organization_id": "67",
        "organization_type": "Шиномонтаж"
    },
    {
        "organization_id": "68",
        "organization_type": "Школа"
    },
    {
        "organization_id": "69",
        "organization_type": "Ювелірна майстерня"
    }
]

// Додає типи організацій у список
function add_select_organization_type() {
    for (i = 0; i < data_organization_type_arr.length; i++) {
        const option = document.createElement("option");
        option.setAttribute("value", data_organization_type_arr[i].organization_id);
        option.innerHTML = `${data_organization_type_arr[i].organization_type}`;

        document.getElementById("id_select_organization_type").appendChild(option);
    };
}

// Додає типи організацій у список після завантаження сторінки
document.addEventListener('DOMContentLoaded', add_select_organization_type(), false);
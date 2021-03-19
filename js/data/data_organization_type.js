const data_organization_type_arr = [
    {
        organization_id: 1,
        organization_type: "Автомагазин",
        voice_search: [
            "Автомагазин",
            "Автомагазини",
        ],
    },
    {
        organization_id: 2,
        organization_type: "Автомийка",
        voice_search: [
            "Автомийка",
            "Автомийки",
            "Автомийки самообслуговування",
        ],
    },
    {
        organization_id: 3,
        organization_type: "Автомобільна школа",
        voice_search: [
            "Автомобільна школа",
            "Автомобільні школи",
            "Автошколи",
        ],
    },
    {
        organization_id: 4,
        organization_type: "Автосервіс",
        voice_search: [
            "Автосервіс",
            "Автосервіси",
            /* "сто", (то - 0 - 0, 100 - 0 - 0, що - 0 - 0))*/
            "Станції технічного обслуговування",
        ],
    },
    {
        organization_id: 5,
        organization_type: "Автостанція",
        voice_search: [
            "Автостанція",
            "Автостанції",
            "Автовокзали",
            "Автовокзал",
        ],
    },
    {
        organization_id: 6,
        organization_type: "Аптека",
        voice_search: [
            "Аптека",
            "Аптеки",
        ],
    },
    {
        organization_id: 7,
        organization_type: "Ательє з пошиття одягу",
        voice_search: [
            "Ательє",
            "Ательє з пошиття одягу",
            "Ательє з пошиття та ремонту одягу",
            "Ательє з ремонту одягу",
            "Пошиття та ремонт одягу",
            "Пошиття одягу",
            "Ремонт одягу",
        ],
    },
    {
        organization_id: 8,
        organization_type: "Банк",
        voice_search: [
            "Банк",
            "Банки",
            "Державні банки",
            "Приватні банки",
        ],
    },
    {
        organization_id: 9,
        organization_type: "Безоплатна правова допомога",
        voice_search: [
            "Безоплатна правова допомога",
            /* "Правова допомога", (може бути у адвоката)*/
        ],
    },
    {
        organization_id: 10,
        organization_type: "Будівельна організація",
        voice_search: [
            "Будівельна організація",
            "Будівельні організації",
            "Будівельні компанії",
        ],
    },
    {
        organization_id: 11,
        organization_type: "Будівельний супермаркет",
        voice_search: [
            "Будівельний супермаркет",
            "Будівельні супермаркети",
        ],
    },
    {
        organization_id: 12,
        organization_type: "Ветаптека",
        voice_search: [
            "Ветаптека",
            "Ветаптеки",
            "Ветеринарні аптеки",
        ],
    },
    {
        organization_id: 13,
        organization_type: "Виробництво пам'ятників",
        voice_search: [
            "Виробництво пам'ятників",
            "Виробники пам'ятників",
            "Виробники памятників",
        ],
    },
    {
        organization_id: 14,
        organization_type: "Відділення кабельного телебачення",
        voice_search: [
            "Відділення кабельного телебачення",
        ],
    },
    {
        organization_id: 15,
        organization_type: "Відділення обміну валют",
        voice_search: [
            "Відділення обміну валют",
            "Пункти обміну валюти",
            "Обмін валют",
            "Обмінники",
        ],
    },
    {
        organization_id: 16,
        organization_type: "Відділення ПАТ",
        voice_search: [
            "Відділення ПАТ",
        ],
    },
    {
        organization_id: 17,
        organization_type: "Відділення ремонту телерадіоапаратури",
        voice_search: [
            "Відділення ремонту телерадіоапаратури",
            "Відділення ремонту телерадіо апаратури",
            "Ремонт телерадіоапаратури",
            "Ремонт теле радіоапаратури",
            "Ремонт телерадіо апаратури",
            "Ремонт радіоапаратури",
            "Відділення ремонту побутової техніки",
            "Ремонт побутової техніки",
        ],
    },
    {
        organization_id: 18,
        organization_type: "Відділення служби доставки",
        voice_search: [
            "Відділення служби доставки",
            "Служби доставки",
        ],
    },
    {
        organization_id: 19,
        organization_type: "Відділення страхової компанії",
        voice_search: [
            "Відділення страхової компанії",
            "Відділення страхової",
            "Відділення страхових компаній",
            "Страхові компанії",
            "Страхові",
            "Страхова",
        ],
    },
    {
        organization_id: 20,
        organization_type: "Відділення ТРК",
        voice_search: [
            "Відділення ТРК",
            "Відділення телерадіо компаній",
            "Відділення телерадіокомпаній",
            "Телерадіо компанії",
            "Телерадіокомпанії",
        ],
    },
    {
        organization_id: 21,
        organization_type: "ВКП",
        voice_search: [
            "ВКП",
        ],
    },
    {
        organization_id: 22,
        organization_type: "Гаражний кооператив",
        voice_search: [
            "Гаражний кооператив",
            "Гаражні кооперативи",
        ],
    },
    {
        organization_id: 23,
        organization_type: "Готель",
        voice_search: [
            "Готель",
            "Готелі",
            "Мотелі",
            "Мотель",
        ],
    },
    {
        organization_id: 24,
        organization_type: "Державна установа",
        voice_search: [
            "Державна установа",
            "Державні установи",
            "Державні органи",
            "Державні підприємства",
        ],
    },
    {
        organization_id: 25,
        organization_type: "Дошкільний навчальний заклад",
        voice_search: [
            "Дошкільний навчальний заклад",
            "Дошкільні навчальні заклади",
            "Садочок",
            "Садики",
            "Дитячий садочок",
            "Дитячі садочки",
            "Садочки",
        ],
    },
    {
        organization_id: 26,
        organization_type: "Друкарня",
        voice_search: [
            "Друкарня",
            "Друкарні",
        ],
    },
    {
        organization_id: 27,
        organization_type: "Заправка",
        voice_search: [
            "Заправка",
            "Заправки",
            "Автомобільні заправки",
            "Автозаправки",
            "Газова заправка",
        ],
    },
    {
        organization_id: 28,
        organization_type: "Кавярня",
        voice_search: [
            "Кавярня",
            "кав'ярня",
            "Кавярні",
            "Кав'ярні",
        ],
    },
    {
        organization_id: 29,
        organization_type: "Кафе",
        voice_search: [
            "Кафе",
            "Кафе-бар",
            "Кафе бар",
            "Кафе-бари",
            "Кафе бари",
        ],
    },
    {
        organization_id: 30,
        organization_type: "Кінотеатр",
        voice_search: [
            "Кінотеатр",
            "Кінотеатри",
        ],
    },
    {
        organization_id: 31,
        organization_type: "Кіоск",
        voice_search: [
            "Кіоск",
            "Кіоски",
        ],
    },
    {
        organization_id: 32,
        organization_type: "Комунальне підприємство",
        voice_search: [
            "Комунальне підприємство",
            "Комунальні підприємства",
        ],
    },
    {
        organization_id: 33,
        organization_type: "Кузня",
        voice_search: [
            "Кузня",
            "Кузні",
        ],
    },
    {
        organization_id: 34,
        organization_type: "Лазня",
        voice_search: [
            "Лазня",
            "Лазні",
            "Сауна",
            "Сауни",
        ],
    },
    {
        organization_id: 35,
        organization_type: "Ломбард",
        voice_search: [
            "Ломбард",
            "Ломбарди",
        ],
    },
    {
        organization_id: 36,
        organization_type: "Лото Маркет",
        voice_search: [
            "Лото маркет",
            "Лотомаркет",
            "Лото маркети",
            "Лотомаркети",
            "Лото-маркети",
            "Державні лотереї",
            "Державна лотерея",
            "Лотереї",
            "Лотерея",
        ],
    },
    {
        organization_id: 37,
        organization_type: "Магазин",
        voice_search: [
            "Магазин",
            "Магазини",
        ],
    },
    {
        organization_id: 38,
        organization_type: "Майстерня",
        voice_search: [
            "Майстерня",
            "Майстерні",
        ],
    },
    {
        organization_id: 39,
        organization_type: "Масажний кабінет",
        voice_search: [
            "Масажний кабінет",
            "Масажні кабінети",
            "Масаж",
        ],
    },
    {
        organization_id: 40,
        organization_type: "МАФ",
        voice_search: [
            "МАФ",
            "Мафи",
            "Мала архітектурна форма",
            "Малі архітектурні форми",
        ],
    },
    {
        organization_id: 41,
        organization_type: "Меблевий цех",
        voice_search: [
            "Меблевий цех",
            "Меблеві цехи",
            "Виробництво меблів",
            "Фабрики меблів",
            "Фабрика меблів",
            "Мебельні фабрики",
            "Мебельна фабрика",
        ],
    },
    {
        organization_id: 42,
        organization_type: "Медичний заклад",
        voice_search: [
            "Медичний заклад",
            "Медичні заклади",
            "Заклад охорони здоров'я",
            "Заклади охорони здоров'я",
            "Опорні лікарні",
            "Опорна лікарня",
            "Лікарня",
            "Лікарні",
            "Швидка допомога",
            "Швидка",
        ],
    },
    {
        organization_id: 43,
        organization_type: "Медичний кабінет",
        voice_search: [
            "Медичний кабінет",
            "Медичні кабінети",
        ],
    },
    {
        organization_id: 44,
        organization_type: "Медичний центр",
        voice_search: [
            "Медичний центр",
            "Медичні центри",
            "Приватні клініки",
            "Приватна клініка",
        ],
    },
    {
        organization_id: 45,
        organization_type: "Модуль",
        voice_search: [
            "Модуль",
            "Модулі",
            "Банківський модуль",
            "Банківські модулі",
        ],
    },
    {
        organization_id: 46,
        organization_type: "Олійня",
        voice_search: [
            "Олійня",
            "Олійні",
        ],
    },
    {
        organization_id: 47,
        organization_type: "Перукарня",
        voice_search: [
            "Перукарня",
            "Перукарні",
        ],
    },
    {
        organization_id: 48,
        organization_type: "Приватний нотаріус",
        voice_search: [
            "Приватний нотаріус",
            "Приватні нотаріуси",
            "Нотаріуси",
            "Нотаріус",
        ],
    },
    {
        organization_id: 49,
        organization_type: "Пункт збору вторсировини",
        voice_search: [
            "Пункт збору вторсировини",
            "Пункти збору вторсировини",
            "Пункт збору скла",
            "Пункти збору скла",
            "Пункт збору макулатури",
            "Пункти збору макулатури",
            "Пункт збору пластику",
            "Пункти збору пластику",
            "Збір скла",
            "Збір макулатури",
            "Збір пластику",
        ],
    },
    {
        organization_id: 50,
        organization_type: "Релігійна споруда",
        voice_search: [
            "Релігійна споруда",
            "Релігійні споруди",
            "Культова споруда",
            "Культові споруди",
            "Церква",
            "Церкви",
            "Храм",
            "Храми",
        ],
    },
    {
        organization_id: 51,
        organization_type: "Ресторан",
        voice_search: [
            "Ресторан",
            "Ресторани",
        ],
    },
    {
        organization_id: 52,
        organization_type: "Розважальний комплекс",
        voice_search: [
            "Розважальний комплекс",
            "Розважальні комплекси",
            "Розважальний комплекс відпочинку",
            "Розважальні комплекси відпочинку",
            "Відпочинковий комплекс",
            "Відпочинкові комплекси",
            "Розважальний заклад",
            "Розважальні заклади",
        ],
    },
    {
        organization_id: 53,
        organization_type: "Салон краси",
        voice_search: [
            "Салон краси",
            "Салони краси",
            "Салони",
        ],
    },
    {
        organization_id: "54",
        organization_type: "Сервісний центр",
        voice_search: [
            "Сервісний центр",
            "Сервісні центри",
        ],
    },
    {
        organization_id: 55,
        organization_type: "Склад",
        voice_search: [
            "Склад",
            "Склади",
        ],
    },
    {
        organization_id: 56,
        organization_type: "Спортзал",
        voice_search: [
            "Спортзал",
            "Спортзали",
            "Тренажерний зал",
            "Тренажерні зали",
            "Спорткомплекс",
            "Спорткомплекси",
            "Спортивний комплекс",
            "Спортивні комплекси",
        ],
    },
    {
        organization_id: 57,
        organization_type: "Стоматологічний кабінет",
        voice_search: [
            "Стоматологічний кабінет",
            "Стоматологічні кабінети",
            "Стоматолог",
            "Стоматологи",
            "Стоматологія",
            "Стоматології",
            "Кабінет стоматології",
            "Кабінети стоматології",
        ],
    },
    {
        organization_id: 58,
        organization_type: "Супермаркет",
        voice_search: [
            "Супермаркет",
            "Супермаркети",
        ],
    },
    {
        organization_id: 59,
        organization_type: "Торгівельний павільйон",
        voice_search: [
            "Торгівельний павільйон",
            "Торгівельні павільйони",
            "Торгові павільйони",
        ],
    },
    {
        organization_id: 60,
        organization_type: "Торгівельний центр",
        voice_search: [
            "Торгівельний центр",
            "Торгівельні центри",
            "Торговельні центри",
        ],
    },
    {
        organization_id: 61,
        organization_type: "Торгівельно-розважальний комплекс",
        voice_search: [
            "Торгівельно-розважальний комплекс",
            "Торгівельно розважальні комплекси",
        ],
    },
    {
        organization_id: 62,
        organization_type: "Торговий причіп",
        voice_search: [
            "Торговий причіп",
            "Торгові причепи",
            "Причеп торговий",
            "Причепи торгові",
        ],
    },
    {
        organization_id: 63,
        organization_type: "Туристична агенція",
        voice_search: [
            "Туристична агенція",
            "Туристичні агенції",
            "Туристична фірма",
            "Туристичні фірми",
            "Туроператор",
            "Туроператори",
        ],
    },
    {
        organization_id: 64,
        organization_type: "Фотопослуги",
        voice_search: [
            "Фотопослуги",
        ],
    },
    {
        organization_id: 65,
        organization_type: "Центр вивчення мов",
        voice_search: [
            "Центр вивчення іноземних мов",
            "Центри вивчення іноземних мов",
            "Центр вивчення мов",
            "Центри вивчення мов",
            "Центр розвитку мов",
            "Центри розвитку мов",
            "Центр іноземних мов",
            "Центри іноземних мов",
            "Мовна школа",
            "Мовні школи",
            "Вивчення мов",
            "Вивчення іноземних мов",
        ],
    },
    {
        organization_id: 66,
        organization_type: "Швейна майстерня",
        voice_search: [
            "Швейна майстерня",
            "Швейні майстерні",
            "Швейний цех",
            "Швейні цехи",
            "Швейня",
            "Швейні",
            "Майстерня по ремонту одягу",
            "Майстерні по ремонту одягу",
            "Майстерня по пошиву та ремонту одягу",
            "Майстерні по пошиву та ремонту одягу",
            "Майстерня по пошиву ремонту одягу",
            "Майстерні по пошиву ремонту одягу",
            "Майстерня по пошиву одягу",
            "Майстерні по пошиву одягу",
        ],
    },
    {
        organization_id: 67,
        organization_type: "Шиномонтаж",
        voice_search: [
            "Шиномонтаж",
            "Шиномонтажі",
        ],
    },
    {
        organization_id: 68,
        organization_type: "Школа",
        voice_search: [
            "Школа",
            "Школи",
            "Загальноосвітня школа",
            "Загальноосвітні школи",
            "Середня школа",
            "Середні школи",
        ],
    },
    {
        organization_id: 69,
        organization_type: "Ювелірна майстерня",
        voice_search: [
            "Ювелірна майстерня",
            "Ювелірні майстерні",
            "Ремонт ювелірних виробів",
        ],
    },
    {
        organization_id: 70,
        organization_type: "Адвокат",
        voice_search: [
            "Адвокат",
            "Адвокати",
        ],
    },
];

// Додає типи організацій у список
function add_select_organization_type() {
    for (i = 0; i < data_organization_type_arr.length; i++) {
        const option = document.createElement("option");
        option.setAttribute("value", data_organization_type_arr[i].organization_id);
        option.innerHTML = `${data_organization_type_arr[i].organization_type}`;

        document.getElementById("id_select_organization_type").appendChild(option);
    }
}

// Додає типи організацій у список після завантаження сторінки
document.addEventListener("DOMContentLoaded", add_select_organization_type(), false);

const data_human_settlement_arr = [
    {
        "human_settlement_id": 1,
        "human_settlement_code": 1,
        "human_settlement_short_name": "м.Ладижин",
        "human_settlement_name_voice_search": "ладижин",
        "human_settlement_name": "24321, Вінницька обл., м.Ладижин,",
        "human_settlement_zip_code": "24320, 24321",
        "human_settlement_longitude": 29.2344424405491,
        "human_settlement_latitude": 48.68474316279234,
        "human_settlement_total_number_registered_men": 9900,
        "human_settlement_total_number_registered_women": 6259,
        "human_settlement_total_number_registered_children_up_14_years": 2820,
        "human_settlement_total_number_registered_children_from_14_to_18_years": 1034,
        "human_settlement_length_border": 26217
    },
    {
        "human_settlement_id": 2,
        "human_settlement_code": 2,
        "human_settlement_short_name": "с.Лукашівка",
        "human_settlement_name_voice_search": "лукашівка",
        "human_settlement_name": "24325, Вінницька обл., м.Ладижин, с.Лукашівка,",
        "human_settlement_zip_code": "24325",
        "human_settlement_longitude": 29.196657477941777,
        "human_settlement_latitude": 48.653493327683464,
        "human_settlement_total_number_registered_men": 326,
        "human_settlement_total_number_registered_women": 237,
        "human_settlement_total_number_registered_children_up_14_years": 66,
        "human_settlement_total_number_registered_children_from_14_to_18_years": 9,
        "human_settlement_length_border": 12548
    },
    {
        "human_settlement_id": 3,
        "human_settlement_code": 3,
        "human_settlement_short_name": "с-ще Губник",
        "human_settlement_name_voice_search": "губник",
        "human_settlement_name": "24324, Вінницька обл., м.Ладижин, с-ще Губник,",
        "human_settlement_zip_code": "24324",
        "human_settlement_longitude": 29.30083594417455,
        "human_settlement_latitude": 48.617437666190355,
        "human_settlement_total_number_registered_men": 179,
        "human_settlement_total_number_registered_women": 88,
        "human_settlement_total_number_registered_children_up_14_years": 24,
        "human_settlement_total_number_registered_children_from_14_to_18_years": 14,
        "human_settlement_length_border": 4474
    },
    {
        "human_settlement_id": 4,
        "human_settlement_code": 4,
        "human_settlement_short_name": "с-ще Ружицьке",
        "human_settlement_name_voice_search": "ружинське",
        "human_settlement_name": "24324, Вінницька обл., м.Ладижин, с-ще Ружицьке,",
        "human_settlement_zip_code": "24324",
        "human_settlement_longitude": 29.297418303682885,
        "human_settlement_latitude": 48.6221680961342,
        "human_settlement_total_number_registered_men": 8,
        "human_settlement_total_number_registered_women": 2,
        "human_settlement_total_number_registered_children_up_14_years": 1,
        "human_settlement_total_number_registered_children_from_14_to_18_years": 0,
        "human_settlement_length_border": 2156
    },
    {
        "human_settlement_id": 5,
        "human_settlement_code": 5,
        "human_settlement_short_name": "с.Заозерне",
        "human_settlement_name_voice_search": "заозерне",
        "human_settlement_name": "23664, Вінницька обл., м.Ладижин, с.Заозерне,",
        "human_settlement_zip_code": "23664",
        "human_settlement_longitude": 29.156349774053815,
        "human_settlement_latitude": 48.6929685588338,
        "human_settlement_total_number_registered_men": 290,
        "human_settlement_total_number_registered_women": 306,
        "human_settlement_total_number_registered_children_up_14_years": 37,
        "human_settlement_total_number_registered_children_from_14_to_18_years": 15,
        "human_settlement_length_border": 8876
    },
    {
        "human_settlement_id": 6,
        "human_settlement_code": 6,
        "human_settlement_short_name": "с.Василівка",
        "human_settlement_name_voice_search": "василівка",
        "human_settlement_name": "23664, Вінницька обл., м.Ладижин, с.Василівка,",
        "human_settlement_zip_code": "23665",
        "human_settlement_longitude": 29.111650304824508,
        "human_settlement_latitude": 48.70084500470404,
        "human_settlement_total_number_registered_men": 127,
        "human_settlement_total_number_registered_women": 130,
        "human_settlement_total_number_registered_children_up_14_years": 38,
        "human_settlement_total_number_registered_children_from_14_to_18_years": 14,
        "human_settlement_length_border": 7178
    }
]

// Додає населені пункти у список
function add_select_human_settlements() {
    for (i = 0; i < data_human_settlement_arr.length; i++) {
        const option = document.createElement("option");
        option.setAttribute("value", data_human_settlement_arr[i].human_settlement_id);
        option.innerHTML = `${data_human_settlement_arr[i].human_settlement_short_name}`;

        document.getElementById("id_human_settlements").appendChild(option);
    };
}

// Додає населені пункти у список після завантаження сторінки
document.addEventListener('DOMContentLoaded', add_select_human_settlements(), false);
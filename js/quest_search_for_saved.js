// В залежності від того чи є збережений минулий квест додає необхідні елементи управління
function quest_search_for_saved() {

    if (localStorage.getItem("quest_obj")) {
        // Є збережений квест

        document.getElementById("quests_data_1").innerHTML = `
        <button class="button_sidebar_add_map" id="" onclick="start_new_quest()">Пройти квест із самого початку (результат минулого проходження буде втрачено)</button>
    
        <button class="button_sidebar_add_map" id="" onclick="complete_last_quest()">Закінчити проходження минулого квесту</button>
        `;
    } else {
        // Відсутній збережений квест
        document.getElementById("quests_data_1").innerHTML = `<button class="button_sidebar_add_map" id="" onclick="start_new_quest()">Пройти квест</button>`;
    }
}

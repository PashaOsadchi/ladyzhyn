let clock_timer;

function start_timer() {
    clearTimeout(clock_timer);

    let data;

    if (quest_obj.timer_seconds == 0) {
        data = formatting_seconds_days_hours_min_seconds(quest_obj.timer_seconds);
    } else {
        data = formatting_seconds_days_hours_min_seconds(quest_obj.timer_seconds);
    }

    quest_obj.timer_seconds++;

    document.getElementById("quest_time").innerHTML = `Час проходження квесту: ${data}`;

    // Зберігає дані у локальному сховищі
    save_quest_obj();

    clock_timer = setTimeout("start_timer()", 1000);
}

let touch_open_start_x = 0;
let touch_open_end_x = 0;

const slider_open = document.getElementById("id_body");

slider_open.addEventListener("touchstart", (e) => {
    touch_open_start_x = e.changedTouches[0].clientX;
});

slider_open.addEventListener("touchend", (e) => {
    touch_open_end_x = e.changedTouches[0].clientX;
    slider_open_sidebar();
});

// Відкриває меню
function slider_open_sidebar() {
    // Зправа - вліво (відкриває меню)
    if (touch_open_end_x < touch_open_start_x) {
        // Перевіряє чи був перший клік на відстані не більше як 10 px від правого краю екрана
        if (touch_open_start_x > window.innerWidth - 10) {
            open_close_sidebar();
        }
    }
};

/* let touch_close_start_x = 0;
let touch_close_end_x = 0;

const slider_close = document.getElementById("id_sidebar");

slider_close.addEventListener("touchstart", (e) => {
    touch_close_start_x = e.changedTouches[0].clientX;
});

slider_close.addEventListener("touchend", (e) => {
    touch_close_end_x = e.changedTouches[0].clientX;
    slider_close_sidebar();
});

// Закриває меню
function slider_close_sidebar() {
    // Зліва - вправо (закриває меню)
    if (touch_close_end_x > touch_close_start_x) {
        // Перевіряє чи був перший клік на відстані не більше як 10 px від лівого краю екрана
        if (touch_close_start_x < 20) {
            open_close_sidebar();
        }
    }
} */
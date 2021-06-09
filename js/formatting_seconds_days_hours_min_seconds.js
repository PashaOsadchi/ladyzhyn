function formatting_seconds_days_hours_min_seconds(seconds) {
    //let sec = milliseconds / 1000;
    //let seconds = sec.toFixed(0);

    let days = Math.floor(seconds / (24 * 60 * 60));
    seconds -= days * (24 * 60 * 60);
    let hours = Math.floor(seconds / (60 * 60));
    seconds -= hours * (60 * 60);
    let minutes = Math.floor(seconds / 60);
    seconds -= minutes * 60;

    if (days == 1) {
        if (days >= 1) return days + " день " + hours + " год. " + minutes + " хв. " + seconds + " сек.";
        else if (hours >= 1) return hours + " год. " + minutes + " хв. " + seconds + " сек.";
        else if (minutes >= 1) return minutes + " хв. " + seconds + " сек.";
        else return seconds + " сек.";
    } else if (days >= 2 && days <= 4) {
        if (days >= 1) return days + " дня " + hours + " год. " + minutes + " хв. " + seconds + " сек.";
        else if (hours >= 1) return hours + " год. " + minutes + " хв. " + seconds + " сек.";
        else if (minutes >= 1) return minutes + " хв. " + seconds + " сек.";
        else return seconds + " сек.";
    } else {
        if (days >= 1) return days + " днів " + hours + " год. " + minutes + " хв. " + seconds + " сек.";
        else if (hours >= 1) return hours + " год. " + minutes + " хв. " + seconds + " сек.";
        else if (minutes >= 1) return minutes + " хв. " + seconds + " сек.";
        else return seconds + " сек.";
    }
}

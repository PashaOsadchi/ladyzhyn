const user_device_arr = [
    { device: "Android", platform: /Android/ },
    { device: "iPhone", platform: /iPhone/ },
    { device: "iPad", platform: /iPad/ },
    { device: "Symbian", platform: /Symbian/ },
    { device: "Windows Phone", platform: /Windows Phone/ },
    { device: "Tablet OS", platform: /Tablet OS/ },
    { device: "Linux", platform: /Linux/ },
    { device: "Windows", platform: /Windows NT/ },
    { device: "Macintosh", platform: /Macintosh/ },
];

function detect_device_platform_1() {
    const platform = navigator.userAgent;

    let device = platform;

    user_device_arr.forEach((el) => {
        if (el.platform.test(platform)) device = el.device;
    });

    return device;
}

function detect_device_platform_2() {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
        console.log("Вы використовуєте мобільний пристрій (телефон або планшет).");
    } else console.log("Ви використовуєте ПК.");
}
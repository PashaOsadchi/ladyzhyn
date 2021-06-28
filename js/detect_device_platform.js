function detect_device_platform_1() {
    const userDeviceArray = [
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
    const platform = navigator.userAgent;

    function getPlatform() {
        for (let i in userDeviceArray) {
            if (userDeviceArray[i].platform.test(platform)) {
                return userDeviceArray[i].device;
            }
        }
        return "Невідома платформа!" + platform;
    }
    return getPlatform();
}

function detect_device_platform_2() {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
        console.log("Вы використовуєте мобільний пристрій (телефон або планшет).");
    } else console.log("Ви використовуєте ПК.");
}
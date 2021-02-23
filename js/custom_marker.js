function custom_marker(latlng, map, args) {
    this.latlng = latlng;
    this.args = args;
    this.setMap(map);
}

custom_marker.prototype = new google.maps.OverlayView();

custom_marker.prototype.draw = function () {

    let self = this;

    let div = this.div;

    if (!div) {

        div = this.div = document.createElement('div');

        div.setAttribute('data-before', this.args.marker_name);

        div.className = this.args.marker_class_name;
        div.addEventListener('click' , () => open_dialog_detailed_information(self.args.marker_id));

        // Додає до DIC атрибути користувача
        /* if (typeof (self.args.marker_id) !== 'undefined') {
            div.dataset.marker_id = self.args.marker_id;
        } */

        // Викликається при клікові на маркері
        /* google.maps.event.addDomListener(div, "click", function (event) {
            alert(self.args.marker_id);
            google.maps.event.trigger(self, "click");
        }); */

        let panes = this.getPanes();
        panes.overlayImage.appendChild(div);
    }

    let point = this.getProjection().fromLatLngToDivPixel(this.latlng);

    if (point) {
        div.style.left = (point.x - 10) + 'px';
        div.style.top = (point.y - 20) + 'px';
    }
};

custom_marker.prototype.remove = function () {
    if (this.div) {
        this.div.parentNode.removeChild(this.div);
        this.div = null;
    }
};

custom_marker.prototype.getPosition = function () {
    return this.latlng;
};
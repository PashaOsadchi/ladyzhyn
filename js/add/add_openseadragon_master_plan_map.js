let viewer_selection_coordinates_map;
let box;

function open_openseadragon_master_plan_map() {
    viewer_selection_coordinates_map = OpenSeadragon({
        id: "openseadragon_master_plan_map",
        prefixUrl: "icon/",
        //defaultZoomLevel: 1.4,
        tileSources: {
            Image: {
                xmlns: "http://schemas.microsoft.com/deepzoom/2009",
                Url: "img/master_plan/",
                Format: "jpg",
                Overlap: 1,
                TileSize: "256",
                Size: {
                    Height: 10900,
                    Width: 13500,
                },
            },
        },
    });
}

function open_openseadragon_scheme_engineering_thermal_networks_map() {
    viewer_selection_coordinates_map = OpenSeadragon({
        id: "openseadragon_scheme_engineering_thermal_networks_map",
        prefixUrl: "icon/",
        //defaultZoomLevel: 1.4,
        tileSources: {
            Image: {
                xmlns: "http://schemas.microsoft.com/deepzoom/2009",
                Url: "img/scheme_engineering_thermal_networks/",
                Format: "jpg",
                Overlap: 1,
                TileSize: "256",
                Size: {
                    Height: 10925,
                    Width: 11870,
                },
            },
        },
    });
}

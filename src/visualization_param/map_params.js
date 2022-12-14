var scl = [
    [0, 'rgb(5, 10, 172)'],
    [0.35, 'rgb(40, 60, 190)'],
    [0.5, 'rgb(70, 100, 245)'],
    [0.6, 'rgb(90, 120, 245)'],
    [0.7, 'rgb(106, 137, 247)'],
    [1, 'rgba(185, 216, 255, 0.8)']
];
export function mapDataScatterGeo(location, data, lat, lng, title = "") {
    return [{
        type: 'scattergeo',
        mode: 'markers',
        locationmode: "country names",
        text: location,
        hoverinfor: data,
        lon: lng,
        lat: lat,
        marker: {
            size: 8,
            opacity: 0.8,
            reversescale: true,
            autocolorscale: false,
            symbol: 'circle',
            line: {
                width: 1,
                color: 'rgb(102,102,102)'
            },
            colorscale: scl,
            cmin: 0,
            color: data,
            colorbar: {
                title: title,
                thickness: 5
            },
        }
    }]
}

export function mapData(location_code, location, data, type) {
    if (type.toLowerCase() === "country") {
        return [{
            type: 'choropleth',
            locationmode: 'country names',
            locations: location,
            z: data,
            text: location,
            zmin: 0,
            zmax: 588,
            colorscale: [
                [0, 'rgba(159, 199, 253, 0.46)'],
                [0.2, 'rgba(126, 181, 255, 0.46)'],
                [0.4, 'rgba(73, 151, 255, 0.46)'],
                [0.6, 'rgba(13, 116, 255, 0.46)'],
                [0.8, 'rgba(0, 90, 213, 0.54)'],
                [1, 'rgba(0, 84, 197, 0.71)']
            ],
            colorbar: {
                thickness: 10
            },

        }]
    } else {
        return [{
            type: 'choropleth',
            locations: location,
            z: data,
            text: location,
            zmin: 0,
            zmax: 588,
            colorscale: [
                [0, 'rgba(159, 199, 253, 0.46)'],
                [0.2, 'rgba(126, 181, 255, 0.46)'],
                [0.4, 'rgba(73, 151, 255, 0.46)'],
                [0.6, 'rgba(13, 116, 255, 0.46)'],
                [0.8, 'rgba(0, 90, 213, 0.54)'],
                [1, 'rgba(0, 84, 197, 0.71)']
            ],
            colorbar: {
                thickness: 10
            },

        }]
    }
}
export function mapScatterLayout() {
    return {
        title: 'Region Map',
        width: 1100,
        height: 700,
        dragmode: false,
        scrollZoom: false,
        colorbar: true,
        margin: { r: 0, l: 1 },
        geo: {
            scope: 'world',
            showframe: false,
            showcountries: true,
            projection: {

            },
            showland: true,
            landcolor: 'rgba(252, 255, 252, 0.8)',
            subunitcolor: 'rgb(217,217,217)',
            countrycolor: 'rgba(0, 0, 0, 0.8)',
            countrywidth: 0.5,
            subunitwidth: 0.5
        }
    }
}
export function mapLayout() {
    /*     return {
            title: 'Most Trafficked US airports',
            colorbar: true,
            geo: {
                scope: 'world',
                projection: {

                },
                showland: true,
                landcolor: 'rgb(250,250,250)',
                subunitcolor: 'rgb(217,217,217)',
                countrycolor: 'rgb(217,217,217)',
                countrywidth: 0.5,
                subunitwidth: 0.5
            }
        }; */

    return {
        title: 'Follower Counts By Country',
        width: 1100,
        height: 700,
        dragmode: false,
        scrollZoom: false,
        margin: { r: 0, l: 1 },
        geo: {
            showframe: false,
            showcountries: true,
            projection: {

            },
            showland: true,
            landcolor: 'rgba(236, 243, 253, 0.8)',

        }
    };
}
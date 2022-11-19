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

export function mapLayout() {

    return {
        title: 'Follower Counts By Country',
        width: 1100,
        height: 600,
        dragmode: false,
        scrollZoom: false,
        margin: { r: 5, l: 5 },
        geo: {
            showframe: false,
            projection: {

            },
            showland: true,
            landcolor: 'rgba(222, 236, 255, 0.39)',

        }
    };
}
import * as D3 from "d3"

var res, t = {};

export async function loadRegionLocationData() {

    res = () => {
        return D3.csv("https://raw.githubusercontent.com/cumberson97/Tweet-Charts/master/src/worldcities.csv")
            .then((data) => {
                t.data = data;
            })
    }

    await res();
    //console.log(t.data[0])
    var map = new Map()
    for (const value of t.data) {
        map.set(value.city_ascii, { "lat": value.lat, "lng": value.lng })

    }
    //console.log(map)
    return map
}
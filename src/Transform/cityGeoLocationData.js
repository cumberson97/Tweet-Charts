import * as D3 from "d3"

var res, t = {};
// this function fetches the Csv data with the region geo data from github
// data is loaded in to a map which use the country as key which refers to another map with the regions in that country as keys
// each regions latitude and longitude is stored in this map
export async function loadRegionLocationData() {

    res = () => {
        return D3.csv("https://raw.githubusercontent.com/cumberson97/Tweet-Charts/master/src/worldcities.csv")
            .then((data) => {
                t.data = data;
            })
    }

    await res();
    //console.log(t.data[0])
    var map = new Map(),
        region;
    for (const value of t.data) {
        if (map.has(value.country)) {
            map.get(value.country).set(value.city_ascii, { "lat": value.lat, "lng": value.lng })
        } else {
            map.set(value.country, new Map())
            map.get(value.country).set(value.city_ascii, { "lat": value.lat, "lng": value.lng })
        }

    }
    console.log(map)
    return map
}
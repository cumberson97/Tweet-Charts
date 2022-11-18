function avg(arr) {
    var sum = 0;
    for (const i of arr) {
        sum += i
    }
    return sum / arr.length
}



export function gaugeData(name, mean, H, W) {
    return {
        max: 1,
        min: -1,
        needleHeightRatio: .85,
        ringWidth: 10,
        segments: 5,
        value: avg(mean).toFixed(2),
        width: W,
        height: H,
        name: name,
        segmentColors: [
            "#b81414",
            "#ec5555",
            "#f2db5b",
            "#7ab55c",
            "#385828"
        ],
        needleColor: "#000080"
    }

}
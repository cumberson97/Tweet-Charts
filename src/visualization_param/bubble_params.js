export function bubbleChartData(x, y, color) {
    var val = [],
        i = 0

    for (const Y of y) {
        val.push({
            x: x,
            y: Y,
            text: "",
            mode: 'markers',
            marker: {
                color: color[i],
                size: Y,
                sizeref: .2,
            }
        })
        i++;
    }
    console.log(val.length)
    return val
}

export function layoutBubbleChart(title) {
    return {
        title: title,
        showlegend: false,
        height: 600,
        width: 600
    };
}
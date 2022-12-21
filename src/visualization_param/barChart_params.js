export function barchartData(x, y) {
    return [{
        type: 'bar',
        x: x,
        y: y,
        text: x,

        print_grid: false,
        orientation: 'h',
        hoverinfo: 'text',
        textposition: 'outside',
        //
        marker: {
            color: 'rgba(80, 20, 207, 0.8)',
            width: 3
        },
    }]
}

export function barChartLayout() {
    return {
        height: 700,
        width: 1100,
        margin: { r: 150, l: 150 },
        showlegend: false,
        bargap: 0.40,
        barmode: 'group',
        xaxis: {
            visible: false,
            showticklabels: false
        },
        yaxis: {
            ticklabelposition: "top",
            autorange: "reversed",
            'side': '',
            anchor: 'right'
        },
        'annotations': {
            x: 0,
            y: 0,
            xanchor: 'left',
            align: 'left',
            yshift: 0
        }
    }
}
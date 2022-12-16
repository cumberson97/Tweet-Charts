export function barchartData(x, y) {
    return {
        type: 'bar',
        x: x,
        y: y,
        text: x,

        print_grid: false,
        orientation: 'h',
        hoverinfo: 'text',
        textposition: 'auto',
        //
        marker: {
            color: 'rgba(55,128,191,0.6)',
            width: 3
        },
    }
}

export function barChartLayout() {
    return {
        showlegend: false,
        bargap: 0.40,
        barmode: 'group',
        xaxis: {
            visible: false,
            showticklabels: false
        },
        yaxis: {
            ticklabelposition: "top",
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
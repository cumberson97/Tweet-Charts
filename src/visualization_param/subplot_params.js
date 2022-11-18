export function chartData(name, date, positive, negative, neutral) {
    return {
        [name]: [{
            type: "scatter",
            x: date,
            y: positive
        }, {
            type: "scatter",
            x: date,
            y: negative,
            xaxis: 'x2',
            yaxis: 'y2'
        }, {
            type: "scatter",
            x: date,
            y: neutral,
            xaxis: 'x3',
            yaxis: 'y3'
        }]
    }

}

export function subplotLayout() {
    return {
        layout: {
            grid: { rows: 2, columns: 2, pattern: 'independent', ygap: .35 },
            height: 1050,
            width: 1100,
            xaxis: { type: 'date', dtick: 'D1' },
            xaxis2: { type: 'date', dtick: 'D1' },
            xaxis3: { type: 'date', dtick: 'D1' },
            annotations: [{
                text: "Positive",
                font: {
                    size: 16,
                    color: 'black',
                },
                showarrow: false,
                align: 'center',
                x: 0.13,
                y: 1,
                xref: 'paper',
                yref: 'paper'
            }, {
                text: "Negative",
                font: {
                    size: 16,
                    color: 'black',
                },
                showarrow: false,
                align: 'center',
                x: 0.83,
                y: 1,
                xref: 'paper',
                yref: 'paper'
            }, {
                text: "Neutral",
                font: {
                    size: 16,
                    color: 'black',
                },
                showarrow: false,
                align: 'center',
                x: 0.13,
                y: .45,
                xref: 'paper',
                yref: 'paper'
            }]
        }
    }
}
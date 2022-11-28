export function pieChartData(followerCount, nameText, title = '', position) {
    return {
        values: followerCount,
        labels: nameText,
        type: 'pie',
        name: title,
        marker: {

        },
        domain: {
            row: position[0],
            column: position[1]
        },
        hoverinfo: 'label+percent+name',
        textinfo: 'none'
    }


}

export function layoutMultiPieChart() {
    return {
        height: 600,
        width: 1100,
        showlegend: true,
        grid: { rows: 2, columns: 2 }
    };
}
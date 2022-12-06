export function pieChartData(followerCount, nameText, title = '', position) {
    return {
        values: followerCount,
        labels: nameText,
        type: 'pie',
        name: title,
        text: title,
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
        showlegend: false,
        grid: { rows: 2, columns: 2 }
    };
}

/* 
CONFIG PARAMS - Should be noted there are other parameters besides these

PARAMS FOR REMOVING BUTTONS 
'2D', zoom2d, pan2d, select2d, lasso2d, zoomIn2d, zoomOut2d, autoScale2d, resetScale2d
-'3D', zoom3d, pan3d, orbitRotation, tableRotation, handleDrag3d, resetCameraDefault3d, resetCameraLastSave3d, hoverClosest3d
-'Cartesian', hoverClosestCartesian, hoverCompareCartesian
-'Geo', zoomInGeo, zoomOutGeo, resetGeo, hoverClosestGeo
-'Other', hoverClosestGl2d, hoverClosestPie, toggleHover, resetViews, toImage, sendDataToCloud, toggleSpikelines, resetViewMapbox */

export function config() {
    return {
        modeBarButtonsToRemove: ['toImage', 'hoverClosestGeo', 'pan2d', 'select2d', 'lasso2d', 'zoomIn2d', "zoomOut2d", 'hoverClosestPie', 'toggleHover', 'toggleSpikelines', 'autoScale2d', 'resetScale2d', 'zoom2d'],
        displaylogo: false
    }
}
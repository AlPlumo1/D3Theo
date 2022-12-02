d3.csv("registre-national-installation-production-stockage-electricite-agrege.csv", function (csv_data) 
{
    var data = []
    var region = []
    var filiere = []
    var puissance = []
    var arrayLength = csv_data.length;

    //Creating region
    for (var i = 0; i < arrayLength; i++){
        if ((region.findIndex(x => x == csv_data[i].region)) === -1){
            region.push(csv_data[i].region)
        }
        if ((filiere.findIndex( x => x == csv_data[i].filiere)) === -1){
            filiere.push(csv_data[i].filiere)
        }
        if ((puissance.findIndex( x => x == csv_data[i].puisMaxInstallee)) === -1){
            puissance.push(parseFloat(csv_data[i].puisMaxInstallee))
        }
    }

region.sort()
filiere.sort()

{console.log(region)}
{console.log(filiere)}

var options = {
    series: [{
    name: 'NUCLEAIRE',
    data: [44, 55, 41, 67, 22, 43]
}, {
    name: 'PRODUCT B',
    data: [13, 23, 20, 8, 13, 27]
}, {
    name: 'PRODUCT C',
    data: [11, 17, 15, 15, 21, 14]
}, {
    name: 'PRODUCT D',
    data: [21, 7, 25, 13, 22, 8]
}],
    chart: {
    type: 'bar',
    height: 350,
    stacked: true,
    toolbar: {
    show: true
    },
    zoom: {
    enabled: true
    }
},
responsive: [{
    breakpoint: 480,
    options: {
    legend: {
        position: 'bottom',
        offsetX: -10,
        offsetY: 0
    }
    }
}],
plotOptions: {
    bar: {
    horizontal: false,
    borderRadius: 10,
    dataLabels: {
        total: {
        enabled: true,
        style: {
            fontSize: '13px',
            fontWeight: 900
        }
    }
    }
    },
},
xaxis: {
    categories: region.map(string)
},
legend: {
    position: 'right',
    offsetY: 40
},
fill: {
    opacity: 1
}
};

var chart = new ApexCharts(document.querySelector("#chart"), options);
chart.render();
})
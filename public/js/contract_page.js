var options = {
  chart: {
    toolbar: {
    show: false
  },
    height: 200,
    type: "area"
  },
  dataLabels: {
    enabled: false
  },

  series: [
    {
    name: 'Expenses',
    data: [
        {
            x: "2015",
            y: 201210023
        },
        {
            x: "2016",
            y: 212340023
        },
        {
            x: "2017",
            y: 23100023
        },
        {
            x: "2018",
            y: 23150023
        },
        {
            x: "2019",
            y: 1150023
        },
        {
          x: "2020",
          y: 1250023
        },
        
    ]
}],

  stroke: {
    curve: 'straight', 
    colors: ['green'],
    width: 1
  },
  grid: {
    show: false
  },
  yaxis: {
    show: false
  },
  fill: {
    type: "gradient",
    colors: ['rgba(0, 148, 94, 0.16), rgba(0, 148, 94, 0)'],
    gradient: {
      shadeIntensity: 1,
      opacityFrom: 0.7,
      opacityTo: 1,
      stops: [0, 90, 100]
    }
  },
  xaxis: {
    show: false,
    labels: {
      show: false
    },
     axisBorder: {
          show: false
      },
  },

};

var chart = new ApexCharts(document.querySelector("#chart"), options);

chart.render();

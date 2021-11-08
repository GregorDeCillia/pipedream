function pf(a, b) {
  return `
    <div style='padding: 5px;'>
      <strong style='color: ${this.color}'>${this.series.name}s</strong> from 
      <strong style='color: black'>${this.category}</strong> earn<br/> 
      <strong style='color: black'>${this.y} €</strong> per hour on average
    </div>`;
}

const hc_example = Highcharts.chart('barchart', {
  chart: {
    type: 'column',
    backgroundColor: 'transparent',
    style: {
      fontFamily: 'inherit'
    }
  },
  colors: ['#326996', '#B0063D'],
  yAxis: {
    labels: {
      style: {
        color: '#eee',
        fontSize: '24px'
      }
    },
    tickInterval: 5,
    title: {
      text: 'Hourly earnings in €',
      margin: 20,
      style: {
        color: '#eee',
        fontSize: '24px'
      }
    }
  },
  credits: {
    text: "Source: Structure of Earnings Survey",
    position: {
      y: -27
    },
    style: {
      color: '#cccccc',
      fontSize: '14px'
    },
    href: 'javascript:window.open("https://data.statistik.gv.at/web/meta.jsp?dataset=OGD_veste301_Veste301_1", "_blank")'
  },
  legend: {
    itemStyle: {color: '#eee', fontSize: '20px'},
    itemHoverStyle: {color: '#aaa'}
  },
  title: {
    text: 'Average income for different citizenships and genders',
    style: { color: 'white', fontSize: '33px' },
    margin: 20
  },
  tooltip: {
    className: 'barchart_tooltip',
    backgroundColor: 'white',
    headerFormat: '',
    pointFormatter: pf,
    useHTML: true,
    style: {
      fontSize: '20px'
    }
  },
  xAxis: {
    categories: [
      'Austia',
      'Non-Austria',
      'EU-28',
      'EU-15',
      'EU-13',
      'Former<br>Yugoslavia',
      'Turkey',
      'Other',
      'Sep',
      'Oct',
      'Nov',
      'Dec'
    ],
    labels: {
      style: {
        color: '#eee', fontSize: '22px'
      }
    }
  },
  // plotOptions: hacks to make the tooltip work with reveal.js
  plotOptions: {
    series: {
      point: {
        events: {
          mouseOver: e => {
            let chart = e.target.series.chart;
            chart.tooltip.refresh(e.target);
          }
        }
      },
      events: {
        click: e => {
          let chart = e.point.series.chart;
          chart.tooltip.refresh(e.point);
        },
      },
    }
  },
  series: [
    {
      name: 'Male',
      data: [20, 15, 16, 21, 14, 14, 12, 14]
    }, {
      name: 'Female',
      data: [16, 13, 14, 17, 12, 11, 10, 13]
    }
  ]
})

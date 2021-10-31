Highcharts.chart('workflow_api', {
  chart: {
    height: 200,
    backgroundColor: 'transparent'
  },
  credits: {
    enabled: false
  },
  title: {
    text: ''
  },
  series: [{
    type: 'organization',
    linkLineWidth: 5,
    keys: ['from', 'to'],
    data: [
      ['GUI', 'Export'],
      ['Export', 'API'],
      ['CMS', 'Import'],
      ['Import', 'API'],
      ['API', 'DB'],
      ['API', 'Embedding']
    ],
    nodes: [
      {
        id: 'GUI',
        name: 'Component<br>builder app',
        color: colors.app
      }, {
        id: 'CMS',
        name: 'Content man. system (CMS)',
        color: colors.cms
      }, {
        id: 'Export',
        name: 'Export <br>Components',
        color: colors.app
      }, {
        id: 'Import',
        name: 'Import<br>Components',
        layout: 'hanging',
        color: colors.cms
      }, {
        id: 'API',
        name: 'component<br>REST API',
        color: colors.api
      }, {
        id: 'DB',
        name: 'Component Database',
        color: colors.api
      }, {
        id: 'Embedding',
        name: 'Rendering<br>logic',
        color: colors.api
      }
    ],
    dataLabels: {
      color: 'hsl(0deg 0 90%)',
      style: {
        fontSize: '20px'
      }
    },
    borderColor: 'white',
    nodeWidth: 165
  }],
  tooltip: {
    enabled: false
  }
});

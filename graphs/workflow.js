const colors = {
  cms:  'hsl(180deg 70% 30%)',
  app:  'hsl(140deg 60% 30%)',
  api:  'hsl(270deg 50% 30%)',
  data: 'hsl(000deg 80% 30%)'
}

Highcharts.chart('workflow', {
  chart: {
    height: 400,
    inverted: true,
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
      ['GUI', 'Data'],
      ['Data', 'STATcube'],
      ['Data', 'OpenData'],
      ['GUI', 'Create'],
      ['Create', 'Tables'],
      ['Create', 'Graphs'],
      ['GUI', 'Export'],
      ['Export', 'API'],
      ['Import', 'API'],
      ['API', 'DB'],
      ['API', 'Embedding'],
      ['CMS', 'Import'],
      ['CMS', 'Text'],
      ['Text', 'Layout'],
    ],
    nodes: [
      {
        id: 'GUI',
        name: 'Component<br>Builder App',
        color: colors.app
      }, {
        id: 'CMS',
        name: 'Content Man. System (CMS)',
        color: colors.cms,
        nodeWidth: 400,
      }, {
        id: 'Data',
        name: 'Import Data',
        color: colors.data,
        layout: 'hanging'
      }, {
        id: 'Create',
        name: 'Create<br>Components',
        color: colors.app,
        layout: 'hanging'
      }, {
        id: 'Tables',
        color: colors.app
      }, {
        id: 'Graphs',
        color: colors.app
      }, {
        id: 'Export',
        name: 'Export <br>Components',
        color: colors.api
      }, {
        id: 'Import',
        name: 'Import<br>Components',
        layout: 'hanging',
        color: colors.api
      }, {
        id: 'Text',
        name: 'Add other<br>Contents',
        layout: 'hanging',
        color: colors.cms
      }, {
        id: 'STATcube',
        color: colors.data
      }, {
        id: 'OpenData',
        name: 'Open Gov. <br>Data',
        color: colors.data,
      }, {
        id: 'API',
        color: colors.api,
        name: 'Component<br>REST API',
      }, {
        id: 'DB',
        name: 'Component Database',
        color: colors.api
      }, {
        id: 'Embedding',
        name: 'Rendering<br>Logic',
        color: colors.api
      }, {
        id: 'Layout',
        color: colors.cms,
        name: 'Publish'
      }
    ],
    dataLabels: {
      color: 'hsl(0deg 0 90%)',
      style: {
        fontSize: '20px'
      },
    },
    borderColor: 'white',
    nodeWidth: 65
  }],
  tooltip: {
    enabled: false
  }
});

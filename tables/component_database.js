const db_data = [
  ["001", "2021-09-19/11:43", "GregorDeCillia", "Cancer Types by Year", "OGD_krebs_ext_KREBS_1", "NULL", "175 x 3"],
  ["002", "2021-09-19/14:17", "bernhard-da", "Household Forecast", "OGD_f1741_HH_Proj_1", "Timeseries", "NULL"],
  ["003", "2021-09-20/06:34", "GregorDeCillia", "Structure of Earnings", "OGD_veste301_Veste301_1", "Barplot", "122 x 7"],
  ["004", "2021-09-21/13:29", "alexkowa", "Tourism: Correlations", "detouextregsai", "Scatterplot", "92 x 9"]
]

$(document).ready(function() {
  table_db = $('#component_database').DataTable({
    data: db_data,
    ordering: false,
    dom: 't',
    columns: [
      { title: "Key" },
      { title: "Created at" },
      { title: "Creator",
        render: function(data, type) {
          if (type === 'display') {
            return `<a href='https://www.github.com/${data}' target='_blank'>${data}</a>`
          }
          return data;
        }},
      { title: "Custom Label"},
      { title: "Data Source",
        render: function(data, type) {
          if (type == 'display') {
            let prefix = data.substring(0, 3) === 'OGD' ?
              'https://data.statistik.gv.at/web/meta.jsp?dataset=' :
              'https://statcube.at/statcube/openinfopage?id='
            return `<a href='${prefix + data}' target='_blank'>${data}</a>`
          }
          return data;
        }
      },
      { title: "Graph", 
        render: function(data, type) {
          if (type === 'display' & data == 'NULL') {
            return '<p style="color: red; font-weight: bold; margin: 0">NULL</p>';
          } 
          return data;
        }
      },
      { title: "Table", 
        render: function(data, type) {
          if (type === 'display' & data == 'NULL') {
            return '<p style="font-weight: bold; color: red; margin: 0">NULL</p>';
          }
          return data;
        }
      }
    ]
  })
  setTimeout(
    _ => { table_db.columns.adjust() },
    200
  )
})

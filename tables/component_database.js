const db_data = [
  ["001", "2021-09-19/11:43", "decill", "Cancer Types", "OGD_krebs_ext_KREBS_1", "Bar", "273 x 4"],
  ["002", "2021-09-19/11:43", "meindl", "Household stuctures", "OGD_f1741_HH_Proj_1", "Timeseries", "NULL"],
  ["003", "2021-09-19/11:43", "decill", "Economic trends", "OGD_konjunkturmonitor...", "NULL", "15 x 5"],
  ["004", "2021-09-19/11:43", "kowa", "Correlations", "statcube", "Scatter", "92 x 9"]
]

$(document).ready(function() {
  table_db = $('#component_database').DataTable({
    data: db_data,
    ordering: false,
    dom: 't',
    columns: [
      { title: "PK" },
      { title: "Created at"},
      { title: "Creator"},
      { title: "Custom Label"},
      { title: "Data Source"},
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

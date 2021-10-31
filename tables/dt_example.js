var dataSet = [
  [ "Tiger Nixon", "System Architect", "Edinburgh", "5421", "2011/04/25", "320800" ],
  [ "Garrett Winters", "Accountant", "Tokyo", "8422", "2011/07/25", "170750" ],
  [ "Ashton Cox", "Junior Technical Author", "San Francisco", "1562", "2009/01/12", "86000" ],
  [ "Cedric Kelly", "Senior Javascript Developer", "Edinburgh", "6224", "2012/03/29", "433060" ],
  [ "Airi Satou", "Accountant", "Tokyo", "5407", "2008/11/28", "162700" ],
  [ "Brielle Williamson", "Integration Specialist", "New York", "4804", "2012/12/02", "372000" ],
  [ "Herrod Chandler", "Sales Assistant", "San Francisco", "9608", "2012/08/06", "137500" ],
  [ "Rhona Davidson", "Integration Specialist", "Tokyo", "6200", "2010/10/14", "327900" ],
  [ "Colleen Hurst", "Javascript Developer", "San Francisco", "2360", "2009/09/15", "205500" ],
  [ "Sonya Frost", "Software Engineer", "Edinburgh", "1667", "2008/12/13", "103600" ],
  [ "Jena Gaines", "Office Manager", "London", "3814", "2008/12/19", "90560" ],
  [ "Quinn Flynn", "Support Lead", "Edinburgh", "9497", "2013/03/03", "342000" ],
  [ "Charde Marshall", "Regional Director", "San Francisco", "6741", "2008/10/16", "470600" ],
  [ "Haley Kennedy", "Senior Marketing Designer", "London", "3597", "2012/12/18", "313500" ],
  [ "Tatyana Fitzpatrick", "Regional Director", "London", "1965", "2010/03/17", "385750" ],
  [ "Michael Silva", "Marketing Designer", "London", "1581", "2012/11/27", "198500" ],
  [ "Paul Byrd", "Chief Financial Officer (CFO)", "New York", "3059", "2010/06/09", "725000" ],
  [ "Gloria Little", "Systems Administrator", "New York", "1721", "2009/04/10", "237500" ],
  [ "Bradley Greer", "Software Engineer", "London", "2558", "2012/10/13", "132000" ],
  [ "Dai Rios", "Personnel Lead", "Edinburgh", "2290", "2012/09/26", "217500" ],
  [ "Jenette Caldwell", "Development Lead", "New York", "1937", "2011/09/03", "345000" ],
  [ "Yuri Berry", "Chief Marketing Officer (CMO)", "New York", "6154", "2009/06/25", "675000" ],
  [ "Caesar Vance", "Pre-Sales Support", "New York", "8330", "2011/12/12", "106450" ],
  [ "Doris Wilder", "Sales Assistant", "Sydney", "3023", "2010/09/20", "85600" ],
  [ "Angelica Ramos", "Chief Executive Officer (CEO)", "London", "5797", "2009/10/09", "1200000" ],
  [ "Gavin Joyce", "Developer", "Edinburgh", "8822", "2010/12/22", "92575" ],
  [ "Jennifer Chang", "Regional Director", "Singapore", "9239", "2010/11/14", "357650" ],
  [ "Brenden Wagner", "Software Engineer", "San Francisco", "1314", "2011/06/07", "206850" ],
  [ "Fiona Green", "Chief Operating Officer (COO)", "San Francisco", "2947", "2010/03/11", "850000" ],
  [ "Shou Itou", "Regional Marketing", "Tokyo", "8899", "2011/08/14", "163000" ],
  [ "Michelle House", "Integration Specialist", "Sydney", "2769", "2011/06/02", "95400" ],
  [ "Suki Burks", "Developer", "London", "6832", "2009/10/22", "114500" ],
  [ "Prescott Bartlett", "Technical Author", "London", "3606", "2011/05/07", "145000" ],
  [ "Gavin Cortez", "Team Leader", "San Francisco", "2860", "2008/10/26", "235500" ],
  [ "Martena Mccray", "Post-Sales support", "Edinburgh", "8240", "2011/03/09", "324050" ],
  [ "Unity Butler", "Marketing Designer", "San Francisco", "5384", "2009/12/09", "85675" ]
];


$(document).ready(function() {
    dt_example = $('#dt_example').DataTable({
      "lengthMenu": [[5, 10], [5, 10]],
      data: dataSet,
      columns: [
        { title: "Name" },
        { title: "Position",
          render: function(data, type) {
            if (type === 'display') {
              let link = 'https://www.github.com/statistikat/STATcubeR'
                return `<a target="_blank" style="color: #0467a9" 
                  href="${link}">${data}</a>`;
            }
            return data;
          }
        },
        { 
          title: "Office",
          className: 'f32',
          render: function(data, type) {
            if (type === 'display') {
              let country = '';
              switch (data) {
                case 'Argentina':
                  country = 'ar';
                  break;
                case 'Edinburgh':
                  country = 'gb-sct';
                  break;
                case 'London':
                  country = 'gb-eng';
                  break;
                case 'New York':
                  case 'San Francisco':
                country = 'us';
                  break;
                case 'Sydney':
                  country = 'au';
                  break;
                case 'Tokyo':
                  country = 'jp';
                  break;
                case 'Singapore':
                  country = 'sg';
                  break;
              }

              flag = `<img style="margin: 0; vertical-align: middle;"
                src="https://flagcdn.com/24x18/${country}.png"
                width="24" height="18"> ${data}`

              return flag;
            }

            return data;
          }
        },
        { title: "Progress" ,
          render: function(data, type, row, meta) {
            return type === 'display' ?
              '<progress value="' + data + '" max="9999"></progress>' :
              data;
          }
        },
        { title: "Start date", visible: false },
        { title: "Salary",
          width: '20px',
          render: function(data, type) {
            data = data.replace(',', '').replace('$', '');
            var number = $.fn.dataTable.render.number( ',', '.', 0, '$'). display(data);
            if (type === 'display') {
              let color = 'green';
              if (data < 250000) {
                color = 'hsl(0deg 90% 40%)';
              }
              else if (data < 500000) {
                color = 'hsl(250deg 100% 32%)';
              }
              return '<span style="color:' + color + '">' + number + '</span>';
            }
            return number;
          } 
        }
      ],
      columnDefs: [{
        targets: -1,
        className: 'dt-body-right'
      }]
    });
});
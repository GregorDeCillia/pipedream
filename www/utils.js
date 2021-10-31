let overlay_visible = 0;

document.addEventListener('keydown', e => {
  if (e.key == 'm') {
    overlay_visible = 1- overlay_visible;
    document.querySelector('.custom-overlay').style.opacity=overlay_visible;
    if (overlay_visible) {
      let indexh = Reveal.getState().indexh;
      images = ["7417579/pexels-photo-7417579.jpeg", "268854/pexels-photo-268854.jpeg",
        "45848/kumamoto-japan-aso-cloud-45848.jpeg", "4203587/pexels-photo-4203587.jpeg",
        "2837863/pexels-photo-2837863.jpeg"
      ]
      let image = images[indexh];
      let uri = `https://images.pexels.com/photos/${image}?auto=compress&h=600&w=1000&fit=crop`
      document.querySelector('.custom-overlay').style["background-image"] = `url('${uri}')`
    }
  }
});

let linkmap = {
  'Statistics Austria': 'https://www.statistik.at',
  'shiny': 'https://shiny.rstudio.com/',
  'shiny app': 'https://shiny.rstudio.com/',
  'R': 'https://www.r-project.org/',
  'plumber': 'https://www.rplumber.io/',
  'highcharts.js': 'https://www.highcharts.com/',
  'highcharter': 'https://jkunst.com/highcharter/',
  'datatables.js': 'https://datatables.net/',
  'RStudio Connect': 'https://www.rstudio.com/products/connect/',
  'RSConnect': 'https://www.rstudio.com/products/connect/',
  'STATcube': 'https://www.statcube.at/',
  'Open Government Data': 'https://data.statistik.gv.at',
  'STATcubeR': 'statistikat.github.io/STATcubeR',
  'Open Data Portal': 'https://data.statistik.gv.at',
  'json API request': 'https://docs.wingarc.com.au/superstar/9.10/open-data-api/use-superweb2-to-build-api-queries',
  'shiny fileInput': 'https://shiny.rstudio.com/reference/shiny/1.6.0/fileInput.html',
  'binary': 'https://www.rdocumentation.org/packages/base/versions/3.6.2/topics/serialize',
  'httr': 'https://httr.r-lib.org/'
}

function setLinks() {
  document.querySelectorAll('a').forEach(link => {
    if(linkmap.hasOwnProperty(link.innerText)) {
      link.setAttribute('href', linkmap[link.innerText]);
      link.setAttribute('target', '_blank');
    }
  });
}

setTimeout(setLinks, 400)

# Building a content delivery pipeline for a website in R

Statistics Austria (STAT) is currently working towards the release of a new website.
An important part of it, namely tables and graphs, will be created using a three step R workflow.

1. The first step of the process is the data import.
   For the start, two data sources will be supported: STAT's statistical data base [STATcube](https://www.statcube.at) and the [open government data (OGD) portal of STAT](https://data.statistik.gv.at), which is also used by other open data portals and therefore this part might especially reusable.
   The R package [STATcubeR](https://www.github.com/statistikat/STATcubeR) handles the data import;
   It uses a REST API for STATcube and direct CSV downloads for OGD data. 

2. The next step is creating the interactive contents: graphs and tables.
   For that purpose, R packages were developed which utilize the javascript libraries [datatable.js](https://www.datatables.net) and [highcharts.js](https://www.highcharts.com).
    Both rendering packages use the data format from STATcubeR as an input and create the contents as [html-widgets](https://www.htmlwidgets.org).

3. The last step is to make the content available for the content management system (CMS) where the website articles are written.
   This is done using a [plumber API](https://www.rplumber.io) hosted at rstudio connect.
   The contents are first created on the R server and saved into a database.
   The API then accesses the database based on a content-id and returns javascript code for embedding. 

A graphical user interface was developed to assist non-R users with this process.
The GUI was built in [shiny](https://shiny.rstudio.com) and makes it possible to import and edit data to be fit for tabulation or plotting.
Afterwards, the user can define customized tables and or graphs using in the GUI.
The contents can then be saved and the content id is displayed to the user.
The content id can be copy/pasted to the CMS which performs the embedding under the hood.

Some of the packages involved in this workflow are available as open source and could be quite useful to other organizations in a similar situation. 

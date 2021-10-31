<!-- .slide: id="import" -->
## Data Import

Currently, there are two datasources which are compatible the component builder <span class='app'>app</span>: [STATcube]() and [Open Government Data]()

Both data sources are imported using the open source package [STATcubeR]() which defines a common **interface** for the data sources

```r
# online docs: statistikat.github.io/STATcubeR
remotes::install_github("statistikat/STATcubeR")
```



<!-- .slide: id="ogd" -->
## Open Government Data

The [Open Data Portal]() of Statistics Austria provides a series of datasets following the **open data** principles

About **300 datasets** are compatible with the component builder <span class='app'>app</span> which provides a coverage of about **95%**

OGD data can be imported from the <span class='app'>app</span> by choosing one of the datasets from a selection menu

<small>
  More information can be found at <a>https://statistikat.github.io/STATcubeR/articles/od_table.html</a>
</small>



<!-- .slide: id="statcube" -->
## STATcube

STATcube allows you to **generate** custom tables from databases and **export** them in different formats

One export option, the "[json API request]()", is compatible with the <span class='app'>component builder app</span>. The exported json file can be provided to the app via a [shiny fileInput]()

The app then fetches data from the **STATcube REST API**

<small>
  More information can be found at <a>https://statistikat.github.io/STATcubeR/articles/sc_table.html</a>
</small>


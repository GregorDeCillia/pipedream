# PDF version of the slides

Source code for a printable pdf version of the slides. 
Based on the Rmarkdown format `slideSTAT`, which is also used in other presentations of Statistics Austria such as https://r-project.ro/conference2020/presentations/Meindl_devops_uros2020.pdf

The rendered pdf will be added here when the slides are finished

TODO: 
- [x] add links
- [x] add graphs
- [x] add tables
- [x] adapt formulations

## How to build

1. take screenshots from organization_charts.html
2. knit the Rmd file with rmarkdown::render("presentation.Rmd")

The second step requires the `slideSTAT` package

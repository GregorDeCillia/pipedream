<!-- .slide: id="httr" -->
## Import: Database to CMS

Single items can be requested with <span class="http">/GET table</span> and <span class="http">/GET graph</span>. They return a **rendered** version of a component for the <span class='cms'>CMS</span>

The json payload of the response contains a **&lt;div>** or **&lt;table>** tag and a **&lt;script>** tag which define the component

```cpp
# get the component from the api
response <- httr::GET("rsconnect.local/component-api/graph?PK=001")
payload  <- httr::content(response)

# fill a html template
fill_table_template(
  script    = payload['script'],   # pass a javascript string
  container = payload['container'] # pass container (<div>) as html string
)
```




<!-- .slide: id="template" -->
## Template example

The **template** defines where the component (graph) is inserted and loads all necessary **js/css dependencies**

```language-html [1-13|6-13|3]
<head>
  <script src="highcharts.js"/>
  <script src="rsconnect.local/component-api/utils.js"/>
</head>

<body>
  <h1>Graph template</h1>
  <!-- define placeholder container for the graph -->
  ${container}

  <!-- fill container using a script tag-->
  ${script}
</body>
```

**utils.js** is a helper package that defines functions for **layouting** of components, **formatting** tooltips, etc.
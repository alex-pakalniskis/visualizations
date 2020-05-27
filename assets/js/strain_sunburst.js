Plotly.d3.csv('https://raw.githubusercontent.com/alex-pakalniskis/visualizations/master/assets/csv/sunburst_df_no_index.csv', function(err, rows){
  function unpack(rows, key) {
  return rows.map(function(row) {return row[key]})
}

  var data = [{
        type: "sunburst",
        maxdepth: 2,
        ids: unpack(rows, 'ids'),
        labels: unpack(rows, 'labels'),
        parents: unpack(rows, 'parent'),
        marker: {
          "colors": unpack(rows, "color")
        },
        textposition: 'inside',
        insidetextorientation: 'radial'
  }]

  var layout = {margin: {l: 0, r: 0, b: 0, t:0}}

  Plotly.newPlot('myDiv', data, layout)
})

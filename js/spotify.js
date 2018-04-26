<script type="text/javascript">
var w = 500,
	 h = 500
var convertedData = {}

// load csv data
d3.csv("data/top_spotify_tracks_2017.csv", function(data) {
   var row
   var newArray = []

   // create remapped array that will work with radarChart.js
   for(i=0;i<data.length;i++){
      entry = [
         {
            title: data[i].name,
            artist: data[i].artists,
            axis: "danceability",
            // normalize values to scale from 0 to 1
            value: +data[i].danceability/d3.max(data, function(d) {
               return +d.danceability
            })
         },
         {
            title: data[i].name,
            artist: data[i].artists,
            axis: "energy",
            // normalize values to scale from 0 to 1
            value: +data[i].energy/d3.max(data, function(d){
               return +d.energy
            })
         },
         {
            title: data[i].name,
            artist: data[i].artists,
            axis: "key",
            // normalize values to scale from 0 to 1
            value: +data[i].key/d3.max(data, function(d){
               return +d.key
            })
         },
         {
            title: data[i].name,
            artist: data[i].artists,
            axis: "loudness",
            // normalize values to scale from 0 to 1
            // loudness is negative, convert to positive
            value: -data[i].loudness/d3.max(data, function(d){
               return -d.loudness
            })
         },
         {
            title: data[i].name,
            artist: data[i].artists,
            axis: "mode",
            // normalize values to scale from 0 to 1
            value: +data[i].mode/d3.max(data, function(d){
               return +d.mode
            })
         },
         {
            title: data[i].name,
            artist: data[i].artists,
            axis: "speechiness",
            // normalize values to scale from 0 to 1
            value: +data[i].speechiness/d3.max(data, function(d){
               return +d.speechiness
            })
         },
         {
            title: data[i].name,
            artist: data[i].artists,
            axis: "acousticness",
            // normalize values to scale from 0 to 1
            value: +data[i].acousticness/d3.max(data, function(d){
               return +d.acousticness
            })
         },
         {
            title: data[i].name,
            artist: data[i].artists,
            axis: "instrumentalness",
            // normalize values to scale from 0 to 1
            value: +data[i].instrumentalness/d3.max(data, function(d){
               return +d.instrumentalness
            })
         },
         {
            title: data[i].name,
            artist: data[i].artists,
            axis: "liveness",
            // normalize values to scale from 0 to 1
            value: +data[i].liveness/d3.max(data, function(d){
               return +d.liveness
            })
         },
         {
            title: data[i].name,
            artist: data[i].artists,
            axis: "valence",
            // normalize values to scale from 0 to 1
            value: +data[i].valence/d3.max(data, function(d){
               return +d.valence
            })
         },
         {
            title: data[i].name,
            artist: data[i].artists,
            axis: "tempo",
            // normalize values to scale from 0 to 1
            value: +data[i].tempo/d3.max(data, function(d) {
               return +d.tempo
            })
         },
         {
            title: data[i].name,
            artist: data[i].artists,
            axis: "duration_ms",
            // normalize values to scale from 0 to 1
            value: +data[i].duration_ms/d3.max(data, function(d) {
               return +d.duration_ms
            })
         },
      ]
      newArray.push(entry)
   }
   convertedData = newArray

   // radar chart design created by Nadieh Bremer - visualcinnamon.com
   var margin = {top: 100, right: 100, bottom: 100, left: 100},
   width = Math.min(700, window.innerWidth - 10) - margin.left - margin.right,
   height = Math.min(width, window.innerHeight
      - margin.top - margin.bottom - 20)

   // chart setup
   var color = d3.scale.ordinal()
   .range(["#EDC951","#CC333F","#00A0B0"])

   var radarChartOptions = {
      w: width,
      h: height,
      margin: margin,
      maxValue: 0.5,
      levels: 5,
      roundStrokes: true,
      color: color
   }

   // draw the chart
   RadarChart(".radarChart", convertedData, radarChartOptions)
}) // end d3.csv()

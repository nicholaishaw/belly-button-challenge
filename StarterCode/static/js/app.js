//Tutor Simon Rennocks assisted with the development of the logic for the code and provided guidance in syntax development

//URL variable created so it is easier to include the link in the functions below
let url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json"

//This function will initialize the graphs, dropdown box, and the metadata on the webpage
function init (){
    d3.json(url).then(function(data){
        let dropdownbox = d3.select("#selDataset")
        let names = data.names
        for (let i = 0; i<names.length; i++){
            dropdownbox.append("option").text(names[i]).property("value", names[i])
        }
       buildcharts(names[0])
       buildmetadata(names[0]) 
    })
}

//This allows all the charts and the metadata to change based on the new sample that is selected by the user from the dropdown box
function optionChanged(newsample){
    buildcharts(newsample)
    buildmetadata(newsample)
}

//This function will build two charts based off of the sample id in the metadata dropdown box selected by the user
function buildcharts(sampleid){

    //Get the data from the 'samples.json' file and then execute the function to build the charts 
    d3.json(url).then(function(data){
        console.log(data)

        //This puts the samples obtained from the json data file into a variable for ease of filtering
        let samples = data.samples

        //The filtering allows the samples to only show the element that was provided by the user (the sampleid)
        let sample = samples.filter(element => element.id == sampleid)[0]
        console.log(sample)

        //Chart creation for chart 1. This is a horizontal bar chart of the top 10 OTU samples and their counts in the sample
        let trace1 = {
            x: sample.sample_values.slice(0, 10).reverse(),
            y: sample.otu_ids.slice(0, 10).map(element=>"OTU " + element).reverse(),
            text: sample.otu_labels.slice(0, 10).reverse(),
            type: "bar",
            orientation: "h"
        }
        let bar_data = [trace1]
        let layout = {}
        Plotly.newPlot("bar", bar_data, layout)

        //Chart creation for chart 2 that displays each OTU sample and it's frequency in the sample
        let trace2 = {
            x: sample.otu_ids,
            y: sample.sample_values,
            text: sample.otu_labels,
            mode: "markers",
            marker: {
                size: sample.sample_values,
                color: sample.otu_ids,
                colorscale: "Earth"
            }
        }
        let bubble_layout = {}
        Plotly.newPlot("bubble", [trace2], bubble_layout)
    })
}

//This will build the metadata (the demographic information) of the individual that was sampled
function buildmetadata(sampleid){
    d3.json(url).then(function(data){
        console.log(data)
        let metadata = data.metadata
        let filtered_metadata = metadata.filter(element => element.id == sampleid)[0]
        let panel = d3.select("#sample-metadata")
        panel.html("")
        for (key in filtered_metadata){
            panel.append("p").text(key + ": " + filtered_metadata[key])
        }
    })
}
init ()
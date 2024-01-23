# Biodiversity Analysis Using Javascript

A recent (fictional) study was completed to analyze the amount of microbal organisms in an individual's belly button. This dataset revealed that a small handful of microbial species (also called operational taxonomic units, or OTUs, in the study) were present in more than 70% of people, while the rest were relatively rare. My job as an analyst on this fake study was to create charts and interactive graphs using javascript to show the amount of microbal organisms in each study participant's belly button. Specifically, I used the D3 library to obtain the json data from: https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json. After the data were scraped, we used plotly to plot the data and inserted the code into the HTML index.


# Javascript Process

* I used the D3 library to read in samples.json from the URL source.

* I displayed the sample metadata, i.e., an individual's demographic information.
  
![image](https://github.com/nicholaishaw/belly-button-challenge/assets/135463220/7013d4af-d120-4b24-9fa4-c33901cace6b)

**Figure 1.** Sample metadata displaying the demographic information, ID, and belly button type. Participant 940 was selected as an exmaple. 

* I created a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual.

     * I used the sample_values column as the values for the bar chart.

     * I used the otu_ids column as the labels for the bar chart.

     * I used the otu_labels column as the hovertext for the chart.
  
![image](https://github.com/nicholaishaw/belly-button-challenge/assets/135463220/c47c51f3-b830-4a06-9fce-eab95cbaa1a8)

**Figure 2.** Interactive horizontal bar chart of the amount of bacteria smaples found in participant 940's belly button.

* I created a bubble chart that displays each sample.

    * I used otu_ids for the x values.

    * I used sample_values for the y values.

    * I used sample_values for the marker size.

    * I used otu_ids for the marker colors.

    * I used otu_labels for the text values.

![image](https://github.com/nicholaishaw/belly-button-challenge/assets/135463220/dec076ac-37ae-435f-b71b-9a4c25b3d499)

**Figure 3.** Interactive bubble chart of the amount of each bacteria found in participant 940's belly button.

Display each key-value pair from the metadata JSON object somewhere on the page.

Update all the plots when a new sample is selected. Additionally, you are welcome to create any layout that you would like for your dashboard. An example dashboard is shown as follows:

Deploy your app to a free static page hosting service, such as GitHub Pages. Submit the links to your deployment and your GitHub repo. Ensure that your repository has regular commits and a thorough README.md file

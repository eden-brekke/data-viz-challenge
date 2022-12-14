import React from "react";
import './Footer.css';

export default function Landing(){
  return (
    <>
      <h3 className="landing-title"> Hello and Welcome to the Analysis of Opioid Use Disorder Data</h3>
      <p>The goal of the application is to report Opioid Use Disorder data generated by the <i>Global Burden of Disease Collaborative Network</i> within the <i>Institute of Health Metrics and Evaluation.</i></p>
      <p>Within the Data Set you can find data for 190+ Locations. For each location both sexes were accounted for and separated into their own data sets, though you can view combined stats as well. In this data set the Opioid Use Disorder was reported using the <i>Mean Death Rate</i> which is the number of deaths per 100,000 people.</p>
      <p>Opioid Use became a pain treatment plan back in the early 1860s. However, due to it's addictive and mental effects on humans, it quickly shifted from being just a pain medicine, to being a trading resource, a cause for conflict, and an addictive substance, leading to injury and sometimes death. This makes opioids, and understanding how they effect our populations, a topic that we would benefit knowing more about.</p> 
      <p> With all of this in mind the main question we're trying to tackle is: <i><b>“What population is most affected by opioid use disorders?”</b></i> with information comes power. This power gives us an idea of where our resources need to be in order to help aid society in their trials and lower the opioid use among populations.</p>
      <p className="ending-statement">Please Navigate through the Links at the top:
      <br></br><b><i>Highest Mortality Rates by Year</i></b>, to generate the top limit of the Graph showing which populations are most affected throughout the years.
      <br></br><b><i>Lowest Mortality Rates by Year</i></b>, to generate the bottom limit of the Graph showing which populations are least affected throughout the years.
      <br></br><b><i>All Mortality Rates Over the Years</i></b>, in order to generate a comparison between location.
      <br></br><b><i>Mortality Rates Over the Years by Location</i></b>, in order to generate a comparison between biological sex.
        </p>
    </>
  )
}
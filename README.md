# Data Visualization Coding Challenge - Instructions

[Netlify Deployed Site](https://eden-data-viz-challenge.netlify.app/)

## The project in my own words

The objective of this project is to help answer the question **“What population is most affected by opioid use disorders?”**  

Important aspects for me to hit are:  

- **Understanding of code and adherence to best practices:** Is the code structured in a way that makes it easy to read and maintain? This is your opportunity to display your understanding and skill with the JavaScript language and with program design.
  - The way that I understand this is that I need to write clean, readable and **reusable** code. Code that someone can come in, read it, know what's going on and then scale up the app as needed.
- **Visual understanding:** Is the data being presented in a way that is visually meaningful? Does it answer the question posed above?
  - The way I interpret this is that I need to choose the correct graph formats as well as correct axes to show.
  - I chose to show two bar charts, and two line charts to tell my story, as well as giving my observations and analysis of each chart.
- **Visual appeal:** Do the visual elements add to the story or detract from it?
  - I chose to learn how to use the D3 visualization library in order to tackle this. I chose D3 because it appears to be a very powerful tool, that allows for infinite customization. The caveat to that is, you have to build the chart from the ground up. I thought that that suited the notion of working towards "Not detracting" from the data!
  - Make the app pretty! But Also make sure that whatever you do to make it pretty, the chart and the data are the main focus. Don't add styling that will distract.

## References

[Horizontal Bar Chart](https://observablehq.com/@d3/horizontal-bar-chart?collection=@d3/charts)  
[Vertical Bar Chart](https://observablehq.com/@d3/bar-chart?collection=@d3/charts)  
[Multiseries Line Graph](https://observablehq.com/@d3/multi-line-chart?collection=@d3/charts)  
[General D3 Questions](https://observablehq.com/explore)  
[Loading Animation](https://codepen.io/krysmalskipl/pen/xxWNyaq)  
[Rainbow Button](https://codepen.io/astitva2009/embed/ExQeNxb?height=441&theme-id=dark&default-tab=result&slug-hash=ExQeNxb&user=astitva2009&name=cp_embed_51#css-box)  
[Rotate Axis Labels](https://stackoverflow.com/questions/20947488/d3-grouped-bar-chart-how-to-rotate-the-text-of-x-axis-ticks)  

## Assignment as Described by IHME

Below are the specifications that were laid out for the application by GIG at IHME

## Objective

Create a data visualization that helps answer the question, **“What population is most affected by opioid use disorders?”**

You can choose to either start from scratch or build off the provided starter project in this repo.  
Either approach will be weighted equally when your exercise is reviewed.  
If you choose to use the starter project, you may modify any of the files provided as you see fit, or choose to only use some of them.  
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Your application should include some interactivity for the user. We leave it to you to decide how best to visualize the data.

You may use any libraries or frameworks you find helpful. Here are a few suggestions for data visualization libraries:
- [Vega-Lite](https://vega.github.io/vega-lite)
- [Plotly.js](https://plot.ly/javascript)
- [D3](https://d3js.org/)
- [Victory](https://github.com/FormidableLabs/victory)
- [Highcharts](https://github.com/highcharts/highcharts)

## Data API

For your convenience, we have created a REST API to fetch Opioid Use Death rates (Deaths per 100,000 people) for use in this data visualization challenge, docs can be found [here](https://vizhub.healthdata.org/data-viz-challenge-api/). A csv with all available data can also be found in the `data` directory. Client-side functions for interacting with the API have been created in `src/api.js`.

## What we're looking for

- **Understanding of code and adherence to best practices:** Is the code structured in a way that makes it easy to read and maintain? This is your opportunity to display your understanding and skill with the JavaScript language and with program design.
- **Visual understanding:** Is the data being presented in a way that is visually meaningful? Does it answer the question posed above?
- **Visual appeal:** Do the visual elements add to the story or detract from it?  

## Once you're done

1. Make the source code available on GitHub.
1. Host the final visualization on [GitHub Pages](https://pages.github.com/), [Heroku](https://www.heroku.com/), [CodeSandbox](https://codesandbox.io/), or any other free hosting service.
1. Send us links to both the source code repository and the live deployment.

## Software requirements

For the provided starter project, **you’ll need to have Node 14.0.0 or later version on your local development machine**. 
We recommend using the latest LTS version. You can use [nvm](https://github.com/creationix/nvm#installation) (macOS/Linux) or [nvm-windows](https://github.com/coreybutler/nvm-windows#node-version-manager-nvm-for-windows) to switch Node versions between different projects.

## Getting started

### Installing dependencies

```bash
npm install
```

### Stating the application

```bash
npm run start
```

Then open [http://localhost:3000](http://localhost:3000) to view it in your browser.
The page will automatically reload when you make changes.

## Browser compatibility

This starter project uses modern JavaScript features. It should work as expected in modern browsers (tested in current versions of Chrome, Firefox, and Safari), but it may not work in Internet Explorer, Edge, and older browser versions.

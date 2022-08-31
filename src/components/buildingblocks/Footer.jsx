import React from "react";
import './Footer.css';

export default function Footer() {
  return (
    <>
      <div id='footer'>
        <a className="dev-link" href="http://github.com/eden-brekke">Developed By Eden Brekke</a>
        <div className="citation-info">
          <div className='cite-text'>
            <p>Citation Information: </p>
            <p className='cite'> GBD Results tool: Use the following to cite data included in this download: Global Burden of Disease Collaborative Network. Global Burden of Disease Study 2017 (GBD 2017) Results.Seattle, United States: Institute for Health Metrics and Evaluation (IHME), 2018.</p>
          </div>
          <div className="cite-links">
          <a className="footer-link" href="http://ghdx.healthdata.org/gbd-results-tool.">GBD Results Tool</a>
          <a className="footer-link" href="http://ghdx.healthdata.org/gbd-results-tool?params=gbd-api-2017-permalink/c12b65baf872c661f4640bb583320b4e">Opioid use Disorder data</a>
          </div>
        </div>
      </div>
    </>
  )
}
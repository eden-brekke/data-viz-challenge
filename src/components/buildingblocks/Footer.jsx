import React from "react";
import './Footer.css';

export default function Footer({cite}){
  return (
    <>
      <div id='footer'>
        <a id="footlink" href="http://github.com/eden-brekke">Developed By Eden</a>
        <p id='cite'> {cite.citation}</p>
      </div>
    </>
  )
}
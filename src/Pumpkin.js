import React from 'react';
import './App.css';

class Pumpkin extends React.Component {

  handlePumpkin=()=>{

  var smileyPumpkinLink="https://i.dlpng.com/static/png/67_preview.png";

  let laughSound = new Audio("http://soundbible.com/mp3/Bats_in_Cave-Mike_Koenig-1902240953.mp3");

  laughSound.play();

 document.getElementById("#pumpkin").attr("src",smileyPumpkinLink).fadeOut("slow");

                  }

   render() {
        return (
          <div className="container center">
  <img className="row" id="pumpkin" onClick={this.handlePumpkin}src="https://westmorelandberryfarm.com/wp-content/uploads/2016/04/Pumpkin-Image-23.png"/>
</div>
 );
    }}

export default Pumpkin;

import React from 'react';
import './App.css';
import HButton from './HButton'

class Mixer extends React.Component{
state={
  displayName:''
}
changeDisplayName=(name)=>{
  this.setState({
    displayName:name
  })
}
render(){
    return <div id="drum-machine" className="container">
    <div className="row">
   <HButton Name="Chord" id="Q" sound="http://soundbible.com/mp3/Suspense%20Chord-SoundBible.com-17769081.mp3" changeName={this.changeDisplayName}/>
    <HButton Name="Dracula" id="W" sound="http://soundbible.com/mp3/I%20Am%20Dracula-SoundBible.com-1840009621.mp3" changeName={this.changeDisplayName}/>
    <HButton Name="Scream" id="E" sound="http://soundbible.com/mp3/Scary%20Scream-SoundBible.com-1115384336.mp3" changeName={this.changeDisplayName}/>
  </div>
   <div className="row">
    <HButton Name="Demon" id="A" sound="http://soundbible.com/mp3/Little_Demon_Girl_Song-KillahChipmunk-2101926733.mp3" changeName={this.changeDisplayName}/>
    <HButton Name="Bells" id="S" sound="http://soundbible.com/mp3/tolling-bell_daniel-simion.mp3" changeName={this.changeDisplayName}/>
    <HButton Name="Laugh" id="D" sound="http://soundbible.com/mp3/Evil%20Laugh%20Cackle-SoundBible.com-957382653.mp3" changeName={this.changeDisplayName}/>
  </div>
   <div className="row">
    <HButton Name="Chains" id="Z" sound="http://soundbible.com/mp3/Spooky%20Chains-SoundBible.com-969772338.mp3" changeName={this.changeDisplayName}/>
    <HButton Name="Creepy" id="X" sound="http://soundbible.com/mp3/creepy-background-daniel_simon.mp3" changeName={this.changeDisplayName}/>
    <HButton Name="Thunder" id="C" sound="http://soundbible.com/mp3/thunder_strike_1-Mike_Koenig-739781745.mp3" changeName={this.changeDisplayName}/>
  </div>
    <div className="row">
      <div id="display"></div>
      </div>
  </div>
  }
}



export default Mixer;

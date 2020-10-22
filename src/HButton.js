import React from 'react';
import './App.css';

class HButton extends React.Component{
state = {
  isPause: false
};
  pauseOrPlay=(event)=>{
     this.setState({
     isPause:!this.state.isPause
    });
     if(!this.state.isPause){
     this.props.playSound(this.props.Name)
    // document.getElementById("#"+this.props.Name+" .clip")[0].play()
     this.props.displayName(this.props.Name)
     }
     else{
       this.props.pauseSound(this.props.Name)
    //  document.getElementById("#"+this.props.Name+" .clip")[0].pause()
      //document.getElementById("#"+this.props.Name+" .clip")[0].currentTime=0;
    }

                }
  songEnded=(event)=>{
     this.props.pauseSound(this.props.Name)
    // event.target.currentTime=0
   //document.getElementById("#"+this.props.Name+" .fa-pause").removeClass("fa-pause").addClass("fa-play")
     this.setState({
     isPause:!this.state.isPause
    });

  }
     render(){
       var faIcon=<i className="fa fa-play"></i>
             if(this.state.isPause){
               faIcon=<i className="fa fa-pause"></i>}
       return <div className="col drum-pad" id={this.props.Name} onClick={this.pauseOrPlay}>{this.props.id}<div>{faIcon}</div><audio id={this.props.id} className="clip" onEnded={this.songEnded} src={this.props.sound}>{this.props.id} </audio></div>
     }
}
export default HButton;

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
     document.getElementById(this.props.id).play();
     this.props.addSound(this.props.Name);
     }
     else{
      this.props.removeSound(this.props.Name)
      document.getElementById(this.props.id).pause();
      document.getElementById(this.props.id).currentTime=0;
    }

                }
  songEnded=(event)=>{
    event.target.currentTime=0
    this.props.removeSound(this.props.Name)
     this.setState({
     isPause:!this.state.isPause
    });

  }
     render(){
       var faIcon=<i className="fa fa-play"></i>
             if(this.state.isPause){
               faIcon=<i className="fa fa-pause"></i>}
       return <div className="col drum-pad" id={this.props.Name} onClick={this.pauseOrPlay}>{this.props.Name}<div>{faIcon}</div><audio id={this.props.id} className="clip" onEnded={this.songEnded} src={this.props.sound}>{this.props.id} </audio></div>
     }
}
export default HButton;

import React, {Component} from 'react';
import * as Tone from 'tone';
const synth = new Tone.Synth().toDestination();
// import "./Shape.css";
class Shape extends Component {
  constructor(props) {
    super(props);

    this.handleSVGClick = this.handleSVGClick.bind(this);
    this.randomizeXPos = this.randomizeXPos.bind(this);
    this.randomizeYPos = this.randomizeYPos.bind(this);
    this.playNote = this.playNote.bind(this);
  }

  handleSVGClick(event) {
    if (this.props.wordsInput !== '') {
      console.log('something about '+this.props.shape+' svgs')
    }
    event.preventDefault();
  }

  randomizeXPos() {
    let imgHeight = 20;
    let x = window.innerHeight - imgHeight;
    x = Math.random() * x;
    return x;
  }
  randomizeYPos() {
    let imgHeight = 20;
    let y = window.innerWidth - imgHeight;
    y = Math.random() * y;
    return y;
  }

  playNote() {
    const notes = ["A", "B", "C", "D", "E", "F", "G"];
    const random = Math.floor(Math.random() * notes.length);
    const key = Math.floor(Math.random() * 4) + 2;
    let note = notes[random] + key; 
    synth.triggerAttackRelease(note, "8n");
  }

  render() {
    var filepath = './'+this.props.shape+'.svg';
    let xPos = this.randomizeXPos();
    let yPos = this.randomizeYPos();
    let size = String(Math.random() * 40) + 'px';
    let delay = String(.3 * parseInt(this.props.counter)) + 's';
    return (
      <div style={{top: xPos, left: yPos}} className="shape" onClick={this.playNote}>
        <img style={{height: size, width: size, animationDelay: delay}} onClick={this.handleSVGClick} src={filepath} alt={filepath}/>
      </div>
    );
  }
}
export default Shape;
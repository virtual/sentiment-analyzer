import React, {Component} from 'react';
// import "./Shape.css";
class Shape extends Component {
  constructor(props) {
    super(props);

    this.handleSVGClick = this.handleSVGClick.bind(this);
    this.randomizeXPos = this.randomizeXPos.bind(this);
    this.randomizeYPos = this.randomizeYPos.bind(this);
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

  render() {
    var filepath = './'+this.props.shape+'.svg';
    let xPos = this.randomizeXPos();
    let yPos = this.randomizeYPos();
    let size = String(Math.random() * 40) + 'px';
    let delay = String(.3 * parseInt(this.props.counter)) + 's';
    return (
      <div className="shape">
        <img style={{height: size, width: size, top: xPos, left: yPos, animationDelay: delay}} onClick={this.handleSVGClick} src={filepath} alt={filepath}/>
      </div>
    );
  }
}
export default Shape;
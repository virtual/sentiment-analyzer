import React, {Component} from 'react';
import "./ArtCanvas.css";
import Shape from './Shape';

class ArtCanvas extends Component {
  // constructor(props) {
  //   super(props);

  //   // this.handleSVGClick = this.handleSVGClick.bind(this);
  //   // this.randomizeSVG = this.randomizeSVG.bind(this);
    
  // }

  // handleSVGClick(event) {
  //   if (this.props.wordsInput !== '') {
  //     console.log('something about svgs')
  //   }
  //   event.preventDefault();
  // }

  // randomizeSVG() {
  //   let imgHeight = 20;
  //   let x = window.innerHeight - imgHeight;
  //   x = Math.random() * x;
  //   return x;
  // }
  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.wordsInput === nextProps.shapeWords) {
      return true;
    } else {
      return false;
    }
  }

  render() {
    const shapes = this.props.allowedShapes;
    let html = [];
    let counter = 0;
    shapes.forEach(element => {
      let count = ((this.props.wordsInput.match(new RegExp(element, "g")) || []).length); //logs 4
      for (var i = 0; i < count; i++){
        html.push(<Shape key={Math.random()} shape={element} counter={counter} />);
        counter++;
      }
    });
    return (
      <div className="artCanvas" style={{backgroundColor: this.props.bgHue}}>
        {html}
      </div>
    );
  }
}
export default ArtCanvas;
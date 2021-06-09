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

  render() {
    const shapes = this.props.allowedShapes;
    let html = [];
    shapes.forEach(element => {
      let count = ((this.props.wordsInput.match(new RegExp(element, "g")) || []).length); //logs 4
      for (var i = 0; i < count; i++){
        html.push(<Shape shape={element} key={Math.random()} />);
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
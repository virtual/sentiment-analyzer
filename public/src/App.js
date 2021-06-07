import React, {Component} from 'react';
import "./App.css";
import FormLyrics from './FormLyrics';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      wordsInput: '',
      sentiment: '0',
      bgHue: 'hsl(161, 17%, 88%)'
    };

    this.onWordsChange = this.onWordsChange.bind(this);
    this.updateSA = this.updateSA.bind(this);
    this.createHSLValue = this.createHSLValue.bind(this);
  }
  
  onWordsChange(event) {
    this.setState({wordsInput: event.target.value});
  }

  createHSLValue(saValue) {
    const val = parseFloat(saValue);
    const valp = Math.abs(val/3);
    let intensity = val !== 0 ? Math.abs(1/(Math.log(Math.abs(val/3)))) : .17;
    if (!(isFinite(intensity))) { intensity = 1; }
    console.log(val, valp, intensity)
    var pct = Math.abs(intensity*100).toFixed(1) + "%";
    if (val > 0) {
      return `hsl(212, ${pct}, 82%)`
    } else if (val < 0) {
      return `hsl(0, ${pct}, 90%)`
    } else {
      return `hsl(161, ${pct}, 88%)`
    }
  }

  updateSA(saValue) {
    let newHSL = this.createHSLValue(saValue);

    this.setState({
      sentiment: saValue,
      bgHue: newHSL
    });
  }

  render() {
    var saPct = (this.state.sentiment*100).toFixed(1) + "%";

    return (
      <div className="App" style={{backgroundColor: this.state.bgHue}}>
        <header className="App-header">
          <h1>Sentiment Analyzer</h1>
        </header>
        <main>
          <FormLyrics 
            wordsInput={this.state.wordsInput}
            sentiment={saPct}
            onWordsChange={this.onWordsChange} 
            updateSA={this.updateSA}
            />
        </main>
      </div>
    );
  }
}

export default App;

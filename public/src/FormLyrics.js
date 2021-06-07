import React, {Component} from 'react';
import "./FormLyrics.css";
const axios = require('axios')
class FormLyrics extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    var saValue = '';
    if (this.props.wordsInput !== '') {
      try {
        axios({
          method: 'post',
          url: '/post',
          data: {
            lyrics: this.props.wordsInput
          }
        })
        .then((response) => {
          console.log(response.data);
          saValue = response.data;
          this.props.updateSA(saValue)
        }, (error) => {
          console.log(error);
        });
      } catch (error) {
        console.error(error)
      }
    }
    event.preventDefault();
  }

  render() {
    return (
      <div className="wordsForm">
        <h2>Sentiment: {this.props.sentiment}</h2>
        <form onSubmit={this.handleSubmit}  action="../../post" method="post">
          <label>
            <small>Words:</small>
            <br/>
            <textarea rows="10" type="text" value={this.props.wordsInput} onChange={this.props.onWordsChange} />
          </label>
          <br/>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
export default FormLyrics;
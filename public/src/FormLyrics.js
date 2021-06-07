import React, {Component} from 'react';
const axios = require('axios')
class FormLyrics extends Component {
  constructor(props) {
    super(props);
    this.state = {
      wordsInput: '',
      sentiment: '0'
    };

    this.handleWordsChange = this.handleWordsChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateSA = this.updateSA.bind(this);
  }

  handleWordsChange(event) {
    this.setState({wordsInput: event.target.value});
  }

  updateSA(saValue) {
    this.setState({sentiment: saValue});
  }

  handleSubmit(event) {
    var saValue = '';
    try {
      // axios.post('/post', {
      //   body: this.state.value
      // })
      axios({
        method: 'post',
        url: '/post',
        data: {
          lyrics: this.state.value
        }
      })
      .then((response) => {
        console.log(response.data);
        saValue = response.data;
        this.updateSA(saValue)
      }, (error) => {
        console.log(error);
      });
    } catch (error) {
      console.error(error)
    }
    // alert('A name was submitted: ' + );
    // console.log(data)
    // this.setState({sentiment: 'arf'+saValue});
    event.preventDefault();
  }

  render() {
    return (
      <div>
        Sentiment: {this.state.sentiment}
        <form onSubmit={this.handleSubmit}  action="../../post" method="post">
          <label>
            <small>Words:</small>
            <br/>
            <textarea rows="10" type="text" value={this.state.wordsInput} onChange={this.handleWordsChange} />
          </label>
          <br/>
          <input type="submit" value="Submit" />
        </form>
        <p>Positive numbers are happy; negative are unhappy</p>
      </div>
    );
  }
}
export default FormLyrics;
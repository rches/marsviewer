import React, { Component } from 'react';
import {DatePicker} from './components/datepicker/datepicker'
import {ImageOut} from './components/imageout/imageout'
import {Input} from 'react-materialize';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      images: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {

    let dateSelected = this.state.value;   

    axios
      .get(
        "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=" +
          dateSelected +
          "&api_key=ey4JvDbo9fpSUq0gD528KBxEIAJ4E2WIAr4cJBTp"
      )
      .then(response =>
        this.setState({ images: response.data.photos[1].img_src })
      );
    event.preventDefault();
  }

  render() {
    console.log(this.state.value);
    return (
      
      <div>
        
          <form className="earthdate" onSubmit={this.handleSubmit}>
            <label>
              Date:
              {/* <Input name='on' type='date' value={this.state.value} onChange={this.handleChange} /> */}
              <input
                type="date"
                value={this.state.value}
                onChange={this.handleChange}
              />
            </label>
            <input type="submit" value="Submit" />
          </form>
        
        <hr />
        
          <img
            className={this.state.images ? "yesImg" : "noImg"}
            src={this.state.images}
          />
        
      </div>
    );
  }
}

export default App;

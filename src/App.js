import React, { Component } from 'react';
import {MediaBox, Card, CardTitle} from 'react-materialize';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: "",
      images: "",
      isLoading: true,

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
        this.setState({ 
          images: response.data.photos[1].img_src, 
          isLoading: false 
        })
      )
      .catch(error => {
        if (error.response) {
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          console.log(error.request);
        } else {
          console.log('Error', error.message);
        }
          console.log(error.config);
      });
    event.preventDefault();
  }

  render() {
    console.log(this.state.value);
    return (
      
      <div>        
          <form className="earthdate" onSubmit={this.handleSubmit}>
          Date:              
               <input
                type="date"
                value={this.state.value}
                onChange={this.handleChange}
              />            
            <input type="submit" value="Submit" />
          </form>
        
        <hr />
        
          <div className='imageDisplay'> {this.state.isLoading?
           <Card 
            className='small' 
            header={
              <CardTitle image='http://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01504/opgs/edr/fcam/FLB_531027377EDR_F0590000FHAZ00337M_.JPG'>
              View Mars!
              </CardTitle>
            }>
            Test out by selecting a date from above!
          </Card>
          : 
          <MediaBox 
          src={this.state.images} 
          caption={this.state.value} 
          width="350"/>}
        
        </div>
        
    </div>);

    
  }
}

export default App;

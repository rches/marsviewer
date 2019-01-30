import React, { Component } from 'react';
import {MediaBox, Card, CardTitle, Col, Row} from 'react-materialize';
import './App.css';
import axios from 'axios';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: "",
      images: "",
      isLoading: true,
      error: false

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
          this.setState({
            images: error.gif
          })
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          console.log(error.request);
        } else {
          this.setState({
            isLoading: false,
            images: "https://www.simplystamps.com/media/catalog/product/E/M/EMOJI_11.png"
          })
          console.log('Boogers', error.message);
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
          <Row>
          <Col  s={2}>
          Date:
          </Col> 
          <Col  s={10}>            
               <input
                type="date"
                value={this.state.value}
                onChange={this.handleChange}
              />
              </Col> 
              </Row> 

            <input type="submit" value="Submit" />
          </form>
        
        <hr />

        <Col l={1} m={6} s={1} className="container"> {this.state.isLoading?
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
          className="container"/>
          }  
          </Col>
        
  </div>);

    
  }
}

export default App;

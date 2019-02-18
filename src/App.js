import React, { Component } from 'react';
import {Header} from './components/layout/header';
import {Footer} from './components/layout/footer';
import {Images} from './components/layout/images';
import {Grid, Paper, Button, TextField, Typography} from '@material-ui/core';
import './App.css';
import axios from 'axios';


export default class App extends Component {
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
      .catch( error => {
        this.setState({
          images:"https://media.makeameme.org/created/houston-we-have-5acf5f.jpg",
          isLoading: false
        });
        console.log('Houston, we have a problem:', error);
        
      });
    event.preventDefault();
  }

  render() {
    return  (
    <>
        <Header classes="header"/>
        <Typography color='secondary' variant='body1' align='center'>
          Ever wonder what the Curiosity Rover is looking at on a daily basis? Select a date below and see!
        </Typography>
          <Grid container alignContent='space-around'>
            <Grid item xs>
            <form className="earthdate" onSubmit={this.handleSubmit}>
            <TextField
                fullWidth
                id="date"
                type="date"
                defaultValue="2016-10-29"
                value={this.state.value}
                onChange={this.handleChange}
              />

            <Button fullWidth color='secondary' variant="outlined" type="submit">Show me some Mars!</Button>

          </form>
          </Grid>
          </Grid> 
          <Grid container alignContent='space-around'>
<Grid item xs>
<Paper>
<Images className='image-viewer' isLoading={this.state.isLoading} images={this.state.images} in={this.state.isLoading}/>
</Paper>
</Grid>
</Grid>

        <Footer classes="footer" image={this.state.images}/> 
        
    </>
    );
  }
}

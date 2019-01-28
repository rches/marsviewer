import React, { Component } from 'react';
import {MediaBox} from 'react-materialize';

class ImageOut extends React.Component {
    render() {
        return(
            <MediaBox src="https://lorempixel.com/350/350/nature/1" width="350"/>
        )
    }
}

export {ImageOut};
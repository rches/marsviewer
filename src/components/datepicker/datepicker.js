import React, { Component } from 'react';
import {Row, Input} from 'react-materialize';

class DatePicker extends React.Component {
    render(){
        return(
            <div>
            <h3>Select a Date</h3>
            <Row>
            <Input name='on' type='date' onSubmit='' />
            </Row>
            </div>
        );
    }
}

export {DatePicker};
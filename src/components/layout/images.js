import React from 'react';




function Images (props) {

    return (
        <>
        {
        props.isLoading
        ? <img src='http://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01504/opgs/edr/fcam/FLB_531027377EDR_F0590000FHAZ00337M_.JPG' className='image-viewer' alt="Mars from 2016"/>
        : <img src={props.images} className='image-viewer' alt="Mars from the date selected"/>      
        }
        </>
    );
}



export  {Images};
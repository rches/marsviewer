import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

function Footer (props) {
    const {classes} = props;

    return (
        <div className={classes.root}>
        <AppBar position="static" color="primary">
            <Toolbar>
                <Typography variant="h6" color="inherit">
                  Learn More... 
                </Typography>
            </Toolbar>

        </AppBar>

        </div>
    );
}

Footer.propTypes = {
    classes: PropTypes.string.isRequired,
};

export {Footer};
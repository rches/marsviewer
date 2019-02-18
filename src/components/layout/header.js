import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

function Header (props) {
    const {classes} = props;

    return (
        <div className={classes.root}>
        <AppBar position="static" color="primary">
            <Toolbar>
                <Typography variant="h6" color="inherit">
                  Martian Viewer
                </Typography>
            </Toolbar>
        </AppBar>
        </div>
    );
}

Header.propTypes = {
    classes: PropTypes.string.isRequired,
};

export {Header};
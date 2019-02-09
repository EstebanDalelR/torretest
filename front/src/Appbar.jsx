import React, { Component } from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

class Appbar extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <AppBar position="static">
        <Toolbar>
          <Typography variant="p" >
            <a href="https://github.com/EstebanDalelR/torretest" style={{color:"white"}}>View code on github</a>
          </Typography>
        </Toolbar>
      </AppBar>
    );
  }
}

export default Appbar;
import React, { Component } from 'react';

import Chip from '@material-ui/core/Chip';
import FitnessCenterIcon from '@material-ui/icons/FitnessCenter';

class ProfileIcons extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
        <div style={{display: "float"}}>
            <Chip 
            icon={<FitnessCenterIcon />}
            variant="outlined"
            label={this.props.weight}
            />
        </div>
         );
    }
}
 
export default ProfileIcons;
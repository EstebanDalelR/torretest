import React, { Component } from 'react';

import Chip from '@material-ui/core/Chip';
import Tooltip from '@material-ui/core/Tooltip';

import StarIcon from '@material-ui/icons/Star';
import WorkIcon from '@material-ui/icons/Work';
import CheckIcon from "@material-ui/icons/Check"
import SchoolIcon from '@material-ui/icons/School';
import FitnessCenterIcon from '@material-ui/icons/FitnessCenter';

class ProfileIcons extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <div style={{ display: "float" }}>
        <Tooltip title="weight">
          <Chip
            icon={<FitnessCenterIcon />}
            variant="outlined"
            label={Math.floor(this.props.weight)}
          />
        </Tooltip>
        <Tooltip title="recommendations">
          <Chip
            icon={<CheckIcon />}
            variant="outlined"
            label={this.props.recommendations}
          />
        </Tooltip>
        <Tooltip title="jobs">
          <Chip
            icon={<WorkIcon />}
            variant="outlined"
            label={this.props.jobs}
          />
        </Tooltip>
        <Tooltip title="education">
          <Chip
            icon={<SchoolIcon />}
            variant="outlined"
            label={this.props.education}
          />
        </Tooltip>
        <Tooltip title="strengths">
          <Chip
            icon={<StarIcon />}
            variant="outlined"
            label={this.props.strengths}
          />
        </Tooltip>
      </div>
    );
  }
}

export default ProfileIcons;
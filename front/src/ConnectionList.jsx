import React, { Component } from 'react';

import Table from '@material-ui/core/Table';
import TableRow from '@material-ui/core/TableRow';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';

import StarIcon from '@material-ui/icons/Star';
import WorkIcon from '@material-ui/icons/Work';
import SchoolIcon from '@material-ui/icons/School';
import CheckCicleIcon from "@material-ui/icons/CheckCircle"
import FitnessCenterIcon from '@material-ui/icons/FitnessCenter';
import CheckCicleOutlineIcon from "@material-ui/icons/CheckCircleOutline"

class ConnectionList extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  renderRows() {
    return this.props.connections.map((person, index) => {
      return (
        <TableRow key={index}>
          <TableCell>{person.person.name}</TableCell>
          <TableCell align="right">{Math.floor(person.person.weight)}</TableCell>
          <TableCell align="right">{person.person.stats.recommendations}</TableCell>
          <TableCell align="right">{person.person.stats.recommendationsSent}</TableCell>
          <TableCell align="right">?</TableCell>
          <TableCell align="right">?</TableCell>
          <TableCell align="right">?</TableCell>
        </TableRow>
      )
    })
  }

  render() {
    return (
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right" onClick={()=> this.props.sortConnectionsByWeight()}>
              <FitnessCenterIcon />
              Weight
            </TableCell>
            <TableCell align="right">
              <CheckCicleIcon />
              Rec. Rec.
            </TableCell>
            <TableCell align="right">
              <CheckCicleOutlineIcon />
              Rec. Sent
            </TableCell>
            <TableCell align="right">
              <WorkIcon />
              Jobs
            </TableCell>
            <TableCell align="right">
              <SchoolIcon />
              Education
            </TableCell>
            <TableCell align="right">
              <StarIcon />
              Strengths
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {this.renderRows()}
        </TableBody>
      </Table>
    );
  }
}

export default ConnectionList;
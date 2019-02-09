import React, { Component } from 'react';

import Table from '@material-ui/core/Table';
import TableRow from '@material-ui/core/TableRow';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';

class ConnectionList extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  renderRows(){
    return this.props.connections.map(person=>{
      return(
        <TableRow>
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
            <TableCell align="right">
              Weight
            </TableCell>
            <TableCell align="right">
              Rec. Rec.
            </TableCell>
            <TableCell align="right">
              Rec. Sent
            </TableCell>
            <TableCell align="right">
              Jobs
            </TableCell>
            <TableCell align="right">
              Education
            </TableCell>
            <TableCell align="right">
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
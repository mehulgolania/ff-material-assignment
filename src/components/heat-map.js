import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import RiskHeading from './risk-heading';

const useStyles = makeStyles(theme => ({
  root: {
    width: '98%',
    margin: '10px auto 0',
    overflowX: 'auto',
  },
  table: {
    
  },
  th:{
    fontWeight: 'bold'
  },
  tc:{
    border: 0,
    fontWeight: 'bold'
  },
  tableHeadingCell:{
    padding: 0
  },
  greenCell:{
    backgroundColor: "#ddf0d4",
    color: '#3fa365',
  },
  yellowCell: {
    backgroundColor: "#ffff00",
    color: "#000",
  },
  lightRedCell: {
    backgroundColor: "#f9c7c8",
    color: "#cc1915"
  },
  redCell: {
    backgroundColor: "#c67797",
    color: "#fff"
  }
}));

const columns = ['Rare', 'Unlikely', 'Modaerat', 'Likely', 'Almost Certain'];

function HeatMap(){
  const classes = useStyles();

  return(
    <>
      <div className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell className={classes.tc}></TableCell>
              <TableCell colSpan="5" className={classes.tableHeadingCell}>
                <RiskHeading 
                  title="total # of risk ratings"
                  bgColor="#9d73b2"
                />
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell component="th" scope="row" align="right" className={[classes.tc, classes.th]}>Serve</TableCell>
              <TableCell className={[classes.tc, classes.greenCell]} align="center">40</TableCell>
              <TableCell className={[classes.tc, classes.yellowCell]} align="center">50</TableCell>
              <TableCell className={[classes.tc, classes.lightRedCell]} align="center">40</TableCell>
              <TableCell className={[classes.tc, classes.lightRedCell]} align="center">2</TableCell>
              <TableCell className={[classes.tc, classes.redCell]} align="center">3</TableCell>
            </TableRow>

            <TableRow>
              <TableCell component="th" scope="row" align="right" className={[classes.tc, classes.th]}>Major</TableCell>
              <TableCell className={[classes.tc, classes.greenCell]} align="center">60</TableCell>
              <TableCell className={[classes.tc, classes.yellowCell]} align="center">40</TableCell>
              <TableCell className={[classes.tc, classes.yellowCell]} align="center">50</TableCell>
              <TableCell className={[classes.tc, classes.lightRedCell]} align="center">50</TableCell>
              <TableCell className={[classes.tc, classes.lightRedCell]} align="center">3</TableCell>
            </TableRow>

            <TableRow>
              <TableCell component="th" scope="row" align="right" className={[classes.tc, classes.th]}>Moderat</TableCell>
              <TableCell className={[classes.tc, classes.greenCell]} align="center">50</TableCell>
              <TableCell className={[classes.tc, classes.greenCell]} align="center">108</TableCell>
              <TableCell className={[classes.tc, classes.yellowCell]} align="center">150</TableCell>
              <TableCell className={[classes.tc, classes.lightRedCell]} align="center">160</TableCell>
              <TableCell className={[classes.tc, classes.lightRedCell]} align="center">104</TableCell>
            </TableRow>

            <TableRow>
              <TableCell component="th" scope="row" align="right" className={[classes.tc, classes.th]}>Minor</TableCell>
              <TableCell className={[classes.tc, classes.greenCell]} align="center">140</TableCell>
              <TableCell className={[classes.tc, classes.greenCell]} align="center">207</TableCell>
              <TableCell className={[classes.tc, classes.greenCell]} align="center">101</TableCell>
              <TableCell className={[classes.tc, classes.yellowCell]} align="center">90</TableCell>
              <TableCell className={[classes.tc, classes.yellowCell]} align="center">80</TableCell>
            </TableRow>
          
            <TableRow>
              <TableCell component="th" scope="row" align="right" className={[classes.tc, classes.th]}>Insignifican</TableCell>
              <TableCell className={[classes.tc, classes.greenCell]} align="center">200</TableCell>
              <TableCell className={[classes.tc, classes.greenCell]} align="center">404</TableCell>
              <TableCell className={[classes.tc, classes.greenCell]} align="center">106</TableCell>
              <TableCell className={[classes.tc, classes.yellowCell]} align="center">102</TableCell>
              <TableCell className={[classes.tc, classes.yellowCell]} align="center">20</TableCell>
            </TableRow>
          </TableBody>
          <TableRow>
              <TableCell className={classes.tc}></TableCell>
              {columns.map(column => (
                <TableCell key={column} align="center" className={[classes.th, classes.tc]}>{column}</TableCell>
              ))}
            </TableRow>
        </Table>
      </div>
    </>
  );
}

export default HeatMap;
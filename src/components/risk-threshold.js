import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import RiskHeading from './risk-heading';
import Vulenrabilities from './charts/vulnerablities-chat';
import EntitiesChart from './charts/entities-chart';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(3, 2)
  },
  gridItem: {
    flexGrow: 1,
    padding: theme.spacing(1)
  }
}));

function RiskThreshold(){
  const classes = useStyles();

  return(
    <Grid container className={classes.root} spacing={2}>
      <Grid item xs={12} lg={6} className={classes.gridItem}>
        <RiskHeading 
          title="# risk >= Threshold: Top 5 Vulnerabilities"
          bgColor="#3fa8d7"
        />
        <Vulenrabilities />
      </Grid>

      <Grid item xs={12} lg={6} className={classes.gridItem}>
        <RiskHeading 
          title="# risk >= threshold: Top 5 Entities"
          bgColor="#7cba4b"
        />
        <EntitiesChart />
      </Grid>
    </Grid>
  );
}

export default RiskThreshold;
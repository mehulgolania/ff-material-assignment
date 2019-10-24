import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import RiskHeading from './risk-heading';
import RiskChartBreakdown from './charts/risk-chart-breakdown';
import PlanChartBreakdown from './charts/plan-chart-breakdown';
import HeatMap from './heat-map';

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

function RiskBreakdown(){
  const classes = useStyles();

  return(
    <Grid container className={classes.root} spacing={2}>
      <Grid item xs={12} lg={3} className={classes.gridItem}>
        <RiskHeading 
          title="risk rating breakdown"
          bgColor="#7cba4b"
        />
        <RiskChartBreakdown />
      </Grid>

      <Grid item xs={12} lg={6} className={classes.gridItem}>
        <RiskHeading 
          title="risk heat map"
          bgColor="#999"
        />
        <HeatMap />
      </Grid>

      <Grid item xs={12} lg={3} className={classes.gridItem}>
        <RiskHeading 
          title="action plan breakdown"
          bgColor="#3fa8d7"
        />
        <PlanChartBreakdown />
      </Grid>
    </Grid>
  );
}

export default RiskBreakdown;
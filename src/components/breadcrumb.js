import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import PieChartIcon from '@material-ui/icons/PieChart';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(1, 2),
    backgroundColor: '#fbfbfb',
    borderTop: '2px solid #eee',
    borderBottom: '2px solid #eee'
  },
  icon:{
    color: '#fcad50',
    marginRight: 10
  },
  link: {
    color: "#2f79b8",
    textDecoration: 'underline'
  },
  gridDivider:{
    borderRight: "2px solid #eee",
    marginRight: 10
  }
}));

export default function BreadCrumb(){
  const classes = useStyles();

  return(
    <>
      <Grid container 
        direction="row"
        justify="center"
        alignItems="center"
        alignContent="center"
        className={classes.root}
      >
        <Grid item xs={12} sm={6} container
          alignItems="center"
          alignContent="center"
        >
          <Grid item className={classes.gridDivider}>
            <PieChartIcon className={classes.icon} />
          </Grid>
          
          <Grid item>
            <Typography variant="h6">Governance - At a Glance</Typography>
          </Grid>
        </Grid>

        <Grid item xs={12} sm={6} container justify="flex-end">
          <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb">
            <Link href="/" className={classes.link}>Dashboard</Link>
            <Typography color="textPrimary">Governance - At a Glance</Typography>
          </Breadcrumbs>
        </Grid>
      </Grid>
    </>
  );
}
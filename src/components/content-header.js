import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(1),
    borderBottom: "2px solid #eee"
  }
}));

export default function ContentHeader(){
  const classes = useStyles();

  return(
    <>
      <Grid container justify="center" className={classes.root}>
        <Typography variant="h6" component="h6"><i>Powered By</i> <b>Clearwater IRM | Analysis CyberIntelliigence</b><sup><small>TM</small></sup></Typography>
      </Grid>
    </>
  );
}
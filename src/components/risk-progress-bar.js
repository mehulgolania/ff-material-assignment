import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles(theme => ({
  root:{
    flexGrow: 1,
    padding: theme.spacing(1, 2)
  },
  riskBox:{
    flexGrow: 1,
    textAlign: 'center',
    color: '#fcffff',
  },
  riskBoxContainer:{
    padding: theme.spacing(4, 7),
    height: '100%',
    transition: theme.transitions.create('background-color', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    '&:hover': {
      backgroundColor: "#3377b4 !important",
      "& .underLine" : {
        transition: theme.transitions.create('left', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        left: 0
      }
    }
  }
}));

function RiskProgressBar() {
  const classes = useStyles();
  const SimpleSlider = withStyles({
    root: {
      color: '#fff',
      height: 4,
    },
    thumb: {
      display: 'none'
    },
    track: {
      height: 4,
    },
    rail: {
      color: '#fff',
      height: 4,
    },
  })(Slider);

  const TypographyHeading = withStyles({
    root:{
      fontWeight: 'bold',
      marginBottom: 20,
      position: 'relative',
      overflow: "hidden",
      "& .underLine": {
        position : "absolute",
        content: " ",
        bottom: 0,
        left: "-100%",
        width: "100%",
        height: "1px",
        background: "#fff"
      }
    }
  })(Typography);

  function RenderRiskBox(props) {
    return(
      <Grid item className={classes.riskBox} xs={12} md={6} lg={3}>
        <Grid container direction="column" alignContent="center" alignItems="center" justify="center" style={{backgroundColor: props.background}} className={classes.riskBoxContainer}>
          {props.title && <TypographyHeading variant="h6" gutterBottom>{props.title}  <span className="underLine"></span></TypographyHeading>}
          {props.riskPercentage && <TypographyHeading variant="h3" gutterBottom>{props.riskPercentage}</TypographyHeading>}
          {props.riskValue && <TypographyHeading variant="h3" gutterBottom>{props.riskValue}</TypographyHeading>}
          {props.riskDiscription && <TypographyHeading variant="h6" gutterBottom>{props.riskDiscription}</TypographyHeading>}
          {props.riskSlider && 
            <SimpleSlider 
              defaultValue={props.riskSlider}
              min={0}
              max={100}
            />
          }
        </Grid>
      </Grid>
    )
  }
  
  return(
    <>
      <Grid container spacing={2} className={classes.root}>
        <RenderRiskBox 
          title="% Riskes >= Threshold"
          riskPercentage="37.5%"
          riskSlider="37.5"
          background="#3fa8d7"
        />

        <RenderRiskBox 
          title="# Riskes >= Threshold"
          riskValue="391"
          riskDiscription="Average Risk Threshold 12.3"
          background="#7cba4b"
        />

        <RenderRiskBox 
          title="Riskes Analysis progress"
          riskPercentage="87.5%"
          riskSlider="87.5"
          background="#7c509b"
        />

        <RenderRiskBox 
          title="Response Progress for Risks >= Threshold"
          riskPercentage="56.2%"
          riskSlider="56.2"
          background="#757479"
        />
      </Grid>
    </>
  );
}

export default RiskProgressBar;
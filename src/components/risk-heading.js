import React from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

function RiskHeading(props) {
  const RiskHeader = withStyles({
    root:{
      fontWeight: 'bold',
      backgroundColor: props.bgColor,
      padding: '8px 16px',
      color: '#fff',
      textTransform: 'capitalize'
    }
  })(Typography)

  return(
    <>
      <RiskHeader variant="h6">{props.title}</RiskHeader>
    </>
  );
}

export default RiskHeading;

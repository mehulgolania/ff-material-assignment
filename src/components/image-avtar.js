import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import UserAvatar from '../images/user.png';

const useStyles = makeStyles(theme => ({
  bigAvatar: {
    margin: theme.spacing(2, 0),
    width: 38,
    height: 38,
    borderRadius: 100
  }
}));

export default function ImageAvatar() {
  const classes = useStyles();

  return (
    <Grid container justify="center" alignItems="center">
      <Avatar 
        alt="User Avatar" 
        src={UserAvatar}
        className={classes.bigAvatar} 
      />
    </Grid>
  );
}
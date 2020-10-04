import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'inherit',
    '& > *': {
      margin: theme.spacing(0),
      width: theme.spacing(35),
      height: theme.spacing(50),
    },
  },
}));

export default function PaperComp() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper elevation={1} className="text-center" >
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.Lorem Ipsum is simply dummy 
          text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, </p>
      </Paper>
    </div>
  );
}

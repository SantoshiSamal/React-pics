import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import {PaperData} from "./PaperData"
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(2),
      width: theme.spacing(30),
      height: theme.spacing(45),
    },
  },
}))
export default function PaperComp() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
        { PaperData.map((paper)=>(
          <Paper elevation={1} >
              <img 
            className="d-block w-100 "
            src = {paper.imgPath} height ="360"
            alt="pics"
          />
          </Paper>
        ))}
    </div>
  );
}
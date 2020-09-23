import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  appBar: {
    top: 'auto',
    bottom: 0,
    backgroundColor: "red",
  },
  title: {
    flexGrow: 1,
    display: "flex",
    flexDirection: "row",
    textAlign: "center",
    justifyContent: "center",
  },
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        <AppBar position="fixed" className={classes.appBar}>
            <Toolbar>
                <Typography variant="h6" className={classes.title}>Created By Yash Jhaveri | ImgFlip API</Typography>
            </Toolbar>
        </AppBar>
    </div>
  );
}



import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: "rgb(107, 127, 215)",
  },
  title: {
    flexGrow: 1,
    display: "flex",
    flexDirection: "row",
    textAlign: "center",
    justifyContent: "center",
    color: "black"
  },
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <div>
        <AppBar position="static" className={classes.appBar}>
            <Toolbar>
                <Typography variant="h6" className={classes.title}>Yash Jhaveri | ImgFlip API</Typography>
            </Toolbar>
        </AppBar>
    </div>
  );
}



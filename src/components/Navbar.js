import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {Link} from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
    display: "flex",
    flexDirection: "row",
    textAlign: "center",
    justifyContent: "center",
  },
  appBar: {
    top: 'auto',
    bottom: 0,
    backgroundColor: "rgb(107, 127, 215)",
  },
  Link: {
    color: "black",
  }
}));

export default function Navbar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h4" className={classes.title}><Link to="/" className={classes.Link}>Meme Creator</Link></Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
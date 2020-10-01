import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import '../index.css';

const useStyles = makeStyles((theme) => ({
    link: {
        color: "rgb(107, 127, 215)",
        listStyle: "none",
    },
  }));

const Meme = ({meme}) => {
    const classes = useStyles();

    return (
        <div className="Meme">
            <h1><a href={meme} className={classes.link}>Your Meme</a></h1>
            <img style={{border:'2px solid black'}} src={meme} alt='' className="MemeImg"></img>
            <br />
            <br />
        </div>
    )
}

export default Meme;
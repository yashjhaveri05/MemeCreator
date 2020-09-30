import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    link: {
        color: "red",
        listStyle: "none",
    },
    root: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        textAlign: "center",
    },
    image: {
        height: 300,
        width: 300,
        marginBottom: 20,
    },
  }));

const Meme = ({meme}) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <h1><a href={meme} className={classes.link}>Your Meme</a></h1>
            <img style={{border:'2px solid black'}} src={meme} alt='' className={classes.image}></img>
            <br />
            <br />
            <br />
        </div>
    )
}

export default Meme;
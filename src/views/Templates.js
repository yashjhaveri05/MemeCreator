import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom'; 
import LazyLoad from 'react-lazyload';

const useStyles = makeStyles((theme) => ({
    root: {
        width: 520,
    },
    img: {
        width: 500,
        height: 500,
        border: "6px solid black",
        marginLeft: 4,
    },
    link: {
        textDecoration: "none",
        color: "black",
    }
  }));

const Templates = ({id,name,imgurl,boxes,loading}) => {
    const classes = useStyles();

    if (loading) 
    {
        return <h2>Loading...</h2>;
    }

    return(
        <div>
            <Card className={classes.root}>
                <CardActionArea>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {name}
                        </Typography>
                        <Button size="small" color="primary" variant="contained">
                            <Link to={`/${id}/${boxes}`} className={classes.link}>Use Template and Create Meme</Link>
                        </Button>
                    </CardContent>
                    <LazyLoad once={true} placeholder={<img src={imgurl} alt={name} />}>
                        <CardMedia
                            component="img"
                            alt={id}
                            className={classes.img}
                            image={imgurl}
                            title={name}
                        />
                    </LazyLoad>
                </CardActionArea>
            </Card>
            <br />
        </div>

    )
}

export default Templates;    
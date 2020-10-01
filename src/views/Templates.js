import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom'; 
import LazyLoad from 'react-lazyload';
import '../index.css';
import { makeStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    loader: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
    },
    btn: {
        backgroundColor: "#ddfbd2",
    }
  }));

const Templates = ({id,name,imgurl,boxes,loading}) => {
    const classes = useStyles();

    if (loading) 
    {
        return <h2>Loading...</h2>;
    }

    return(
        <div className="Template">
            <Container  fluid={true}>
                <Card className="root">
                    <CardActionArea>
                        <CardContent>
                            <Typography gutterBottom variant="p" component="p" className="title">
                                {name}
                            </Typography>
                            <Button size="medium" className={classes.btn} variant="contained">
                                <Link to={`/${id}/${boxes}`} className="Link">Use Template and Create Meme</Link>
                            </Button>
                        </CardContent>
                        <div className={classes.loader} >
                        <LazyLoad once={true} placeholder={<img src={imgurl} alt={name} />}>
                            <CardMedia
                                component="img"
                                alt={id}                   
                                className="Image"
                                image={imgurl}
                                title={name}
                            />
                        </LazyLoad>
                        </div>
                        <br />
                    </CardActionArea>
                </Card>
            </Container>
            <br />
        </div>

    )
}

export default Templates;    
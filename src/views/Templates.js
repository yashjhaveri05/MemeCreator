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

const Templates = ({id,name,imgurl,boxes,loading}) => {

    if (loading) 
    {
        return <h2>Loading...</h2>;
    }

    return(
        <div className="Template">
            <Card className="root">
                <CardActionArea>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {name}
                        </Typography>
                        <Button size="small" color="secondary" variant="contained">
                            <Link to={`/${id}/${boxes}`} className="Link">Use Template and Create Meme</Link>
                        </Button>
                    </CardContent>
                    <LazyLoad once={true} placeholder={<img src={imgurl} alt={name} />}>
                        <CardMedia
                            component="img"
                            alt={id}                   
                            className="Image"
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
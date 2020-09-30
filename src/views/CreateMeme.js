import React,{useState} from 'react';
import {useParams} from 'react-router-dom';
import axios from 'axios';
import {Button,TextField} from '@material-ui/core';
import Meme from './Meme';
import { makeStyles } from '@material-ui/core/styles';
import { Card,Grid } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    form: {
        marginTop: 5,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        textAlign: "center",
        marginLeft: 10,
        marginRight: 10,
    },
    text: {
        marginTop: 20,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        textAlign: "center",
    },
    btn: {
        marginTop: 20,
        marginBottom: 20,
    },
    card: {
        marginTop: 10,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        textAlign: "center",
    }
  }));

export default function MemeCreator(){
    const classes = useStyles();

    let {id,boxes}= useParams();
    const box = boxes;
    let [val,setVal]=useState(Array(parseInt(box)).fill(''));
    let [result,setResult]=useState(null);
    let [username,setUsername]=useState('');
    let [pwd,setPwd]=useState('');

    const changeHandler=(e,number)=>{
        const t=[...val];
        t[number]=e.target.value;
        setVal(t);
    }
    
    const submitHandler=(event)=>{
        event.preventDefault();

        const boxes=Array(box).fill(" ");
        for(let k=0;k<box;k++){
            boxes[k]={'text':val[k]}
        }
        
        var form=new FormData();
        form.append('template_id',id);
        form.append('username',username);
        form.append('password',pwd);
        for(let k=0;k<box;k++){
            form.append(`boxes[${k}][text]`,val[k]);
        }

        axios({
            method:'POST',
            url: 'https://api.imgflip.com/caption_image',
            data: form,
            headers: {'Content-Type':'multipart/form-data'}
        })
        .then((response)=>setResult(response.data.data))
        .catch((error)=>console.log(error));
        
    }
    return (
        <div>
            <Grid container spacing={2} justify="center" alignItems="center">
                <Grid item xs={12} sm={12} md={6}>
                    <Card className={classes.card}>
                        <h1><u>Enter Details To Make The Meme</u></h1>
                        <form onSubmit={submitHandler} className={classes.form} >
                            <TextField id="outlined-basic" defaultValue={username} onChange={e => setUsername(e.target.value)} label="Enter Username For ImgFlip Website | Default: yashjhaveri" variant="outlined" />
                            <br />
                            <TextField id="outlined-basic" defaultValue={pwd} onChange={e => setPwd(e.target.value)} label="Enter Password For ImgFlip Website | Default: yashjhaveri" variant="outlined" />
                            {Array(parseInt(box)).fill(0).map((_,index) =>(
                                <div key={index}>
                                    <TextField id="outlined-basic" defaultValue={val[index]} onChange={e=>changeHandler(e,index)} label={"Enter text "+(index+1)} variant="outlined" className={classes.text} />
                                </div>))}
                            <Button variant="contained" color="secondary" type='submit' className={classes.btn} >Submit</Button>
                        </form>
                    </Card>
                </Grid>
            </Grid>
            <br />
            <br />
            {result === null ? null : <Meme meme={result.url} />}
        </div>
    )
}
import React,{useState} from 'react';
import {useParams} from 'react-router-dom';
import axios from 'axios';
import {Button,TextField} from '@material-ui/core';
import Meme from './Meme';
import { makeStyles } from '@material-ui/core/styles';
import { Card,Grid } from '@material-ui/core';
import Image from '../assets/meme.jpg';

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
        backgroundColor: "#ddfbd2",
        color: "black",
    },
    btn: {
        marginTop: 20,
        marginBottom: 20,
        backgroundColor: "#ddfbd2",
        color: "black",
    },
    card: {
        marginTop: 20,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        textAlign: "center",
        backgroundColor: "#6b7fd7",
        border: "6px solid black"
    },
    meme: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        textAlign: "center",
    },
    input: {
        backgroundColor: "#ddfbd2",
        color: "black",
    },
    label: {
        fontSize: "1.3rem",
        marginTop: 10,
    },
    first: {
        marginTop: 10,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
    },
    second: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
    }
  }));

export default function MemeCreator(){
    const classes = useStyles();

    let {id,boxes}= useParams();
    const box = boxes;
    let [val,setVal]=useState(Array(parseInt(box)).fill(''));
    let [result,setResult]=useState(null);
    let [username,setUsername]=useState(`${process.env.REACT_APP_USER}`);
    let [pwd,setPwd]=useState(`${process.env.REACT_APP_PWD}`);

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
                <Grid item xs={12} sm={12} md={3}>
                    <img src={Image} alt="meme" width="100%" className={classes.first} />
                </Grid>
                <Grid item xs={12} sm={12} md={6}>
                    <Card className={classes.card}>
                        <h1><u>Enter Details To Make The Meme</u></h1>  
                        <form onSubmit={submitHandler} className={classes.form} >
                            <label className={classes.label}>Enter Username(for ImgFlip Api):</label>
                            <TextField id="outlined-basic" defaultValue={username} onChange={e => setUsername(e.target.value)} variant="outlined" className={classes.input} />
                            <label className={classes.label}>Enter Password(for ImgFlip Api):</label>
                            <TextField id="outlined-basic" defaultValue={pwd} onChange={e => setPwd(e.target.value)} type="password" variant="outlined" className={classes.input} />
                            <label className={classes.label}>Enter Meme Content:</label>
                            {Array(parseInt(box)).fill(0).map((_,index) =>(
                                <div key={index}>
                                    <TextField id="outlined-basic" defaultValue={val[index]} onChange={e=>changeHandler(e,index)} label={"Enter text "+(index+1)} variant="outlined" className={classes.text} />
                                </div>))}
                            <Button variant="contained" color="secondary" type='submit' className={classes.btn} >Submit</Button>
                        </form>
                    </Card>
                </Grid>
                <Grid item sx={12} sm={12} md={3}>
                    <img src={Image} alt="meme" width="365px" className={classes.second} />
                </Grid>
            </Grid>
            <br />
            <div className={classes.meme}>
            {
                result === null ? null : <Meme meme={result.url} />
            }
            </div>
        </div>
    )
}
import React, { useState, useEffect } from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';

import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import { getPosts } from './actions/posts';
import useStyles from './styles';
import memories from './images/tenor.gif';
import imageSource from  './images/chatbot.png'
const App = () => {
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  return (
    <Container maxWidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h2" align="center">XMeme</Typography>
        <img className={classes.image} src={memories} alt="icon" height="60" />
      </AppBar>
      <Grow in>
        <Container>
          <Grid container justify="space-between" alignItems="stretch" spacing={3}>
            <Grid item xs={12} sm={7}>
              <Posts setCurrentId={setCurrentId} />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form currentId={currentId} setCurrentId={setCurrentId} />
            </Grid>
          </Grid>
        </Container>
      </Grow>
      <a style={{display: "table-cell"}} href ="https://us-east-1.sumerian.aws/ddff289db7fa4d3c890d59d5fe176554.scene">
      <img src={imageSource} style={{position: "absolute", bottom: 0, right: 0}}/>
      </a>
      <Typography className={classes.heading} variant="h4" align="center" style={{position: "absolute", bottom: 75, right: 185}}><b>The Chatbot Jokes → </b></Typography>
      
    </Container>
  );
};

export default App;

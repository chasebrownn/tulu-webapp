import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button, Paper, Grid, Typography, Container } from '@material-ui/core';
import { useHistory } from 'react-router-dom';


import { ageSelected } from '../../actions/auth';
import useStyles from './styles';
import Input from './Input';

const initialState = { Age: ''};

const SignUp = () => {
  const [form, setForm] = useState(initialState);
  const dispatch = useDispatch();
  const history = useHistory();
  const classes = useStyles();

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(ageSelected(form, history));
    
  };


  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  return (
    <Container component="main" maxWidth="xs">
      <Paper className={classes.paper} elevation={3}>
        <Typography className={classes.title} component="h1" variant="h5">Whats your age</Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Input name="age" label="Enter age" handleChange={handleChange} type="Age" />
          </Grid>
          <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>Next</Button>
          
          <Grid container justify="flex-end">
            <Grid item>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export default SignUp;

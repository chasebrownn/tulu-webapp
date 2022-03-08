import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {Button, Paper, Grid, Typography, Container } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { GoogleLogin } from 'react-google-login';
import {FacebookLogin} from 'react-facebook-login';

import Icon from './icon';
import { signin, signup, login } from '../../actions/auth';
import { AUTH } from '../../constants/actionTypes';
import useStyles from './styles';
import Input from './Input';

const initialState = { firstName: '', lastName: '', email: '', password: '', confirmPassword: '' };

const SignUp = () => {
  const [form, setForm] = useState(initialState);
  const [isSignup, setIsSignup] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();
  const classes = useStyles();

  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = () => setShowPassword(!showPassword);

  const switchMode = () => {
    setForm(initialState);
    setIsSignup((prevIsSignup) => !prevIsSignup);
    setShowPassword(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isSignup) {
      dispatch(signup(form, history));
    } else {
      dispatch(signin(form, history));
    }
  };
  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(login(form, history))
  };
  const googleSuccess = async (res) => {
    const result = res?.profileObj;
    const token = res?.tokenId;
    console.log(result)

    try {
      dispatch({ type: AUTH, data: { result, token } });

      history.push('/login');
    } catch (error) {
      console.log(error);
    }
  };

  const googleError = () => alert('Google Sign In was unsuccessful. Try again later');

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  return (
    <Container component="main" maxWidth="xs">
      <div class="flexboxContainer">
        <div half>
          <Paper className={classes.paper} elevation={3}>
            <GoogleLogin
                clientId='894452106348-cel1tv9iid6s6pdp8056oa44uu5oitld.apps.googleusercontent.com'
                render={(renderProps) => (
                  <Button className={classes.googleButton} color="primary" fullWidth onClick={renderProps.onClick} disabled={renderProps.disabled} varient="contained">
                    Continue with Facebook</Button>
                )}
                onSuccess={googleSuccess}
                onFailure={googleError}
                cookiePolicy="single_host_origin"
            />
            <GoogleLogin
                clientId='894452106348-cel1tv9iid6s6pdp8056oa44uu5oitld.apps.googleusercontent.com'
                render={(renderProps) => (
                  <Button className={classes.googleButton} color="primary" fullWidth onClick={renderProps.onClick} disabled={renderProps.disabled} startIcon={<Icon />} varient="contained">
                    Continue with Google</Button>
                )}
                onSuccess={googleSuccess}
                onFailure={googleError}
                cookiePolicy="single_host_origin"
            />
            <div>
              <Button half onClick={handleLogin}>Login</Button>
              <Button half onClick={handleLogin}>SignUp</Button>
              
            </div>
          </Paper>
        </div>
        <div half>
          <Paper className={classes.paper} elevation={2}>
            <p>COPY COPY COPY</p>
            <p>COPY COPY COPY</p>
            <p>COPY COPY COPY</p>
            <p>COPY COPY COPY</p>
            <p>COPY COPY COPY</p>
            <p>COPY COPY COPY</p>
          </Paper>
        </div>
      </div>
    </Container>
  );
};

export default SignUp;

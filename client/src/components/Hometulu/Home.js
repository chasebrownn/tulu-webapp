import React from 'react';
import { useDispatch } from 'react-redux';
import {Button, Paper, Container } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { GoogleLogin } from 'react-google-login';
import {FacebookLogin} from 'react-facebook-login';

import Icon from './icon';
import { AUTH } from '../../constants/actionTypes';
import useStyles from './styles';

const SignUp = () => {
  // const [isSignup, setIsSignup] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();
  const classes = useStyles();
  const googleError = () => alert('Google Sign In was unsuccessful. Try again later');

  const handleLogin = (e) => {
    e.preventDefault();
    history.push('/login');
  };
  const handleSignup = (e) => {
    e.preventDefault();
    history.push('/signup');
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

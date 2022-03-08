import { AUTH } from '../constants/actionTypes';
import * as api from '../api/index.js';

export const signin = (formData, router) => async (dispatch) => {
  try {
    const { data } = await api.signIn(formData);

    dispatch({ type: AUTH, data });

    router.push('/home');
  } catch (error) {
    console.log(error);
  }
};

export const signup = (formData, router) => async (dispatch) => {
  try {
    const { data } = await api.signUp(formData);

    dispatch({ type: AUTH, data });

    router.push('/age');
  } catch (error) {
    console.log(error);
  }
};

export const ageSelected = (formData, router) => async (dispatch) => {
  try {
    // const { data } = await api.signUp(formData);

    // dispatch({ type: AUTH, data });

    router.push('/dashboard');
  } catch (error) {
    console.log(error);
  }
};

export const login = (formData, router) => async (dispatch) => {
  try {
    // const { data } = await api.signUp(formData);

    // dispatch({ type: AUTH, data });

    router.push('/');
  } catch (error) {
    console.log(error);
  }
};
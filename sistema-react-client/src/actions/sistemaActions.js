import axios from "axios";
import { GET_ERRORS, GET_SISTEMAS } from "./types";
import { showMessage, hideMessage } from "../reducers/messageReducer";
import { API_URL } from "./api";

export const salvarSistema = (sistema, history) => async dispatch => {
  try {
    const res = await axios.post(API_URL, sistema);
    history.push("/");
    dispatch(showMessage());
    setTimeout(() => { dispatch(hideMessage()) }, 2500);
  } catch (err) {
    dispatch({
      type: GET_ERRORS,
      payload: err.response.data
    });
  }
};

export const getSistemas = () => async dispatch => {
  const res = await axios.get(API_URL);
  dispatch({
    type: GET_SISTEMAS,
    payload: res.data
  });
};

export const pesquisarSistemas = (pesquisa) => async dispatch => {
  try {
    const res = await axios.get(API_URL + "/pesquisa?descricao=" + pesquisa.descricao + "&email=" + pesquisa.email + "&sigla=" + pesquisa.sigla);
    dispatch(showMessage());
    setTimeout(() => { dispatch(hideMessage()) }, 1000);
    dispatch({
      type: GET_SISTEMAS,
      payload: res.data
    });
  } catch (error) {

  }
};
import { combineReducers } from "redux";
import errorReducer from "./errorReducer";
import sistemaReducer from "./sistemaReducer";
import messageReducer from "./messageReducer";

export default combineReducers({
  errors: errorReducer,
  sistema: sistemaReducer,
  mensagem: messageReducer
});

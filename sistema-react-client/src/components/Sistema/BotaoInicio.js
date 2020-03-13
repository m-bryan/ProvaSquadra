import React from "react";
import { Link } from "react-router-dom";

const BotaoInicio = () => {
  return (
    <React.Fragment>
      <Link to="/" className="btn btn-block btn-info">
        Voltar
      </Link>
    </React.Fragment>
  );
};

export default BotaoInicio;



import React from "react";
import { Link } from "react-router-dom";

const BotaoNovoSistema = () => {
  return (
    <React.Fragment>
      <Link to="/addSistema" className="btn btn-success btn-block mt-4">
        Novo Sistema
      </Link>
    </React.Fragment>
  );
};

export default BotaoNovoSistema;



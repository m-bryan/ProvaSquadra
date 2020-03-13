import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { salvarSistema } from "../../actions/sistemaActions";
import classnames from "classnames";
import Header from "../Layout/Header"
import BotaoInicio from "./BotaoInicio";

class AddSistema extends Component {
  constructor() {
    super();

    this.state = {
      descricao: "",
      sigla: "",
      email: "",
      url: "",
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  //life cycle hooks
  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    const sistemaNewDTO = {
      descricao: this.state.descricao,
      sigla: this.state.sigla,
      email: this.state.email,
      url: this.state.url
    };
    this.props.salvarSistema(sistemaNewDTO, this.props.history);
  }

  render() {
    const { errors } = this.state;

    return (
      <div>
        <div className="project">
          <Header />
          <div className="container">
            <div className="row">
              <div className="col-md-8 m-auto">
                <h4 className="display-5 text-center">Dados do Sistema</h4>
                <hr />
                <form onSubmit={this.onSubmit}>
                  <div className="form-group">
                    <input
                      type="text"
                      className={classnames("form-control form-control-lg ", {
                        "is-invalid": errors.descricao
                      })}
                      placeholder="Descrição"
                      name="descricao"
                      maxLength="100"
                      value={this.state.descricao}
                      onChange={this.onChange}
                    />
                    {errors.descricao && (
                      <div className="invalid-feedback">
                        {errors.descricao}
                      </div>
                    )}
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className={classnames("form-control form-control-lg ", {
                        "is-invalid": errors.sigla
                      })}
                      placeholder="Sigla"
                      name="sigla"
                      maxLength="10"
                      value={this.state.sigla}
                      onChange={this.onChange}
                    />
                    {errors.sigla && (
                      <div className="invalid-feedback">
                        {errors.sigla}
                      </div>
                    )}
                  </div>
                  <div className="form-group">
                    <input
                      type="mail"
                      className={classnames("form-control form-control-lg ", {
                        "is-invalid": errors.email
                      })}
                      placeholder="E-mail de atendimento do sistema"
                      name="email"
                      maxLength="100"
                      value={this.state.email}
                      onChange={this.onChange}
                    />
                    {errors.email && (
                      <div className="invalid-feedback">
                        {errors.email}
                      </div>
                    )}
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className={classnames("form-control form-control-lg ", {
                        "is-invalid": errors.url
                      })}
                      placeholder="URL"
                      name="url"
                      maxLength="50"
                      value={this.state.url}
                      onChange={this.onChange}
                    />
                    {errors.url && (
                      <div className="invalid-feedback">
                        {errors.url}
                      </div>
                    )}
                  </div>

                  <div className="row">
                    <div className="col">
                      <BotaoInicio />
                    </div>
                    <div className="col">
                    <input
                      value="Salvar"
                      type="submit"
                      className="btn btn-primary btn-block"
                    />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

AddSistema.propTypes = {
  salvarSistema: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { salvarSistema }
)(AddSistema);
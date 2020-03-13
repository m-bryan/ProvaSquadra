import React, { Component } from "react";
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import { connect } from "react-redux";
import { getSistemas, pesquisarSistemas } from "../actions/sistemaActions";
import PropTypes from "prop-types";
import BotaoNovoSistema from "./Sistema/BotaoNovoSistema";
import Header from "./Layout/Header";
import classnames from "classnames";
import Messages from "./Messages";

class Dashboard extends Component {

  constructor() {
    super();

    this.state = {
      descricao: "",
      sigla: "",
      email: "",
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.pesquisar = this.pesquisar.bind(this);
  }

  limpar = event => {
    event.preventDefault();
    this.setState({
      descricao: "",
      sigla: "",
      email: ""
    })
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

  pesquisar = event => {
    event.preventDefault();
    const pesquisa = {
      descricao: this.state.descricao,
      sigla: this.state.sigla,
      email: this.state.email
    };
    this.props.pesquisarSistemas(pesquisa);
  }

  componentDidMount() {
    this.props.getSistemas();
  }

  render() {
    const { errors } = this.state;
    const { sistemas } = this.props.sistema;
    const tableOptions = {
      noDataText: 'Nenhum Sistema foi encontrado. Favor revisar os critérios da sua pesquisa!',
      sizePerPageList: [{
        text: '10', value: 10
      }, {
        text: '50', value: 50
      }, {
        text: 'All', value: sistemas.length
      }]

    }

    return (
      <div className="projects" >
        <Header />
        <Messages />
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              
            <div className="col-md-12 row">
            <div className="col-md-3"/>

              <form onSubmit={this.onSubmit} className="col-md-6 pesquisa">
                <h6 className="display-6 ">Pesquisa</h6>

                <div className="form-group">
                  <input
                    type="text"
                    className={classnames("form-control ")}
                    placeholder="Descrição"
                    name="descricao"
                    value={this.state.descricao}
                    onChange={this.onChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className={classnames("form-control")}
                    placeholder="Sigla"
                    name="sigla"
                    value={this.state.sigla}
                    onChange={this.onChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="mail"
                    className={classnames("form-control", {
                      "is-invalid": errors.email
                    })}
                    placeholder="E-mail de atendimento do sistema"
                    name="email"
                    value={this.state.email}
                    onChange={this.onChange}
                  />
                  {errors.email && (
                    <div className="invalid-feedback">
                      {errors.email}
                    </div>
                  )}
                </div>

                <br />

              </form>
              <div className="col-md-3"></div>
            </div>

              <hr />

              <BootstrapTable
                data={sistemas}
                striped
                hover
                options={tableOptions}
                responsive
                condensed
                pagination
                keyField="name"
                // exportCSV
                columns={sistemas}

              >
                <TableHeaderColumn keyField="id" dataField='id'>Id</TableHeaderColumn>
                <TableHeaderColumn dataField='descricao'>Descricao</TableHeaderColumn>
                <TableHeaderColumn dataField='sigla'>Sigla</TableHeaderColumn>
                <TableHeaderColumn dataField='email'>E-mail</TableHeaderColumn>
                <TableHeaderColumn dataField='email'>URL</TableHeaderColumn>
                <TableHeaderColumn dataField='status'>Status</TableHeaderColumn>
              </BootstrapTable>


              <div className="row">
                <div className="col">
                  <input
                    value="Pesquisar"
                    type="button"
                    onClick={this.pesquisar}
                    className="btn btn-info btn-block mt-4"
                  />
                </div>
                <div className="col">
                  <input
                    value="Limpar"
                    type="button"
                    onClick={this.limpar}
                    className="btn btn-info btn-block mt-4"
                  /></div>
                <div className="col">
                  <BotaoNovoSistema />
                </div>

              </div>

            </div>
          </div>
        </div>
      </div>
    );
  }
}

Dashboard.propTypes = {
  sistema: PropTypes.object.isRequired,
  pesquisa: PropTypes.object.isRequired,
  getSistemas: PropTypes.func.isRequired,
  pesquisarSistemas: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  sistema: state.sistema,
})
export default connect(mapStateToProps, { getSistemas, pesquisarSistemas })(Dashboard);

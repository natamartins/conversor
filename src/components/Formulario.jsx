import React, { Component } from "react";
import { connect } from "react-redux";
import ListaMoedas from "./ListaMoedas";
import { bindActionCreators } from "redux";

import { converteMoedas } from "../action/index";

class Formulario extends Component {
  constructor(props) {
    super(props);

    this.onValueChange = this.onValueChange.bind(this);
    this.onValueDeChange = this.onValueChange.bind(this);
    this.onValueParaChange = this.onValueChange.bind(this);
    this.envia = this.onValueChange.bind(this);

    this.state = {
      de: "",
      para: "",
      valor: 0,
    };
  }

  onValueChange(e) {
    console.log(e.target.value);
    this.setState({ valor: e.target.value });
  }

  onValueDeChange(e) {
    console.log("DE", e.target.value);
    this.setState({ de: e.target.value });
  }

  onValueParaChange(e) {
    console.log("PARA", e.target.value);
    this.setState({ para: e.target.value });
  }

  envia() {
    const dados = {
      de: this.state.de,
      para: this.state.para,
      valor: this.state.valor,
    };

    this.props.converteMoedas(dados);
  }

  render() {
    return (
      <form>
        <div className="row justify-content-md-center">
          <div className="input-group input-group-lg">
            <input
              onChange={(e) => this.onValueChange(e)}
              type="number"
              className="from-control"
            />
          </div>
        </div>
        {/*  */}
        <div className="row from-group">
          <div className="col-md-6">
            <label htmlFor="formSelectDE">de:</label>
            <ListaMoedas
              origem="de"
              onValueChange={(e) => this.onValueDeChange(e)}
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="formSelectPARA">Para:</label>
            <ListaMoedas
              origem="para"
              onValueChange={(e) => this.onValueParaChange(e)}
            />
          </div>
        </div>
        <div className="row">
          <button
            type="button"
            onClick={this.envia}
            className="btn btn-primary btn-lg btn-block"
          >
            Converte
          </button>
        </div>
      </form>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ converteMoedas }, dispatch);
}

export default connect(null, mapDispatchToProps)(Formulario);

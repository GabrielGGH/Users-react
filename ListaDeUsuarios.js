import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';


class ListaDeUsuarios extends React.Component {

  state = {
    pessoas: [],
    deuErro: false
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(function (response) {
        if (response.ok) {
          return response.json();
        }
        throw { status: response.status, mensagem: response.statusText }
      })
      .then((json) => {
        this.setState({ pessoas: json });
      })
      .catch((erro) => {
        this.setState({ deuErro: true })
      });
  }

  mostraLinhaDaTabela(pessoa) {
    return (
      <tr>
        <td>
          {pessoa.name}
        </td>
        <td>
          {pessoa.email}
        </td>
        <td>
          {pessoa.username}
        </td>

        <td>
          <Link to={"/usuarios/" + pessoa.id}>Detalhes</Link>
        </td>
      </tr>
    )
  }


  render() {
    console.log(this.state);
    return (
      <div className = "div1">
        <h1> Lista de Usuarios</h1>
        <table className = "table1">
          <thead className = "table1">
            <td>Nomes</td>
            <td>E-mail</td>
            <td>Username</td>
            <td>Dados</td>
          </thead>
          <tbody>
            {this.state.pessoas.map(this.mostraLinhaDaTabela)}
          </tbody>
        </table>
      </div>
    )
  }



}

export default ListaDeUsuarios;


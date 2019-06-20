import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';



class DetalhesUsuario extends React.Component {

  state = {
    posts: [],
    pessoa: {},
    deuErro: false
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users/' + this.props.match.params.id)
      .then(function (response) {
        if (response.ok) {
          return response.json();
        }
        throw { status: response.status, mensagem: response.statusText }
      })
      .then((json) => {
        this.setState({ pessoa: json });
      })
      .catch((erro) => {
        this.setState({ deuErro: true })
      });


    fetch('https://jsonplaceholder.typicode.com/posts?userId=' + this.props.match.params.id)
      .then(function (response) {
        if (response.ok) {
          return response.json();
        }
        throw { status: response.status, mensagem: response.statusText }
      })
      .then((json) => {
        this.setState({ posts: json });
      })
      .catch((erro) => {
        this.setState({ deuErro: true })
      });

  }

  mostraPosts(posts) {
    return (
      <div className="bodyy">
      
        <tr>
          <td>
            <label>Id do post:  {posts.id}</label>
          </td>
        </tr>
        <tr>
          <td>
            <label>Titulo:  {posts.title}</label>
          </td>
        </tr>
        <tr>
          <td>
            <label>Corpo:  {posts.body}</label>
          </td>
        </tr>
      </div>
    )

  }
  render() {
    const { pessoa } = this.state;
    return (
      <div className = "div2">
                  <Link to={"/usuarios/"}>Voltar</Link>
        <table>
          <thead >
            <td>
              <h2> Dados do Usuário: </h2>
            </td>
          </thead>
          <tbody>
            <tr>
              <td>
                <label>Id:  {pessoa.id}</label>
              </td>
            </tr>
            <tr>
              <td>
                <label>Nome:  {pessoa.name}</label>
              </td>
            </tr>
            <tr>
              <td>
                <label>Username:  {pessoa.username}</label>
              </td>
            </tr>
            <tr>
              <td>
                <label>E-mail:  {pessoa.email}</label>
              </td>
            </tr>
            <tr>
              <td>
                <label>Endereco:  {pessoa.address ? pessoa.address.street + ', ' + pessoa.address.suite : ' '}</label>
              </td>
            </tr>
            <tr>
              <td>
                <label>Telefone:  {pessoa.phone}</label>
              </td>
            </tr>
            <tr>
              <td>
                <label>Site:  {pessoa.website}</label>
              </td>
            </tr>
          </tbody>
        </table>

        <table className = "table3">
          <thead>
            <td>
              <h2 align="center"> Posts: </h2>
            </td>
          </thead>
          <tbody >
            {this.state.posts.map(this.mostraPosts)}
          </tbody>
        </table>
      </div>
    )
  }

}
export default DetalhesUsuario;


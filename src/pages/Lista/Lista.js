import { Component } from "react";
import "./Lista.css";
import api from './api';

class Lista extends Component{

    state = {
        dados: [],
    }

    async componentDidMount(){
        const response = await api.get('');

        this.setState({dados: response.data});
    }

    render(){

     const {dados} = this.state;

      return(
        <div>
          <h1>Listar conteúdo</h1>
          {console.log(dados)}
          {dados.map(dado => (
            <li key={dado._links.aditivos}>
                <h2> <strong>Link: </strong>
                {dado._links.aditivos.href}
                {dado._links.aditivos.title}
                </h2>
            </li>
          ))}
        </div>
      );
    };
  }

export default Lista;
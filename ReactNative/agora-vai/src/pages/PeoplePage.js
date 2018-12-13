// Imports do Sistema
import React from 'react';
import {ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import axios from 'axios'

// Imports de componentes criados
import {PeopleList} from '../components/'
import PeopleDetailPage from './PeopleDetailPage';
import {stylesPeoplePage} from '../components/Estilo'

export default class PeoplePage extends React.Component {
  constructor(props) {
    super(props); 
    this.state = {
      peoples: [],
      loading: false,
      error: false,
    };
  }

  componentDidMount(){
    this.setState({loading: true});
        axios
        .get('https://randomuser.me/api/?nat=br&results=15')
        .then(response => {
            const {results} = response.data;
            this.setState({
                peoples: results,
                loading: false,
            })
        }).catch(error => {
          this.setState({
              error: true,
              loading: false,
          })
        });
  }
  
  render(){
    return (
    <View style={stylesPeoplePage.container}>
      {/*Abrir chaves permite executar JS dentro do jsx*/}
      {
        this.state.loading
        ? <ActivityIndicator size="large" color="6ca2f7"/>
        : this.state.error
            ? <Text style={stylesPeoplePage.error}>Ops, deu merda :(</Text>
            : <PeopleList 
                  peoples = {this.state.peoples}
                  selecionarPeople = {(ParametroPegaNome) => {this.props.navigation.navigate('PeopleDetailPage', ParametroPegaNome)}}
              />
      }
    </View>
  );
}
}



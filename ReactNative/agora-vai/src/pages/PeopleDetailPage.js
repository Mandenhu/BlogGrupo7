import React from 'react'
import {View, Text, Image} from 'react-native'
import {Estilo, stylePeopleDetailPage } from '../components/Estilo'
import {FirstLetter} from '../util/FirstLetter'
import {Line} from '../components/'

export default class PeopleDetailPage extends React.Component {
    render(){
        const {people} = this.props.navigation.state.params;
        
        return(
            // Dentro do Array de estilos, o ultimo estilo é o que sobrescreve os demais. 
            <View style={stylePeopleDetailPage.container}>
            <Image style={stylePeopleDetailPage.avatar} source={{uri: people.picture.large}}/>
                <View style={stylePeopleDetailPage.detailContainer}>
                    <Line label="Nome:" content={people.name.first}/>
                    <Line label="Sobrenome:" content={people.name.last}/>
                    <Line label="Email:" content={people.email}/>
                    <Line label="Cidade:" content={people.location.city}/>
                    <Line label="Estado:" content={people.location.state}/>
                    <Line label="WhatsApp:" content={people.cell}/>
                    <Line label="Idade" content={people.dob.age}/>
                </View>
            </View>
        );
    }
}

import React from 'react'
import {Text, View, Image, TouchableOpacity, TouchableHighlight} from 'react-native'
import Estilo, { stylePeopleList } from './Estilo'
import {FirstLetter} from '../util/'


const PeopleListItem = props => {
    
    // Recebendo onPress por props da PeopleList
    // Destructing de people por props
    const {people, selecionarPeople} = props;

    // Destructing de first e last name para PeopleList mapear
    const {first, last} = people.name;

    // Retorna estilo e o first e last para PeopleList Mapear
    return (
        <TouchableOpacity onPress={() => {
            // Passando o objeto people para o PeoplePage por parametro para pegar o nome do usuario clicado
            selecionarPeople({people});
        }}>
            <View style={stylePeopleList.line}>
            <Image style={stylePeopleList.avatar} source={{uri: people.picture.thumbnail}}/>
                <Text style={stylePeopleList.lineText}>
                    {`${FirstLetter(first)} ${FirstLetter(last)}`}
                </Text>
            </View>
        </TouchableOpacity>
    )
}



export default PeopleListItem;
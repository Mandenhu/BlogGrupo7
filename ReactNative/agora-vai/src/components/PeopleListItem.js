import React from 'react'
import {Text, View, Image, TouchableOpacity, TouchableHighlight} from 'react-native'
import Estilo, { stylePeopleList } from './Estilo'
import {FirstLetter} from '../util/'


const PeopleListItem = props => {
    
    const {people, selecionarPeople} = props;

    const {first, last} = people.name;

    return (
        <TouchableOpacity onPress={() => {
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
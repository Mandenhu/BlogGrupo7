import React from 'react'
import {FlatList, View, Text} from 'react-native'
import Estilo, { stylePeopleList } from './Estilo'

import PeopleListItem from './PeopleListItem'

const PeopleList = props => {
    
    // Recebe peoples por props
    // Recebe SelecionarPeople por props 
    const {peoples, selecionarPeople} = props;
    
    return (
        <FlatList 
            style={stylePeopleList.container}
            data={peoples}
            renderItem={({item}) => (
                <PeopleListItem 
                people = {item}
                selecionarPeople = {selecionarPeople} />
            )}
            keyExtractor={item => item.login.uuid}
        />
    ); 
};

export default PeopleList;
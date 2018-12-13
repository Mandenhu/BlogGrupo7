import React from 'react'
import {View, Text} from 'react-native'
import {styleHeader} from './Estilo'

// Functional Components, podem ser usados quando não precisa usar State
const Header = props => {
    return(
        <View style={styleHeader.container}>
            <Text style={styleHeader.title}>{props.title}</Text>
        </View>
    )
}
export default Header;
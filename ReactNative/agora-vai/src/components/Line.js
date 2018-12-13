import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import Estilo, {stylePeopleDetailPage} from './Estilo'

// Definir os valores padrão de label e content como "" protege o codigo de um crash
const Line = ({label = "", content = "-"}) => {
    return (
        <View style ={stylePeopleDetailPage.line}>
            <Text style ={[
                stylePeopleDetailPage.cell ,
                stylePeopleDetailPage.label,
                label.length > 8 ? stylePeopleDetailPage.labelMaior : null]}>{label}</Text>
            <Text style ={[stylePeopleDetailPage.cell ,stylePeopleDetailPage.content]}>{content}</Text>
        </View>
    )

}

export default Line;

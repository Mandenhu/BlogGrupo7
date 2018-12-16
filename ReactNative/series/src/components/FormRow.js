import React from 'react'
import {View, Text} from 'react-native'
import { styleFormRow } from './Style';

const FormRow = (props) => {
    const {children, first, last} = props;
    return (
        // Array de estilos. Para ajustar por igual os items do topo e do bottom
        <View style={[
            styleFormRow.container, 
            first ? styleFormRow.first : null,
            last ? styleFormRow.last : null,
            ]}>
            {children}
        </View>
    )
}

export default FormRow;
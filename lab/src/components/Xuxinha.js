import React from 'react'
import { View, Text } from 'react-native'

export default props =>
    <View>
        <Text>{props.name}</Text>
        <Text>{props.age + 100}</Text>
    </View>

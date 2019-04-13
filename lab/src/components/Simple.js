import React from 'react'
import { View, Text } from 'react-native'
import Default from '../styles/Default'

export default props => 
  <View>
    <Text style={[Default.ex]}>
      {props.text}
    </Text>
  </View>

import React from 'react'
import { View, Text } from 'react-native'
import Default from '../styles/Default'

function evenOdd(number) {
  if (number % 2 == 0) {
    return <Text style={Default.ex}>Pair</Text>
  } else {
    return <Text style={Default.ex}>Odd</Text>
  }
}

export default props => 
  <View>
    {evenOdd(props.number)}
    {/* { {props.number % 2 == 0 ? <Text style={Default.ex}>Even</Text> : <Text style={Default.ex}>Odd</Text>} } */}
  </View>
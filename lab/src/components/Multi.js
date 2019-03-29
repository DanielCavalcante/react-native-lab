import React from 'react'
import { Text } from 'react-native'
import Default from '../styles/Default'

export const Inverter = props => {
  const inverter = props.text.split('').reverse().join('')
  return <Text style={Default.ex}>{inverter}</Text>
}

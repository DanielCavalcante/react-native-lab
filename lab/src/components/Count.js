import React, { Component } from 'react'
import { View, Text, TouchableHighlight } from 'react-native'

export default class Count extends Component {
  render() {
    this.props.number++
    return (
      <View>
        <Text style={{fontSize: 40}}>{this.props.number}</Text>
        <TouchableHighlight>
          <Text>Incrementar/Zerar</Text>
        </TouchableHighlight>
        </View>
    )
  }
}
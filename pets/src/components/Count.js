import React, { Component } from 'react'
import { View, Text, TouchableHighlight } from 'react-native'

export default class Count extends Component {

  state = {
    number: 0
  }
  
  increment = () => {
    this.setState({number: this.state.number + 1})
  }

  clear = () => {
    this.setState({number: 0})
  }

  render() {
    this.props.number++
    return (
      <View>
        <Text style={{fontSize: 40}}>{this.state.number}</Text>
        <TouchableHighlight onPress={this.increment} onLongPress={this.clear}>
          <Text>Incrementar/Zerar</Text>
        </TouchableHighlight>
      </View>
    )
  }
}
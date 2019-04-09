import React, {Component} from 'react'
import { View, Text, TextInput } from 'react-native'
import Default from '../styles/Default'

export default class Event extends Component {
  
  state = {
    text: ''
  }

  alterText = text => {
    this.setState({ text })
  }

  render() {
    return (
      <View>
        <Text style={Default.font40}>{this.state.text}</Text>
        <TextInput value={this.state.text} style={Default.input} onChangeText={this.alterText} />
      </View>

    )
  }

} 

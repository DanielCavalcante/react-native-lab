import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Simple from './components/Simple'

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Simple text='New Simple!' />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

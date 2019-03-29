import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

import Simple from './components/Simple'
import { Inverter } from './components/Multi'
import EvenOrOdd from './components/EvenOdd'


export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Simple text='New Simple!' />
        <Inverter text='subinoonibus'></Inverter>
        <EvenOrOdd style={Default.ex} number={15} />
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

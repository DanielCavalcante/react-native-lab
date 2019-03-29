import React from 'react'
import { createDrawerNavigator } from 'react-navigation'

import Simple from './components/Simple'
import { Inverter } from './components/Multi'
import EvenOdd from './components/EvenOdd'

export default createDrawerNavigator({
  Simple: {
    screen: () => <Simple text='Simple!' />,
    navigationOptions: { title: 'Simple' }
  },
  Inverter: {
    screen: () => <Inverter text='subinoonibus'></Inverter>
  },
  EvenOdd: {
    screen: () => <EvenOdd number={20} />,
    navigationOptions: { title: 'Even or Odd' }
  }
}, { drawerWidth: 300 })
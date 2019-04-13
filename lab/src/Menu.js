import React from 'react'
import { createDrawerNavigator } from 'react-navigation'

import Simple from './components/Simple'
import { Inverter } from './components/Multi'
import EvenOdd from './components/EvenOdd'
import Count from './components/Count'
import Platform from './components/Platform'
import PropsValidate from './components/PropsValidate'
import Event from './components/Event'
import { GrandFather } from './components/DirectCommunication'
import { SyncedText } from './components/Input'
import FlexList from './components/FlexList'
import Flex from './components/Flex'
import Xuxinha from './components/Xuxinha'

export default createDrawerNavigator({
  Flex: {
    screen: Flex,
    navigationOptions: { title: 'Circles' }
  },
  FlexList: {
    screen: FlexList,
    navigationOptions: { title: 'Students' }
  },
  // SyncedText: {
  //   screen: SyncedText
  // },
  GrandFather: {
    screen: () => <GrandFather name='Ronaldo' lastName='Nazario' />
  },
  Event: {
    screen: Event
  },
  PropsValidate: {
    screen: () => <PropsValidate label='HB20 ' age={18} />
  },
  Platform: {
    screen: () => <Platform />
  },
  Count: {
    screen: () => <Count />
  },
  Xuxinha: {
    screen: () => <Xuxinha name="Xuxinha" age={25} />
  },
  Inverter: {
    screen: () => <Inverter text='subinoonibus'></Inverter>
  },
  EvenOdd: {
    screen: () => <EvenOdd number={20} />,
    navigationOptions: { title: 'Even or Odd' }
  }
}, { drawerWidth: 300 })
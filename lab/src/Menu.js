import React from 'react'
import { createDrawerNavigator } from 'react-navigation'

import Simple from './components/Simple'
import { Inverter } from './components/Multi'
import EvenOdd from './components/EvenOdd'
import Count from './components/Count'
import Platform from './components/Platform'
import PropsValidate from './components/PropsValidate'

export default createDrawerNavigator({
  PropsValidate: {
    screen: () => <PropsValidate label='HB20 ' age={18} />
  },
  Platform: {
    screen: () => <Platform />
  },
  Count: {
    screen: () => <Count />
  },
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
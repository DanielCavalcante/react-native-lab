import React from 'react'
import { createDrawerNavigator } from 'react-navigation'

import Hello from './components/Hello'
import Plataforma from './components/Plataforma'
import Count from './components/Count'
import GrandFather from './components/ComunicacaoDireta'
import Pets from './components/Pets'

export default createDrawerNavigator({
    Pets: {
      screen: Pets
    },
    GrandFather: {
      screen: () => <GrandFather name='Ronaldo' lastName='Nazario' />
    },
    Count: {
      screen: () => <Count />
    },
    Plataforma: {
      screen: () => <Plataforma />
    },
    Hello: {
      screen: () => <Hello />
    }
}, { drawerWidth: 300 })
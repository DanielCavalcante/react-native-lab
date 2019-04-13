import React from 'react'
import { createDrawerNavigator } from 'react-navigation'

import Hello from './components/Hello'

export default createDrawerNavigator({
    Hello: {
      screen: () => <Hello />
    }
}, { drawerWidth: 300 })
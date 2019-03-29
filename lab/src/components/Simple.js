import React from 'react'
import { View, Text } from 'react-native'
import Default from '../styles/Default'

// export default function(props) {
//   return <Text>{props.text}</Text>
// }
export default props => 
    <View>
        <Text style={[Default.ex]}>{props.text}</Text>
    </View>

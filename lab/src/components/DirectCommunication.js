import React from 'react'
import { View, Text } from 'react-native'

const font = { style: {fontSize: 30} }

export const Chield = props => 
  <View>
    <Text {...font}>Chield: {props.name} {props.lastName} </Text>
  </View>

export const Father = props =>
  <View>
    <Text {...font}>Father: {props.name} {props.lastName} </Text>
    {/* {props.children} */}
    {React.Children.map(props.children, c => React.cloneElement(c, {...props, ...c.props}))}
  </View>

export const GrandFather = props =>
  <View>
    <Text {...font}>GrandFather: {props.name} {props.lastName} </Text>
    <Father name='João' lastName={props.lastName}>
      <Chield name='Xuxinha' />
      <Chield name='Nena' />
    </Father>
    <Father {...props}></Father>
  </View>
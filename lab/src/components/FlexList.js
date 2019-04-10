import React from 'react'
import { ScrollView, View, FlatList, Text } from 'react-native'

const students = [
  { id: 1, name: 'Nena', note: 10 },
  { id: 2, name: 'Xuxinha', note: 9 },
  { id: 3, name: 'Sarrabulhador', note: 8 },
  { id: 4, name: 'Grafite', note: 7 },
  { id: 5, name: 'TorouDento', note: 9 },
  { id: 6, name: 'Varei', note: 7.1 },
  { id: 7, name: 'Lucas', note: 8.1 },
  { id: 8, name: 'Laura', note: 6.1 },
  { id: 9, name: 'Alessandro', note: 9.1 },
  { id: 11, name: 'Nena', note: 10 },
  { id: 12, name: 'Xuxinha', note: 9 },
  { id: 13, name: 'Sarrabulhador', note: 8 },
  { id: 14, name: 'Grafite', note: 7 },
  { id: 15, name: 'TorouDento', note: 9 },
  { id: 16, name: 'Varei', note: 7.1 },
  { id: 17, name: 'Lucas', note: 8.1 },
  { id: 18, name: 'Laura', note: 6.1 },
  { id: 19, name: 'Alessandro', note: 9.1 }
];

const row = {
  paddingHorizontal: 15,
  height: 50,
  backgroundColor: '#DDD',
  borderWidth: 0.5,
  borderColor: '#222',
  alignItems: 'center',
  flexDirection: 'row',
  justifyContent: 'space-between'
}

export const Student = props => 
  <View style={row}>
    <Text>Name: {props.name}</Text>
    <Text style={{fontWeight: 'bold'}}>Note: {props.note}</Text>
  </View>

export default props => {
  const renderItems = ({item}) => {
    return <Student {...item} />
  }

  return (
    <ScrollView>
      <FlatList data={students} renderItem={renderItems} 
        keyExtractor={(_, index) => index.toString()}>
      </FlatList>
    </ScrollView>
  )
}

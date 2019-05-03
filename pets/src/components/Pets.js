import React, { Component } from 'react'
import { View, Text, FlatList } from 'react-native'
import api from '../services/api'

export default class Pets extends Component {

  state = {
    pets: []
  }

  componentDidMount = () => {
    this.findPets();
  }

  findPets = async () => {
    const response = await api.get('/pets')
    const pets = response.data;
    this.setState({ pets })
  }

  renderItem = ({ item }) => (
    <View>
      <Text>{item.name}</Text>
      <Text>{item.raca}</Text>
    </View>
  )
  
  render() {
    return (
      <View>
        <Text>Pets</Text>
        {/* {this.state.pets.map(pet => {return <Text key={pet._id}>{pet.name}</Text>})} */}
        <FlatList data={this.state.pets} keyExtractor={item => item._id} renderItem={this.renderItem} />
      </View>
    )
  }

}


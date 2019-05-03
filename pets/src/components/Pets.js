import React, { Component } from 'react'
import { View, Text, FlatList, StyleSheet } from 'react-native'
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
    <View style={styles.petContainer}>
      <Text style={styles.title}>{item.name}</Text>
      <Text style={styles.raca}>{item.raca}</Text>
    </View>
  )
  
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Pets</Text>
        {/* {this.state.pets.map(pet => {return <Text key={pet._id}>{pet.name}</Text>})} */}
        <FlatList data={this.state.pets} keyExtractor={item => item._id} renderItem={this.renderItem}
          style={styles.list} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  header: {
    fontSize: 20,
    marginTop: 30,
    textAlign: 'center'
  },
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA'
  },
  list: {
    padding: 20
  },
  petContainer: {
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#DDD',
    borderRadius: 5,
    padding: 20,
    marginBottom: 20
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333'
  },
  raca: {
    fontSize: 16,
    color: '#999',
    marginTop: 3,
    lineHeight: 24
  }
})
import React, { Component } from 'react'
import { StyleSheet, Text, View, ImageBackground, FlatList } from 'react-native'
import moment from 'moment'
import 'moment/locale/pt-br'
import todayImage from '../../assets/imgs/today.jpg'
import commonStyles from '../commonStyle'
import Task from '../components/Task'

export default class Notebook extends Component {

  state = {
    tasks: [
      { id: Math.random(), desc: 'Varei', estimateAt: null, doneAt: new Data() },
      { id: Math.random(), desc: 'Xuxinha', estimateAt: null, doneAt: null }
    ]
  }

  render() {
    return (
      <View style={styles.container}>
        <ImageBackground source={todayImage} style={styles.background}>
          <View style={styles.titleBar}>
            <Text style={styles.title}>Today</Text>
            <Text style={styles.subtitle}>
              {moment().locale('pt-br').format('ddd, D [de] MMMM')}
            </Text>
          </View>
        </ImageBackground>
        <View style={styles.tasksContainer}>
          <FlatList data={this.state.tasks} keyExtractor={item => `${item.id}`} renderItem={({item}) => <Task {...item} />} />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  background: {
    flex: 3
  },
  titleBar: {
    flex: 1,
    justifyContent: 'flex-end'
  },
  title: {
    color: commonStyles.colors.secondary,
    fontSize: 50,
    marginLeft: 20,
    marginBottom: 10
  },
  subtitle: {
    color: commonStyles.secondary,
    fontSize: 20,
    marginLeft: 20,
    marginBottom: 30
  },
  tasksContainer: {
    flex: 7
  }

})


import React, { Component } from 'react'
import {
  Modal,
  View,
  Text,
  TextInput,
  DatePickerIOS,
  StyleSheet,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Alert,
  DatePickerAndroid,
  Platform
} from 'react-native'
import moment from 'moment'
import commonStyle from '../commonStyle'

const initialState = { desc: '', date: new Date() }

export default class AddTask extends Component {
  state = { ...initialState}

  save = () => {
    if (!this.state.desc.trim()) {
      Alert.alert('Invalid data!', 'Fill the description input')
      return
    }
    const data = { ...this.state }
    this.props.onSave(data)
    this.setState({ ...initialState })
  }

  handleDateAndroidChanged = () => {
    DatePickerAndroid.open({
      date: this.state.date
    }).then(e => {
      if (e.action != DatePickerAndroid.dismissedAction) {
        const momentDate = moment(this.state.date)
        momentDate.date(e.day)
        momentDate.month(e.month)
        momentDate.year(e.year)
        this.setState({ date: momentDate.toDate() })
      }
    })
  }

  render() {
    let datePicker = null
    if (Platform.OS === 'ios') {
      datePicker = <DatePickerIOS mode='date' date={this.state.date} onDateChange={date => this.setState({ date })} />
    } else {
      datePicker = <TouchableOpacity onPress={this.handleDateAndroidChanged}>
        <text style={styles.date}>
          {moment(this.state.date).format('ddd, D [de] MMMM [de] YYYY')}
        </text>
      </TouchableOpacity>
    }
    return (
      <Modal 
        onRequestClose={this.props.onCancel} 
        visible={this.props.isVisible}
        animationType='slide' transparent={true}>
        <TouchableWithoutFeedback onPress={this.props.onCancel}>
          <View style={styles.offset}></View>
        </TouchableWithoutFeedback>
        <View style={styles.container}>
          <Text style={styles.header}>New Task</Text>
          <TextInput placeholder="Description" style={styles.input}
            onChangeText={desc => this.setState({ desc })} value={this.state.desc} />
          {datePicker}
          <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
            <TouchableOpacity onPress={this.props.onCancel}>
              <Text style={styles.button}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.save}>
              <Text style={styles.button}>Save</Text>
            </TouchableOpacity>
          </View>
        </View>
        <TouchableWithoutFeedback onpress={this.props.onCancel}>
          <View style={styles.offset}></View>
        </TouchableWithoutFeedback>
      </Modal>
    )
  }
}

let styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    justifyContent: 'space-between'
  },
  offset: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.7)'
  },
  button: {
    margin: 20,
    marginRight: 30,
    color: commonStyle.colors.default
  },
  header: {
    backgroundColor: commonStyle.colors.default,
    color: commonStyle.colors.secondary,
    textAlign: 'center',
    padding: 15,
    fontSize: 15
  },
  input: {
    width: '90%',
    height: 40,
    marginTop: 10,
    marginLeft: 10,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#e3e3e3',
    borderRadius: 6
  },
  date: {
    fontSize: 20,
    marginLeft: 10,
    marginTop: 10,
    textAlign: 'center'
  }
})
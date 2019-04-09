import React from 'react'
import PropTypes from 'prop-types'
import { Text } from 'react-native'

const PropsValidate = props =>
  <Text style={{fontSize: 70}}>
		{props.label}
		{props.age + 2000}
	</Text>

PropsValidate.defaultProps = {
	label: 'Age: '
}

PropsValidate.propTypes = {
	age: PropTypes.number.isRequired
}

export default PropsValidate


// Packages:
import React from 'react'
import { Text, View } from 'react-native'
import { Shadow } from 'react-native-shadow-2'


// Typescript:
interface PinProps {
  icon: string
  isSelected: boolean
  theme: typeof THEME.DARK | typeof THEME.LIGHT
}


// Constants:
import { THEME } from '../constants/style'

const PIN_SIZE = {
  DEFOCUS: 40,
  FOCUS: 60
}


// Functions:
const Pin = (props: PinProps) => {
  return (
    <Shadow
      distance={ props.isSelected ? 7 : 4 }
      containerStyle={{
        width: (props.isSelected ? PIN_SIZE.FOCUS : PIN_SIZE.DEFOCUS) + 10,
        margin: 10,
        borderRadius: (props.isSelected ? PIN_SIZE.FOCUS : PIN_SIZE.DEFOCUS + 10) / 2,
      }}
      offset={[ 0, props.isSelected ? 4 : 2 ]}
    >
      <View
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: props.isSelected ? PIN_SIZE.FOCUS : PIN_SIZE.DEFOCUS,
          height: props.isSelected ? PIN_SIZE.FOCUS : PIN_SIZE.DEFOCUS,
          borderRadius: (props.isSelected ? PIN_SIZE.FOCUS : PIN_SIZE.DEFOCUS) / 2,
          borderWidth: props.isSelected ? 3 : 0,
          borderColor: props.theme === THEME.DARK ? 'white' : '#222222',
          backgroundColor: props.theme === THEME.DARK ? '#444444' : 'white'
        }}
      >
        <Text style={{ fontSize: props.isSelected ? 25 : 20 }}>{ props.icon }</Text>
      </View>
    </Shadow>
    
  )
}


// Exports:
export default Pin

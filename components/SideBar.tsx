// Packages:
import React from 'react'
import { TouchableOpacity, View } from 'react-native'
import { Shadow } from 'react-native-shadow-2'
import { Ionicons } from '@expo/vector-icons'


// Typescript:
interface SideBarProps {
  theme: typeof THEME.DARK | typeof THEME.LIGHT
  toggleTheme: () => void
}


// Constants:
import { THEME } from '../constants/style'


// Functions:
const SideBar = (props: SideBarProps) => {
  return (
    <View
      style={{
        position: 'absolute',
        top: 110,
        right: 40,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'column',
        width: 25,
        height: 100
      }}
    >
      <Shadow
        distance={ 5 }
        containerStyle={{
          width: 22,
          height: 40,
          margin: 2,
          borderRadius: 11
        }}
        offset={[ 0, 2 ]}
      >
        <TouchableOpacity
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: 40,
            height: 40,
            backgroundColor: props.theme === THEME.DARK ? '#444444' : 'white',
            borderRadius: 20
          }}
          onPress={props.toggleTheme}
        >
          <Ionicons name='options' size={24} color={ props.theme === THEME.DARK ? 'white' : 'black' } />
        </TouchableOpacity>
      </Shadow>
      <Shadow
        distance={ 5 }
        containerStyle={{
          width: 22,
          height: 40,
          margin: 2,
          borderRadius: 11
        }}
        offset={[ 0, 2 ]}
      >
        <TouchableOpacity
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: 40,
            height: 40,
            backgroundColor: props.theme === THEME.DARK ? '#444444' : 'white',
            borderRadius: 20
          }}
          onPress={props.toggleTheme}
        >
          <Ionicons name='navigate-outline' size={20} color={ props.theme === THEME.DARK ? 'white' : 'black' } />
        </TouchableOpacity>
      </Shadow>
    </View>
  )
}


// Exports:
export default SideBar

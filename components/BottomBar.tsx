// Packages:
import React, { useState } from 'react'
import { Dimensions, TouchableHighlight, View } from 'react-native'
import { Octicons, Ionicons } from '@expo/vector-icons'


// Typescript:
interface BottomBarProps {
  theme: typeof THEME.DARK | typeof THEME.LIGHT,
}


// Constants:
import { THEME } from '../constants/style'
const ADD_BUTTON_SIZE = 55


// Functions:
const BottomBar = (props: BottomBarProps) => {
  // State:
  const [selectedTab, setSelectedTab] = useState('')

  // Return:
  return (
    <>
      <View style={{
        position: 'absolute',
        bottom: 20,
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'row',
        width: '100%',
        height: 60,
        backgroundColor: props.theme === THEME.DARK ? 'black' : 'white',
        borderTopWidth: 1,
        borderTopColor: props.theme === THEME.DARK ? '#222222' : '#F3F3F4'
      }}>
        <Ionicons
          name={`compass${ selectedTab !== 'compass' ? '-outline' : ''}`}
          size={30}
          color={ props.theme === THEME.DARK ? 'white' : 'black' }
          onPress={() => setSelectedTab('compass')}
        />
        <Ionicons
          name={`map${ selectedTab !== 'map' ? '-outline' : ''}`}
          size={24}
          color={ props.theme === THEME.DARK ? 'white' : 'black' }
          style={{ marginLeft: -6 }}
          onPress={() => setSelectedTab('map')}
        />
        <View style={{ width: 25, height: 25 }} />
        <Ionicons
          name={`md-notifications${ selectedTab !== 'md-notifications' ? '-outline' : ''}`}
          size={24}
          color={ props.theme === THEME.DARK ? 'white' : 'black' }
          onPress={() => setSelectedTab('md-notifications')}
        />
        <Ionicons
          name={`person${ selectedTab !== 'person' ? '-outline' : ''}`}
          size={24}
          color={ props.theme === THEME.DARK ? 'white' : 'black' }
          style={{ marginRight: 5 }}
          onPress={() => setSelectedTab('person')}
        />
      </View>
      <View style={{ position: 'absolute', bottom: 0, width: '100%', height: 20, backgroundColor: props.theme === THEME.DARK ? 'black' : 'white' }} />
      <TouchableHighlight
        style={{
          position: 'absolute',
          bottom: 35,
          left: (Dimensions.get('window').width - ADD_BUTTON_SIZE) / 2,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: ADD_BUTTON_SIZE,
          height: ADD_BUTTON_SIZE,
          padding: 10,
          backgroundColor: '#FE3139',
          borderRadius: ADD_BUTTON_SIZE / 2
        }}
      >
        <Octicons name='plus' size={20} color='white' />
      </TouchableHighlight>
    </>
  )
}


// Exports:
export default BottomBar

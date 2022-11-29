// Packages:
import React, { useState } from 'react'
import { Dimensions, TextInput, View } from 'react-native'
import { Shadow } from 'react-native-shadow-2'
import { Ionicons } from '@expo/vector-icons'


// Typescript:
interface SearchBarProps {
  theme: typeof THEME.DARK | typeof THEME.LIGHT
  toggleSearchFocus: (value: boolean) => void
}


// Constants:
import { THEME } from '../constants/style'


// Functions:
const SearchBar = (props: SearchBarProps) => {
  // State:
  const [ searchValue, setSearchValue ] = useState('')

  // Return:
  return (
    <View
      style={{
        position: 'absolute',
        zIndex: 2,
        top: 30,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%'
      }}
    >
      <Shadow
        startColor='#0000001F'
        distance={ 5 }
        containerStyle={{
          margin: 10,
          borderRadius: 5,
        }}
        offset={[ 0, 2 ]}
      >
        <View
          style={{
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'row',
            width: Dimensions.get('window').width - 50,
            height: 50,
            padding: 12.5,
            backgroundColor: props.theme === THEME.DARK ? 'black' : 'white',
            borderRadius: 10,
            borderTopWidth: 1,
            borderTopColor: props.theme === THEME.DARK ? '#222222' : '#F3F3F4'
          }}
        >
          <Ionicons name='search' size={20} color='#aeaeae' style={{ marginRight: 10 }} />
          <TextInput
            onChangeText={setSearchValue}
            value={searchValue}
            placeholder='Search here'
            placeholderTextColor={ props.theme === THEME.LIGHT ? '#222222' : '#F3F3F4' }
            style={{ height: '100%', width: '100%' }}
            onFocus={ () => props.toggleSearchFocus(true) }
          />
        </View>
      </Shadow>
    </View>
  )
}


// Exports:
export default SearchBar

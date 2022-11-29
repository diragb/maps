// Packages:
import React, { useRef, useEffect } from 'react'
import { Animated, Dimensions, Keyboard, Text, View } from 'react-native'
import { AntDesign } from '@expo/vector-icons';


// Typescript:
interface SearchResultsProps {
  theme: typeof THEME.DARK | typeof THEME.LIGHT
  toggleSearchFocus: (value: boolean) => void
}


// Constants:
import { THEME } from '../constants/style'


// Functions:
const SearchResults = (props: SearchResultsProps) => {
  // Ref:
  const fadeAnim = useRef(new Animated.Value(0)).current
  const easeUpAnim = useRef(new Animated.Value(30)).current

  // Effects:
  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 250,
      useNativeDriver: true
    }).start()
    Animated.timing(easeUpAnim, {
      toValue: 0,
      duration: 250,
      useNativeDriver: true
    }).start()
  }, [ fadeAnim, easeUpAnim ])

  // Functions:
  const closeSearchResults = async () => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 250,
      useNativeDriver: true
    }).start()
    await new Promise(r => setTimeout(r, 250))
    Keyboard.dismiss()
    props.toggleSearchFocus(false)
  }

  // Return:
  return (
    <Animated.View
      style={{
        position: 'absolute',
        top: 0,
        zIndex: 1,
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height + 50,
        opacity: fadeAnim,
        backgroundColor: props.theme === THEME.DARK ? '#444444' : 'white'
      }}
    >
      <View
        style={{
          position: 'absolute',
          top: 120,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          width: '100%',
        }}
      >
        {
          [ ...Array(4) ].map((_v, i) => (
            <Animated.View
              key={i}
              style={{
                display: 'flex',
                justifyContent: 'center',
                width: '90%',
                height: 70,
                marginBottom: 20,
                padding: 12.5,
                borderRadius: 10,
                transform: [
                  { translateY: easeUpAnim }
                ],
                backgroundColor: props.theme === THEME.DARK ? '#747474' : '#dadada'
              }}
            >
              <Text style={{ fontSize: 16, fontWeight: '700', color: props.theme === THEME.DARK ? 'white' : 'black' }}>Result #{i + 1}</Text>
              <Text style={{ fontSize: 12, color: props.theme === THEME.DARK ? '#bebebe' : '#808080' }}>Details about the result..</Text>
            </Animated.View>
          ))
        }
        <AntDesign
          name='closecircle'
          size={30}
          color={ props.theme === THEME.DARK ? '#808080' : '#808080' }
          onPress={closeSearchResults}
        />
      </View>
    </Animated.View>
  )
}


// Exports:
export default SearchResults

// Packages:
import React from 'react'
import { Dimensions, Image, Text, View } from 'react-native'
import { Shadow } from 'react-native-shadow-2'


// Typescript:
interface BottomBarProps {
  theme: typeof THEME.DARK | typeof THEME.LIGHT
  currentIcon: string
}


// Constants:
import { THEME } from '../constants/style'


// Functions:
const InfoCard = (props: BottomBarProps) => {
  return (
    <View
      style={{
        position: 'absolute',
        bottom: 100,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%'
      }}
    >
      <Shadow
        startColor='#0000000F'
        distance={ 10 }
        containerStyle={{
          margin: 10,
          borderRadius: 5,
        }}
        offset={[ 0, 5 ]}
      >
        <View
          style={{
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'row',
            width: Dimensions.get('window').width - 50,
            height: 80,
            padding: 12.5,
            backgroundColor: props.theme === THEME.DARK ? 'black' : 'white',
            borderRadius: 10,
            borderTopWidth: 1,
            borderTopColor: props.theme === THEME.DARK ? '#222222' : '#F3F3F4'
          }}
        >
          <Image
            source={{ uri: 'https://images.pexels.com/photos/1089932/pexels-photo-1089932.jpeg?auto=compress&cs=tinysrgb&w=400' }}
            style={{
              width: 55,
              height: 55,
              borderRadius: 10,
            }}
          />
          <View
            style={{
              display: 'flex',
              justifyContent: 'center',
              flexDirection: 'column',
              height: '100%',
              marginLeft: 12.5
            }}
          >
            <Text style={{ fontSize: 12 }}>{props.currentIcon}</Text>
            <Text style={{ fontSize: 16, fontWeight: '700', color: props.theme === THEME.DARK ? 'white' : 'black' }}>Location Title</Text>
            <Text style={{ fontSize: 12, color: '#808080' }}>Location Subtitle</Text>
          </View>
        </View>
      </Shadow>
    </View>
  )
}


// Exports:
export default InfoCard

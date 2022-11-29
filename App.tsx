// Packages:
import { useState, useEffect, useCallback } from 'react'
import { View } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import MapView, { Marker } from 'react-native-maps'
import SystemNavigationBar from 'react-native-system-navigation-bar'


// Constants:
import { ITEMS, MAP_STYLE } from './constants/maps'
import { THEME } from './constants/style'


// Components:
import BottomBar from './components/BottomBar'
import Pin from './components/Pin'
import SideBar from './components/SideBar'
import InfoCard from './components/InfoCard'
import SearchBar from './components/SearchBar'
import SearchResults from './components/SearchResults'


// Functions:
const App = () => {
  // State:
  const [ theme, setTheme ] = useState(THEME.LIGHT)
  const [ selectedItem, setSelectedItem ] = useState<string>()
  const [ searchFocus, setSearchFocus ] = useState(false)

  // Effects:
  useEffect(() => {
    try {
      if (SystemNavigationBar && SystemNavigationBar.immersive) SystemNavigationBar.immersive()
    } catch(e) {
      console.error('Encountered a system error while trying to conduct fullscreen mode.', e)
    }
  }, [])

  // Functions:
  const toggleTheme = useCallback(() => {
    setTheme(theme === THEME.DARK ? THEME.LIGHT : THEME.DARK)
  }, [theme])

  const focusOnItem = useCallback((itemKey: string) => {
    setSelectedItem(itemKey)
  }, [])

  const toggleSearchFocus = useCallback((newFocus: boolean) => {
    setSearchFocus(newFocus)
  }, [])

  // Return:
  return (
    <View>
      <StatusBar style='auto' hidden />
      <MapView
        customMapStyle={MAP_STYLE[theme]}
        style={{
          width: '100%',
          height: '100%'
        }}
        initialRegion={{
          latitude: 50.092603,
          longitude: 14.445996,
          latitudeDelta: 0.00922,
          longitudeDelta: 0.00421,
        }}
        onPress={() => setSelectedItem(undefined)}
      >
        {
          ITEMS.map(item => (
            <Marker key={item.key} coordinate={item.coordinate} onPress={() => focusOnItem(item.key)}>
              <Pin icon={item.icon} isSelected={selectedItem === item.key} theme={theme} />
            </Marker>
          ))
        }
      </MapView>
      <SideBar theme={theme} toggleTheme={toggleTheme} />
      {
        selectedItem && <InfoCard theme={theme} currentIcon={ITEMS.find(item => item.key === selectedItem)?.icon ?? ''} />
      }
      <BottomBar theme={theme} />
      { searchFocus && <SearchResults theme={theme} toggleSearchFocus={toggleSearchFocus} /> }
      <SearchBar theme={theme} toggleSearchFocus={toggleSearchFocus} />
    </View>
  )
}


// Exports:
export default App

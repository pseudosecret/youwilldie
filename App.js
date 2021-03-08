import React, { useState } from 'react'
import { View, Text, AppRegistry } from 'react-native'
import * as Font from 'expo-font'
import AppLoading from 'expo-app-loading'
import YWDNavigator from './navigation/YWDNavigator'


function App() {
  const [assetsLoaded, setAssetsLoaded] = useState(false)
  const [fontLoaded, setFontLoaded] = useState(false);
  
  const fetchFonts = () => {
    return Font.loadAsync({
      'alice': require('./assets/fonts/Alice-Regular.ttf'),
      'angltrr': require('./assets/fonts/angltrr.ttf'),
      'gabriela': require('./assets/fonts/Gabriela-Regular.ttf'),
      'october': require('./assets/fonts/October-Crow.ttf')
    });
  };

  const _loadAssetsAsync = async() => {
    const imageAssets = cacheImages([
      require('./assets/images/title.png'), 
      require('./assets/images/spooky-title.jpg')
    ])
    const fontAssets = cacheFonts([
      {'alice': require('./assets/fonts/Alice-Regular.ttf')},
      {'angltrr': require('./assets/fonts/angltrr.ttf')},
      {'gabriela': require('./assets/fonts/Gabriela-Regular.ttf')},
      {'october': require('./assets/fonts/October-Crow.ttf')}
    ])
    await Promise.all([...imageAssets, ...fontAssets]) 
  }
  
  if(!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setFontLoaded(true)}
        onError={console.warn} />) 
  } else {
    return <YWDNavigator />
  }
}


function cacheImages(images) {
  return images.map(image => {
    if (typeof image === 'string') {
      return Image.prefetch(image);
    } else {
      return Asset.fromModule(image).downloadAsync();
    }
  });
}

function cacheFonts(fonts) {
  return fonts.map(font => Font.loadAsync(font));
}


AppRegistry.registerComponent("App", () => App)

export default App;
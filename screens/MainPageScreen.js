import React, { useState } from 'react'
import { View, Image, StyleSheet, ImageBackground } from 'react-native'
import MainMenuNavButton from '../components/MainMenuNavButton'
import PersonalDataModal from '../components/PersonalDataModal'

const MainPageScreen = props => {
    const [isEnterPersonalDataMode, setIsEnterPersonalDataMode] = useState(false)

    const exitPersonalDataMode = () => {
        setIsEnterPersonalDataMode(false)
    }

    return (
        <View style={styles.screen}>
            <ImageBackground
                source={require('../assets/images/spooky-title.jpg')}
                style={styles.bgimage}>
 
                <PersonalDataModal
                style={styles.pdm}
                visible={isEnterPersonalDataMode} 
                onExitMode={exitPersonalDataMode} />

                <View>
                    <Image  
                        style={styles.title}
                        source={require('../assets/images/title.png')} />
                </View>
                <View>
                    <MainMenuNavButton 
                        menuItemText='Select Story'
                        onPress={() => {
                            props.navigation.navigate({name: 'SelectStory'})
                        }} 
                    />
                </View>
                <View>
                    <MainMenuNavButton 
                        menuItemText='Personal Data'
                        onPress={() => setIsEnterPersonalDataMode(true)}
                    />
                </View>
                <View>
                    <MainMenuNavButton 
                        menuItemText='Achievements'
                        onPress={() => {
                            props.navigation.navigate({name: 'Achievements'})
                        }}
                    />
                </View>
                <View>
                    <MainMenuNavButton 
                        menuItemText='About the Project' 
                        onPress={() => {
                            props.navigation.navigate({name: 'About'})
                        }}
                    />
                </View>
                <View>
                    <MainMenuNavButton 
                        menuItemText='Credits' 
                        onPress={() => {
                            props.navigation.navigate({name: 'Credits'})
                        }} 
                    />
                </View>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: '#121111',
        justifyContent: 'center',
        alignItems: 'center'
    },
    pdm: {
    },
    title: {
        height: 167,
        width: 178
    },
    bgimage: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default MainPageScreen
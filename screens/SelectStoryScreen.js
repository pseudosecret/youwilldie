import React from 'react'
import { View, Text, Image, Button, StyleSheet, ImageBackground } from 'react-native'
import StorySelectCarousel from '../components/StorySelectCarousel'
import { useNavigation } from '@react-navigation/native'

const SelectStoryScreen = props => {
    const navigation = useNavigation()
    return (
        <View style={styles.screen}>
            <ImageBackground
                source={require('../assets/images/smoke.jpg')}
                style={styles.bgimage}>
                <StorySelectCarousel 
                    nav={navigation} />
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
    },
    bgimage: {
        width: '100%',
        height: '100%',
    }
})

export default SelectStoryScreen
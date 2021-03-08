import React, { useState } from 'react'
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { useNavigation } from '@react-navigation/native'
import StoryOptionModal from '../components/StoryOptionModal'

const StoryDisplayScreen = props => {
    const navigation = useNavigation()
    const theStory = require('../data/TestStory.json')
    const [theArc, setTheArc] = useState('intro')
    const populateText = () => {
        return theStory[theArc].story.map((paragraph, i) => (
            <View key={i}>
                <Text style={styles.body} key={i}>{paragraph}</Text>
            </View>
        ))
    }

    const [isStoryOptionMode, setStoryOptionMode] = useState(false)
    const exitStoryOptionMode = () => {
        setStoryOptionMode(false)
    }

    const setArcAndExitStoryOptionMode = arc => {
        setTheArc(arc)
        setStoryOptionMode(false)
    }

    const optionsOrExitToMainMenu = () => {
        if (theStory[theArc].options.length === 0) {
            return (
                <TouchableOpacity style={styles.promptNextArc} onPress={() => navigation.reset({
                    index: 0,
                    routes: [{name: 'MainPage'}],
                })}>
                    <Text style={styles.promptNextArcText}>Return to the Main Menu</Text>
                </TouchableOpacity>
            )
        } else {
            return (
                <TouchableOpacity style={styles.promptNextArc} onPress={() => setStoryOptionMode(true)}>
                    <Text style={styles.promptNextArcText}>What do you do?</Text>
                </TouchableOpacity>
            )
        }
    }

    return (
        <View style={styles.screen}>
            <StoryOptionModal
                style={styles.som}
                visible={isStoryOptionMode}
                storyOptions={theStory[theArc].options}
                updateArcAndExitMode={setArcAndExitStoryOptionMode}
                onExitMode={exitStoryOptionMode} />
            <LinearGradient colors={['#330300', '#030000']} style={styles.gradient}>
                <ScrollView>
                    <View>
                        {populateText()}
                    </View>
                    <View style={styles.promptNextArcArea}>
                        {optionsOrExitToMainMenu()}
                    </View>
                </ScrollView>
            </LinearGradient>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: '#121111',
        height: '100%',
        width: '100%',
    },
    som: {

    },
    gradient: {
        flex: 1,
        height: '100%',
        width: '100%',
        padding: 15
    },
    body: {
        color: '#EFEFEF',
        fontFamily: 'alice',
        fontSize: 20,
        marginBottom: 10
    },
    promptNextArcArea: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30,
        padding: 10
    },
    promptNextArc: {
        backgroundColor: '#330000',
        padding: 10,
        borderRadius: 50

    },
    promptNextArcText: {
        color: '#EFEFEF',
        fontFamily: 'gabriela',
        fontSize: 26
    },
})

export default StoryDisplayScreen
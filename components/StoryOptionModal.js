import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Modal } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'

const StoryOptionModal = props => {

    const options = () => {
        return props.storyOptions.map((opt, i) => (
                <TouchableOpacity 
                    key={i} 
                    style={styles.optionTouchable}
                    onPress={() => props.updateArcAndExitMode(opt.arc)}>
                    <Text key={i} style={styles.optionText}>{opt.text}</Text>
                </TouchableOpacity>
        ))
    }

    return (
        <Modal
            visible={props.visible}
            animationType='slide'
            style={styles.inputContainer}>
                <LinearGradient colors={['#660f09', '#db1200', '#240300']} style={styles.gradient}>
                    <View style={styles.optionsArea}>
                        {options()}
                    </View>
                    <View style={styles.revisitStoryArea}>
                        <TouchableOpacity style={styles.revisitStoryTouchable} onPress={props.onExitMode}>
                            <Text style={styles.revisitStoryText}>Revisit what you just read?</Text>
                        </TouchableOpacity>
                    </View>
                </LinearGradient>
        </Modal>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: '#121111',
        height: '100%',
        width: '100%',
    },
    gradient: {
        flex: 1,
        height: '100%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    optionsArea: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    optionTouchable: {
        backgroundColor: 'darkred',
        padding: 7,
        borderRadius: 50
    },
    optionText: {
        color: '#EFEFEF',
        fontFamily: 'alice',
        fontSize: 22,
        padding: 10,
    },
    revisitStoryArea: {
        marginTop: 30
    },
    revisitStoryText: {
        color: '#EFEFEF',
        fontFamily: 'gabriela',
        fontSize: 22,
    },
})

export default StoryOptionModal
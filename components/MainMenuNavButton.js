import React from 'react'
import { Text, StyleSheet, TouchableOpacity } from 'react-native'

const MainMenuNavButton = ({onPress, menuItemText}) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <Text style={styles.buttonText}>{menuItemText}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    buttonText: {
        fontFamily: 'october',
        fontSize: 32,
        color: '#EFEFEF',
        marginTop: 20,
    }
})

export default MainMenuNavButton
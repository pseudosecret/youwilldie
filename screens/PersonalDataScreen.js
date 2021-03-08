import React, { useState } from 'react'
import { View, Text, Button, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
// import AsyncStorage from 'async-storage'
import DateTimePickerModal from 'react-native-modal-datetime-picker'


const PersonalDataScreen = props => {
    const [enteredFirstName, setEnteredFirstName] = useState('')
    const [enteredLastName, setEnteredLastName] = useState('')
    const [enteredDay, setEnteredDay] = useState('')
    const [enteredMonth, setEnteredMonth] = useState('')
    const [enteredYear, setEnteredYear] = useState('')
    const [enteredGender, setEnteredGender] = useState('')
    const [enteredPronouns, setEnteredPronouns] = useState('')

    const [isDatePickerVisible, setDatePickerVisible] = useState(false)

    const showDatePicker = () => {
        setDatePickerVisible(true)
    }

    const hideDatePicker = () => {
        setDatePickerVisible(false)
    }

    const handleConfirm = (date) => {
        hideDatePicker()
    }
    const savePersonalData = (enteredFirstName, enteredLastName, enteredDay,
        enteredMonth, enteredYear, enteredGender, enteredPronouns) => {
        // do the thing
        const jsonData = {
            'firstName': enteredFirstName,
            'lastName': enteredLastName,
            'dob': enteredYear + enteredMonth + enteredDay,
            'gender': enteredGender,
            'pronouns': enteredPronouns
        }
        /**        try {
                    const jsonValue = JSON.stringify(jsonData)
                    await AsyncStorage.setItem('personalData', jsonValue)
                } catch (e) {
                    console.log(e)
                    throw e
                } */
    }

    return (
        <View style={styles.screen}>
            <LinearGradient colors={['#660f09', '#db1200', '#240300']} style={styles.gradient}>
                <View style={styles.formArea}>
                    <View style={styles.labelAndInputArea}>
                        <Text style={styles.label}>Forename</Text>
                        <TextInput
                            placeholder=''
                            style={styles.textInput}
                            onChangeText={text => setEnteredFirstName(text)}
                            value={enteredFirstName}
                        />
                    </View>
                    <View style={styles.labelAndInputArea}>
                        <Text style={styles.label}>Surname</Text>
                        <TextInput
                            placeholder=''
                            style={styles.textInput}
                            onChangeText={text => setEnteredLastName(text)}
                            value={enteredLastName}
                        />
                    </View>
                    <TouchableOpacity onPress={showDatePicker}><Text style={styles.mainDobLabel}>Enter Date of Birth</Text></TouchableOpacity>
                    <DateTimePickerModal
                        isVisible={isDatePickerVisible}
                        mode='date'
                        value={new Date('2000-01-01')}
                        minimumDate={new Date('1900-01-01')}
                        maximumDate={new Date('2021-01-01')}
                        onConfirm={handleConfirm}
                        onCancel={hideDatePicker} />
                    <View style={styles.labelAndInputArea}>
                        <Text style={styles.label}>Gender</Text>
                        <TextInput
                            placeholder=''
                            style={styles.textInput}
                            onChangeText={text => setEnteredGender(text)}
                            value={enteredGender}
                        />
                    </View>
                    <View style={styles.saveAndExitButtonArea}>
                        <Button title='Save' style={styles.saveButton} onPress={() => {
                            savePersonalData()
                            props.navigation.goBack()
                        }} />
                    </View>
                </View>
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
    gradient: {
        flex: 1,
        height: '100%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 15
    },
    flexArea: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%'
    },
    formArea: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    labelAndInputArea: {
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    mainDobLabel: {
        color: '#EFEFEF',
        fontFamily: 'angltrr',
        fontWeight: 'bold',
        fontSize: 18,
        padding: 10,
        alignContent: 'center'
    },
    dobColumnArea: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10
    },
    saveAndExitButtonArea: {
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    label: {
        color: '#EFEFEF',
        fontFamily: 'angltrr',
        fontWeight: 'bold',
        fontSize: 18,
        padding: 10,
        flex: 2
    },
    textInput: {
        color: '#EFEFEF',
        fontFamily: 'angltrr',
        fontSize: 18,
        borderBottomColor: '#E8E8E8',
        borderRightColor: '#E8E8E8',
        borderBottomWidth: 1,
        borderRightWidth: 1,
        borderTopRightRadius: 10,
        marginBottom: 10,
        flex: 3
    },
    saveButton: {
        marginLeft: 20
    },
    exitButton: {
        marginRight: 20
    }
})

export default PersonalDataScreen
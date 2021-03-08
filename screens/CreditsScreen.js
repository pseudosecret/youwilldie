import React from 'react'
import { ScrollView, View, Text, StyleSheet } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'

const CreditsScreen = props => {
    return (
        <ScrollView style={styles.screen}>
            <LinearGradient colors={['#330300', '#030000']} style={styles.gradient}>
                <View style={styles.partOfAppArea}>
                    <Text style={styles.partOfApp}>The Project Itself</Text>
                    <View style={styles.roleAndCreditArea}>
                        <Text style={styles.roleText}>Original Idea</Text>
                        <Text style={styles.creditText}>Forrest Wilbur</Text>
                    </View>
                    <View style={styles.roleAndCreditArea}>
                        <Text style={styles.roleText}>Creator</Text>
                        <Text style={styles.creditText}>Forrest Wilbur</Text>
                    </View>
                    <View style={styles.roleAndCreditArea}>
                        <Text style={styles.roleText}>Director</Text>
                        <Text style={styles.creditText}>Forrest Wilbur</Text>
                    </View>
                    <View style={styles.roleAndCreditArea}>
                        <Text style={styles.roleText}>Developer</Text>
                        <Text style={styles.creditText}>Forrest Wilbur</Text>
                    </View>
                    <View style={styles.roleAndCreditArea}>
                        <Text style={styles.roleText}>Leader Writer</Text>
                        <Text style={styles.creditText}>Forrest Wilbur</Text>
                    </View>
                    <View style={styles.roleAndCreditArea}>
                        <Text style={styles.roleText}>Lead Editor</Text>
                        <Text style={styles.creditText}>Forrest Wilbur</Text>
                    </View>
                    <View style={styles.extraSpace}></View>
                </View>
                <View style={styles.partOfAppArea}>
                    <Text style={styles.partOfApp}>Story No. 1</Text>
                    <View style={styles.roleAndCreditArea}>
                        <Text style={styles.roleText}>Origin</Text>
                        <Text style={styles.creditText}>Benjamin Wilbur</Text>
                    </View>
                    <View style={styles.roleAndCreditArea}>
                        <Text style={styles.roleText}>Author</Text>
                        <Text style={styles.creditText}>Benjamin Wilbur</Text>
                    </View>
                    <View style={styles.roleAndCreditArea}>
                        <Text style={styles.roleText}>Editor</Text>
                        <Text style={styles.creditText}>Forrest Wilbur</Text>
                    </View>
                    <View style={styles.roleAndCreditArea}>
                        <Text style={styles.roleText}>Implemented</Text>
                        <Text style={styles.creditText}>Forrest Wilbur</Text>
                    </View>
                    <View style={styles.extraSpace}></View>
                </View>
                <View style={styles.partOfAppArea}>
                    <Text style={styles.partOfApp}>Story No. 2</Text>
                    <View style={styles.roleAndCreditArea}>
                        <Text style={styles.roleText}>Origin</Text>
                        <Text style={styles.creditText}>Benjamin Wilbur</Text>
                    </View>
                    <View style={styles.roleAndCreditArea}>
                        <Text style={styles.roleText}>Author</Text>
                        <Text style={styles.creditText}>Forrest Wilbur</Text>
                    </View>
                    <View style={styles.roleAndCreditArea}>
                        <Text style={styles.roleText}>Editor</Text>
                        <Text style={styles.creditText}>Forrest Wilbur</Text>
                    </View>
                    <View style={styles.roleAndCreditArea}>
                        <Text style={styles.roleText}>Implemented</Text>
                        <Text style={styles.creditText}>Forrest Wilbur</Text>
                    </View>
                    <View style={styles.extraSpace}></View>
                </View>
                <View style={styles.partOfAppArea}>
                    <Text style={styles.partOfApp}>Story No. 3</Text>
                    <View style={styles.roleAndCreditArea}>
                        <Text style={styles.roleText}>Origin</Text>
                        <Text style={styles.creditText}>Keelee James</Text>
                    </View>
                    <View style={styles.roleAndCreditArea}>
                        <Text style={styles.roleText}>Author</Text>
                        <Text style={styles.creditText}>Forrest Wilbur</Text>
                    </View>
                    <View style={styles.roleAndCreditArea}>
                        <Text style={styles.roleText}>Editor</Text>
                        <Text style={styles.creditText}>Forrest Wilbur</Text>
                    </View>
                    <View style={styles.roleAndCreditArea}>
                        <Text style={styles.roleText}>Implemented</Text>
                        <Text style={styles.creditText}>Forrest Wilbur</Text>
                    </View>
                    <View style={styles.extraSpace}></View>
                </View>
                <View style={styles.partOfAppArea}>
                    <Text style={styles.partOfApp}>Story No. 4</Text>
                    <View style={styles.roleAndCreditArea}>
                        <Text style={styles.roleText}>Origin</Text>
                        <Text style={styles.creditText}>Some Person on Fiver</Text>
                    </View>
                    <View style={styles.roleAndCreditArea}>
                        <Text style={styles.roleText}>Author</Text>
                        <Text style={styles.creditText}>Benjamin Wilbur</Text>
                    </View>
                    <View style={styles.roleAndCreditArea}>
                        <Text style={styles.roleText}>Editor</Text>
                        <Text style={styles.creditText}>Forrest Wilbur</Text>
                    </View>
                    <View style={styles.roleAndCreditArea}>
                        <Text style={styles.roleText}>Implemented</Text>
                        <Text style={styles.creditText}>Forrest Wilbur</Text>
                    </View>
                    <View style={styles.extraSpace}></View>
                </View>
                <View style={styles.partOfAppArea}>
                    <Text style={styles.partOfApp}>Story No. 5</Text>
                    <View style={styles.roleAndCreditArea}>
                        <Text style={styles.roleText}>Origin</Text>
                        <Text style={styles.creditText}>Benjamin Wilbur</Text>
                    </View>
                    <View style={styles.roleAndCreditArea}>
                        <Text style={styles.roleText}>Author</Text>
                        <Text style={styles.creditText}>Benjamin Wilbur</Text>
                    </View>
                    <View style={styles.roleAndCreditArea}>
                        <Text style={styles.roleText}>Editor</Text>
                        <Text style={styles.creditText}>Forrest Wilbur</Text>
                    </View>
                    <View style={styles.roleAndCreditArea}>
                        <Text style={styles.roleText}>Implemented</Text>
                        <Text style={styles.creditText}>Forrest Wilbur</Text>
                    </View>
                    <View style={styles.extraSpace}></View>
                </View>
                <View style={styles.partOfAppArea}>
                    <View style={styles.singleItemArea}>
                    <Text style={styles.partOfApp}>Special Thanks</Text>
                    </View>
                    <View style={styles.singleItemArea}>
                    <Text style={styles.creditText}>Benjamin Wilbur</Text>
                    </View>
                    <View style={styles.singleItemArea}>
                    <Text style={styles.creditText}>Fred Wilbur</Text>
                    </View>
                    <View style={styles.singleItemArea}>
                    <Text style={styles.creditText}>Keelee James</Text>
                    </View>
                    <View style={styles.extraSpace}></View>
                </View>
            </LinearGradient>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: '#121111',
    },
    gradient: {
        padding: 15
    },
    partOfAppArea: {
        marginBottom: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    partOfApp: {
        color: '#EFEFEF',
        fontFamily: 'gabriela',
        fontWeight: 'bold',
        fontSize: 30
    },
    roleAndCreditArea: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 8,
        marginBottom: 8
    },
    roleText: {
        color: "#EFEFEF",
        fontFamily: 'gabriela',
        fontSize: 20,
        marginLeft: 10,
        marginRight: 10
    },
    creditText: {
        color: '#EFEFEF',
        fontFamily: 'alice',
        fontSize: 20,
        marginLeft: 10,
        marginRight: 10
    }, 
    singleItemArea: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 8,
        marginBottom: 8
    },
    extraSpace: {
        marginBottom: 15
    }
})

export default CreditsScreen
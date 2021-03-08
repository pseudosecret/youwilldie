import React from 'react'
import { View, ScrollView, Text, Image, Button, StyleSheet } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'

const AchievementsScreen = props => {
    return (
        <View style={styles.screen}>
            <LinearGradient colors={['#330300', '#030000']} style={styles.gradient}>
                <ScrollView>
                <View style={styles.storyArea}>
                    <View style={styles.storyTitleArea}>
                        <Text style={styles.storyTitle}>Story No. 1</Text>
                    </View>
                    <View style={styles.statsArea}>
                        <View style={styles.pathsArea}>
                            <Text style={styles.label}>Paths Explored: </Text>
                        </View>
                        <View styles={styles.metricArea}>
                            <Text style={styles.metric}>10%</Text>
                        </View>
                    </View>
                    <View style={styles.statsArea}>
                        <View style={styles.pathsArea}>
                            <Text style={styles.label}>Times Died:</Text>
                        </View>
                        <View styles={styles.metricArea}>
                            <Text style={styles.metric}>3</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.storyArea}>
                    <View style={styles.storyTitleArea}>
                        <Text style={styles.storyTitle}>Story No. 2</Text>
                    </View>
                    <View style={styles.statsArea}>
                        <View style={styles.pathsArea}>
                            <Text style={styles.label}>Paths Explored:</Text>
                        </View>
                        <View styles={styles.metricArea}>
                            <Text style={styles.metric}>50%</Text>
                        </View>
                    </View>
                    <View style={styles.statsArea}>
                        <View style={styles.pathsArea}>
                            <Text style={styles.label}>Times Died:</Text>
                        </View>
                        <View styles={styles.metricArea}>
                            <Text style={styles.metric}>8</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.storyArea}>
                    <View style={styles.storyTitleArea}>
                        <Text style={styles.storyTitle}>Story No. 3</Text>
                    </View>
                    <View style={styles.statsArea}>
                        <View style={styles.pathsArea}>
                            <Text style={styles.label}>Paths Explored:</Text>
                        </View>
                        <View styles={styles.metricArea}>
                            <Text style={styles.metric}>0%</Text>
                        </View>
                    </View>
                    <View style={styles.statsArea}>
                        <View style={styles.pathsArea}>
                            <Text style={styles.label}>Times Died:</Text>
                        </View>
                        <View styles={styles.metricArea}>
                            <Text style={styles.metric}>0</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.storyArea}>
                    <View style={styles.storyTitleArea}>
                        <Text style={styles.storyTitle}>Story No. 4</Text>
                    </View>
                    <View style={styles.statsArea}>
                        <View style={styles.pathsArea}>
                            <Text style={styles.label}>Paths Explored:</Text>
                        </View>
                        <View styles={styles.metricArea}>
                            <Text style={styles.metric}>0%</Text>
                        </View>
                    </View>
                    <View style={styles.statsArea}>
                        <View style={styles.pathsArea}>
                            <Text style={styles.label}>Times Died:</Text>
                        </View>
                        <View styles={styles.metricArea}>
                            <Text style={styles.metric}>0</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.storyArea}>
                    <View style={styles.storyTitleArea}>
                        <Text style={styles.storyTitle}>Story No. 5</Text>
                    </View>
                    <View style={styles.statsArea}>
                        <View style={styles.pathsArea}>
                            <Text style={styles.label}>Paths Explored:</Text>
                        </View>
                        <View styles={styles.metricArea}>
                            <Text style={styles.metric}>0%</Text>
                        </View>
                    </View>
                    <View style={styles.statsArea}>
                        <View style={styles.pathsArea}>
                            <Text style={styles.label}>Times Died:</Text>
                        </View>
                        <View styles={styles.metricArea}>
                            <Text style={styles.metric}>0</Text>
                        </View>
                    </View>
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
    gradient: {
        flex: 1,
        height: '100%',
        width: '100%',
        padding: 15
    },
    storyArea: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 15
    },
    storyTitleArea: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    storyTitle: {
        color: '#EFEFEF',
        fontFamily: 'alice',
        fontSize: 28
    },
    statsArea: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    metricArea: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    label: {
        color: '#EFEFEF',
        fontFamily: 'gabriela',
        fontSize: 20,
        marginLeft: 10,
        marginRight: 10
    },
    metric: {
        color: '#EFEFEF',
        fontFamily: 'alice',
        fontSize: 20,
        marginLeft: 10,
        marginRight: 10
    },
})

export default AchievementsScreen
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import AboutScreen from '../screens/AboutScreen'
import AchievementsScreen from '../screens/AchievementsScreen'
import CreditsScreen from '../screens/CreditsScreen'
import MainPageScreen from '../screens/MainPageScreen'
import SelectStoryScreen from '../screens/SelectStoryScreen'
import StoryDisplayScreen from '../screens/StoryDisplayScreen'

const Stack = createStackNavigator()

const YWDNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName='MainPage'>
                <Stack.Screen
                    name='MainPage'
                    component={MainPageScreen}
                    options={{
                        headerShown: false,
                        headerMode: 'screen'
                    }}
                />
                <Stack.Screen
                    name='SelectStory'
                    component={SelectStoryScreen}
                    options={{
                        title: 'Select Story',
                        headerStyle: {
                            backgroundColor: '#000000'
                        },
                        headerTintColor: '#EFEFEF',
                        headerTitleStyle: {
                            fontFamily: 'gabriela',
                            fontSize: 32,
                        },
                        headerTitleAlign: 'center',
                    }}
                />
                <Stack.Screen
                    name='Credits'
                    component={CreditsScreen}
                    options={{
                        headerStyle: {
                            backgroundColor: '#000000'
                        },
                        headerTintColor: '#EFEFEF',
                        headerTitleStyle: {
                            fontFamily: 'gabriela',
                            fontSize: 32,
                        },
                        headerTitleAlign: 'center',
                    }}
                />
                <Stack.Screen
                    name='Achievements'
                    component={AchievementsScreen}
                    options={{
                        title: 'Achievements',
                        headerStyle: {
                            backgroundColor: '#000000'
                        },
                        headerTintColor: '#EFEFEF',
                        headerTitleStyle: {
                            fontFamily: 'gabriela',
                            fontSize: 32,
                        },
                        headerTitleAlign: 'center',
                    }}
                />
                <Stack.Screen
                    name='About'
                    component={AboutScreen}
                    options={{
                        title: 'About Us',
                        headerStyle: {
                            backgroundColor: '#000000'
                        },
                        headerTintColor: '#EFEFEF',
                        headerTitleStyle: {
                            fontFamily: 'gabriela',
                            fontSize: 32,
                        },
                        headerTitleAlign: 'center',
                    }}
                />
                <Stack.Screen
                    name='StoryDisplay'
                    component={StoryDisplayScreen}
                    options={{
                        headerStyle: {
                            backgroundColor: '#000000'
                        },
                        headerTintColor: '#EFEFEF',
                        headerTitleStyle: {
                            fontFamily: 'gabriela',
                            fontSize: 32,
                        },
                        headerTitleAlign: 'center',
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default YWDNavigator
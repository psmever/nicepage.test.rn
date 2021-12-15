// ./navigation/TabNavigator.js

import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import MainStackNavigator from './MainStackNavigator';
import ContactStackNavigator from './ContactStackNavigator';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: '#1e4de9',
            }}>
            <Tab.Screen
                name="Home"
                component={MainStackNavigator}
                options={{
                    tabBarLabel: 'home',
                    tabBarIcon: ({color, size}) => (
                        <MaterialCommunityIcons
                            name="home"
                            color={color}
                            size={size}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name="Contact"
                component={ContactStackNavigator}
                options={{
                    tabBarLabel: 'Updates',
                    tabBarIcon: ({color, size}) => (
                        <MaterialCommunityIcons
                            name="bell"
                            color={color}
                            size={size}
                        />
                    ),
                }}
            />
        </Tab.Navigator>
    );
};

export default BottomTabNavigator;

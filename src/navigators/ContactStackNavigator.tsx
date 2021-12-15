// ./navigation/StackNavigator.js

import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Posts from '../screens/posts';

const Stack = createStackNavigator();

const screenOptionStyle = {
    headerStyle: {
        backgroundColor: '#9AC4F8',
    },
    headerTintColor: 'white',
    headerBackTitle: 'Back',
};

export default function ContactStackNavigator() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}>
            <Stack.Screen name="Posts" component={Posts} />
        </Stack.Navigator>
    );
}

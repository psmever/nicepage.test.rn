import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/home';
import Posts from '../screens/posts';

const MainStack = createStackNavigator();

export default function MainStackNavigator() {
    return (
        <MainStack.Navigator
            screenOptions={{
                headerShown: false,
            }}>
            <MainStack.Screen
                name={'Home'}
                component={Home}
                options={{
                    title: 'Home',
                }}
            />

            <MainStack.Screen
                name={'Posts'}
                component={Posts}
                options={{
                    title: 'Posts',
                }}
            />
        </MainStack.Navigator>
    );
}

import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../Screens/Home';
import Posts from '../Screens/Posts';

const MainStack = createStackNavigator();

export default function MainStackNavigator() {
    return (
        <MainStack.Navigator>
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

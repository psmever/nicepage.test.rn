/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import MainStackNavigator from './src/navigators/MainStackNavigator';
import DrawerNavigator from './src/navigators/DrawerNavigator';

const RootStack = createStackNavigator();

const App = () => {
    function renderScreens() {
        return (
            <RootStack.Screen name={'MainStack'}>
                {() => <MainStackNavigator />}
            </RootStack.Screen>
        );
    }

    return (
        <NavigationContainer>
            <DrawerNavigator />
        </NavigationContainer>
    );
};

export default App;

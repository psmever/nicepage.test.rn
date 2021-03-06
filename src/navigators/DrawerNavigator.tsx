import React from 'react';
import 'react-native-gesture-handler';
import {
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
} from '@react-navigation/drawer';
import ContactStackNavigator from './ContactStackNavigator';
import TabNavigator from './TabNavigator';

const Drawer = createDrawerNavigator();

const CustomDrawerContent = (props: any) => {
    return (
        <DrawerContentScrollView {...props}>
            <DrawerItemList {...props} />
            <DrawerItem
                label="검색"
                onPress={() => props.navigation.navigate('All Products')}
            />
            <DrawerItem
                label="끄적끄적"
                onPress={() => props.navigation.navigate('Orders')}
            />
            <DrawerItem
                label="민군은"
                onPress={() => props.navigation.navigate('Orders')}
            />
            <DrawerItem
                label="블로그 소개"
                onPress={() => props.navigation.navigate('Orders')}
            />
        </DrawerContentScrollView>
    );
};

export const DrawerNavigator = (props: any) => {
    console.debug(props);
    return (
        <Drawer.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: '#af92de',
                },
                headerTintColor: 'white',
                // headerBackTitle: 'Back',
                drawerPosition: 'right',
            }}
            drawerContent={props => <CustomDrawerContent {...props} />}>
            <Drawer.Screen name={'포스트'} component={TabNavigator} />
        </Drawer.Navigator>
    );
};

export default DrawerNavigator;

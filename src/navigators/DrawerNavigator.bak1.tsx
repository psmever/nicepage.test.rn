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

const screenOptionStyle = {
    headerStyle: {
        backgroundColor: '#b49a9a',
    },
    headerTintColor: 'white',
    headerBackTitle: 'Back',
};

const CustomDrawerContent = (props: any) => {
    return (
        <DrawerContentScrollView {...props}>
            <DrawerItemList {...props} />
            <DrawerItem
                label="All Products"
                onPress={() => props.navigation.navigate('All Products')}
            />
            <DrawerItem
                label="Orders"
                onPress={() => props.navigation.navigate('Orders')}
            />
        </DrawerContentScrollView>
    );
};

const DrawerNavigator = () => {
    return (
        <Drawer.Navigator
            // screenOptions={screenOptionStyle}
            drawerContent={props => <CustomDrawerContent {...props} />}>
            <Drawer.Screen name="Home" component={TabNavigator} />
            <Drawer.Screen name="Contact" component={ContactStackNavigator} />
        </Drawer.Navigator>
    );
};

export default DrawerNavigator;

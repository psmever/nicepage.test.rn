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
    // drawerPosition: 'right',
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

// const DrawerNavigator = () => {
//     return (
//         <Drawer.Navigator
//             drawerPosition="right"
//             screenOptions={screenOptionStyle}
//             drawerContent={props => <CustomDrawerContent {...props} />}>
//             <Drawer.Screen name="Home" component={TabNavigator} />
//             <Drawer.Screen name="Contact" component={ContactStackNavigator} />
//         </Drawer.Navigator>
//     );
// };
// const DrawerNavigator = () => {
//     return (
//         <Drawer.Navigator
//             screenOptions={{drawerPosition: 'right'}}
//             // drawerPosition="right"
//             // drawerType="slide"
//             initialRouteName="Home"
//             drawerContent={props => <CustomDrawerContent {...props} />}>
//             <Drawer.Screen name="Home" component={TabNavigator} />
//             <Drawer.Screen name="NewIndex" component={ContactStackNavigator} />
//         </Drawer.Navigator>
//     );
// };

export const _HomeScreenNavigation = () => {
    const {Screen, Navigator} = Drawer;
    return (
        <Navigator
            screenOptions={{headerShown: false}}
            drawerContent={props => <CustomDrawerContent {...props} />}>
            <Screen name="Home" component={TabNavigator} />
        </Navigator>
    );
};

export const DrawerNavigator = () => {
    const {Navigator, Screen} = Drawer;
    return (
        <Navigator
            screenOptions={{drawerPosition: 'right'}}
            drawerContent={props => <CustomDrawerContent {...props} />}>
            <Screen name={'homeDrawer'} component={_HomeScreenNavigation} />
        </Navigator>
    );
};

export default DrawerNavigator;

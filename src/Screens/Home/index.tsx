import React from 'react';
import {View, Button} from 'react-native';

export default ({navigation}: {navigation: any}) => {
    const handleClick = () => {
        navigation.navigate('Login');
    };
    return (
        <View>
            <Button title={'Home'} onPress={handleClick}>
                Post
            </Button>
        </View>
    );
};

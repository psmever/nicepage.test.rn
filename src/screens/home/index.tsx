import React from 'react';
import {View, Button} from 'react-native';

export default ({navigation}: {navigation: any}) => {
    const handleClick = () => {
        navigation.navigate('Posts');
    };
    return (
        <View>
            <Button title={'home'} onPress={handleClick}>
                Post
            </Button>
        </View>
    );
};

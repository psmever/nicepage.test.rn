import React from 'react';
import {View, Button} from 'react-native';

export default ({navigation}: {navigation: any}) => {
    const handleClick = () => {
        // console.debug('handleClick', navigation);
        navigation.navigate('Posts');
    };
    return (
        <View>
            <Button title={'Posts'} onPress={handleClick}>
                Post
            </Button>
        </View>
    );
};

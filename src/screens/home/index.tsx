import React, {useEffect, useContext} from 'react';
import {View, Button} from 'react-native';
import AppContext from '../../contexts/AppContext';

export default ({navigation}: {navigation: any}) => {
    const {check, init, loading} = useContext(AppContext);

    const handleClick = () => {
        navigation.navigate('Posts');
    };

    useEffect(() => {
        console.debug('context', check, init, loading);
    }, []);

    return (
        <View>
            <Button title={'home'} onPress={handleClick}>
                Post
            </Button>
        </View>
    );
};

import React, {useEffect, useContext} from 'react';
import {View, Button, StyleSheet} from 'react-native';
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
        <View style={styles.container}>
            <Button title={'home'} onPress={handleClick}>
                Post
            </Button>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

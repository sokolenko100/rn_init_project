import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';
import AsyncStorage from '@react-native-community/async-storage';

export class SplashScreen extends Component {
    constructor(props) {
        super(props);
        this._bootstrapAsync();
    }

    _bootstrapAsync = async () => {
        const { navigation } = this.props;
        const userToken = await AsyncStorage.getItem('userToken');
        navigation.navigate(userToken ? 'App' : 'Auth');
    };

    render() {
        return (
            <View style={styles.container}>
                <Text> Hello SplashScreen </Text>
            </View>
        );
    }
}

export default SplashScreen;
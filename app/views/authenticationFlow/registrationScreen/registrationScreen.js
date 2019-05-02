import React, { Component } from 'react';
import { styles } from './styles';
import { Button, View, Text } from 'react-native';
import  AsyncStorage  from '@react-native-community/async-storage';

export class RegistrationScreen extends Component {
    constructor(props) {
        super(props)
    }

    goToAuthorizationScreen = () => {
        const { navigation } = this.props;
        navigation.navigate('AuthorizationScreen');
    };

    _signInAsync = async () => {
        const { navigation } = this.props;
        await AsyncStorage.setItem('userToken', 'abc');
        navigation.navigate('App');
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>RegistrationScreen</Text>
                <Button title="Show me AuthorizationScreen" onPress={this.goToAuthorizationScreen} />
                <Button title="Actually, sign me in :)" onPress={this._signInAsync} />
            </View>
        );
    }
}

export default RegistrationScreen;
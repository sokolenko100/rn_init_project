import React, { Component } from 'react';
import { styles } from './styles';
import { View, Text, Button } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

export class DrawerMenu extends Component {
    constructor(props) {
        super(props)
    }

    _signOutAsync = async () => {
        const { navigation } = this.props;
        await AsyncStorage.clear();
        navigation.navigate('Auth');
    };

    render() {
        return (
            <View style={styles.container}>
                <Text>DrawerMenu</Text>
                <Button title="Actually, sign me out :)" onPress={this._signOutAsync} />
            </View>
        );
    }
}

export default DrawerMenu;
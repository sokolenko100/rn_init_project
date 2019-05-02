import React, { Component } from 'react';
import { styles } from './styles';
import { Button, View, Text } from 'react-native';

export class ForgotPasswordScreen extends Component {
    constructor(props) {
        super(props)
    }

    goToAuthorizationScreen = () => {
        const {navigation}=this.props;
        navigation.navigate('AuthorizationScreen');
    };

    render() {
        return (
            <View style={styles.container}>
                <Text>ForgotPasswordScreen</Text>
                <Button title="Show me AuthorizationScreen" onPress={this.goToAuthorizationScreen} />
            </View>
        );
    }
}

export default ForgotPasswordScreen;
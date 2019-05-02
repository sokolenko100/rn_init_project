import React, { Component } from 'react';
import { styles } from './styles';
import { View, Text, Button } from 'react-native';

export class SettingsScreen extends Component {
    constructor(props) {
        super(props)
    }

    goToChartScreen = () => {
        const { navigation } = this.props;
        navigation.navigate('HomeScreen');
    };

    render() {
        return (
            <View style={styles.container}>
                <Text>SettingsScreen</Text>
                <Button title="Show me HomeScreen" onPress={this.goToChartScreen} />
            </View>
        );
    }
}

export default SettingsScreen;
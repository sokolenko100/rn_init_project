import React, { Component } from 'react';
import { styles } from './styles';
import { View, Text, Button } from 'react-native';

export class HomeScreen extends Component {
    constructor(props) {
        super(props)
    }

    goToChartScreen = () => {
        const { navigation } = this.props;
        navigation.navigate('SettingsScreen');
    };

    render() {
        return (
            <View style={styles.container}>
                <Text>HomeScreen</Text>
                <Button title="Show me SettingsScreen" onPress={this.goToChartScreen} />
            </View>
        );
    }
}

export default HomeScreen;
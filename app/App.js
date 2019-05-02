import React from 'react';
import { Provider } from 'react-redux';
import { StyleSheet, View } from 'react-native';
import SwitchNavigator from './modules/navigation/switchNavigator';
import store from './modules/redux/store';

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <SwitchNavigator />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

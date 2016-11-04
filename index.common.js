/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  TextInput,
  View
} from 'react-native';

export default class mktest extends Component {
  constructor(...args) {
    super(...args)
    this.state = { text: '' }
  }
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.textInput}
          value={this.state.text}
          onChangeText={text => this.setState({ text })}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  textInput: {
    borderWidth: 1,
    borderColor:'#000000',
    height: 50,
    width: 200,
    alignSelf: 'center'
  }
});

AppRegistry.registerComponent('mktest', () => mktest);

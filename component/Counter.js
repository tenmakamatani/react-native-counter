import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableHighlight
} from 'react-native';
import colors from '../utils/colors';

class Counter extends Component {

  constructor(props) {
    super(props);
    this.state = {
      counter: 1
    }
  }

  plus = () => {
    this.setState({
      counter: this.state.counter + 1
    });
  }

  minus = () => {
    this.setState({
      counter: this.state.counter - 1
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.count}>{ this.state.counter }</Text>
        <View style={styles.buttonsWrapper}>
          <TouchableHighlight onPress={this.plus} style={styles.buttonWrapper}>
            <Text style={styles.buttonText}>+</Text>
          </TouchableHighlight>
          <TouchableHighlight onPress={this.minus} style={styles.buttonWrapper}>
            <Text style={styles.buttonText}>-</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  count: {
    fontSize: 80
  },
  buttonsWrapper: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-around',
  },
  buttonWrapper: {
    paddingHorizontal: 40,
    borderWidth: 1,
    borderColor: colors.main
  },
  buttonText: {
    fontSize: 50
  }
})

export { Counter };

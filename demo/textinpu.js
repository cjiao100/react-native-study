import React, { Component } from 'react';
import { View, TextInput, Text } from 'react-native';

export default class LotsOfStyles extends Component {
  state = {
    text: ''
  };

  // onChangeText 监听文本变化
  // onSubmitEditing 监听提交时间
  render() {
    return (
      <View style={{ padding: 10 }}>
        <TextInput
          style={{ height: 40 }}
          placeholder="Type here to transolate!"
          onChangeText={text => this.setState({ text })}
          value={this.state.text}
        />
        <Text style={{ padding: 10, fontSize: 42 }}>
          {this.state.text
            .split(' ')
            .map(word => word && '🍕')
            .join(' ')}
        </Text>
      </View>
    );
  }
}

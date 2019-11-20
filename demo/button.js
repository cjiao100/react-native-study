import React, { Component } from 'react';
import { Button, Alert } from 'react-native';

export default class ButtonDemo extends Component {
  state = {
    text: ''
  };

  // onChangeText 监听文本变化
  // onSubmitEditing 监听提交时间
  render() {
    return (
      <Button
        onPress={() => {
          Alert.alert('你点击了按钮！');
        }}
        title="点我！"
        color="blue"
      />
    );
  }
}

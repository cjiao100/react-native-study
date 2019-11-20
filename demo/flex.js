import React, { Component } from 'react';
import { View } from 'react-native';

export default class LotsOfStyles extends Component {
  render() {
    // flex弹性，flex:1 指定元素充满容器，指定多个flex时，谁的指定值大，谁就占据剩余面积的比例大
    return (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1, backgroundColor: 'powderblue' }} />
        <View style={{ flex: 2, backgroundColor: 'skyblue' }} />
        <View style={{ flex: 3, backgroundColor: 'steelblue' }} />
      </View>
    );
  }
}

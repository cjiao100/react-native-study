import React, { Component } from 'react';
import { View } from 'react-native';

export default class LotsOfStyles extends Component {
  render() {
    // RN 中的尺寸是无单位的，表示与屏幕像素密度无关的逻辑像素点
    return (
      <View>
        <View
          style={{ width: 50, height: 50, backgroundColor: 'powderblue' }}
        />
        <View
          style={{ width: 100, height: 100, backgroundColor: 'powderblue' }}
        />
        <View
          style={{ width: 150, height: 150, backgroundColor: 'powderblue' }}
        />
      </View>
    );
  }
}

import React, { Component } from 'react';
import { View } from 'react-native';

export default class LotsOfStyles extends Component {
  render() {
    // flaxbox布局
    /**
     * flexDirection
     *     布局的主轴，沿水平（row）还是竖直（column），默认为竖直
     * alignItems
     *     沿次轴的排列方式，靠近开始（flex-start）、靠近结束（flex-end）、靠近中间（center）、未指定时会填充（stretch）
     * justifyContent
     *     沿主轴的排列方式，靠近开始（flex-start）、靠近结束（flex-end）、靠近中间（center）、均匀分布（space-around\space-between\space-evenly）
     * alignSelf
     *     与alignItems相同，但是作用在单独的子元素上，可以覆盖alignItems的值
     */
    return (
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'space-between',
          alignItems: 'flex-end'
        }}
      >
        <View
          style={{ width: 50, height: 50, backgroundColor: 'powderblue' }}
        />
        <View style={{ width: 50, height: 50, backgroundColor: 'skyblue' }} />
        <View style={{ width: 50, height: 50, backgroundColor: 'steelblue' }} />
      </View>
    );
  }
}

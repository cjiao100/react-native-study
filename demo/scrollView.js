import React, { Component } from 'react';
import { Text, Image, ScrollView } from 'react-native';

/**
 * ScrollView 滚动视图
 * 和View类似，可以放入其他元素
 *
 * 可以根据 horizontal 属性来设置滚动的方向，设置为true时会渲染为水平滚动
 *
 * ScrollView上的所有元素都会被渲染
 */

export default class IScrolledDownAndWhatHappenedNextShockedMe extends Component {
  render() {
    return (
      <ScrollView horizontal={true}>
        <Text style={{ fontSize: 96 }}>Scroll me plz</Text>
        <Text style={{ fontSize: 96 }}>If you like</Text>
        <Text style={{ fontSize: 96 }}>Scrolling down</Text>
        <Text style={{ fontSize: 96 }}>What's the best</Text>
        <Text style={{ fontSize: 96 }}>Framework around?</Text>
        <Text style={{ fontSize: 80 }}>React Native</Text>
      </ScrollView>
    );
  }
}

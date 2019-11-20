import React, { Component } from 'react';
import { FlatList, SectionList, StyleSheet, Text, View } from 'react-native';

/**
 * 长列表
 * 1. FaltList 必须要有data（列表数据源）和renderItem（渲染方式）两个属性
 * 2. SectionList 比较适合拥有分组的列表 sections（数据源）renderItem（设置渲染模板）renderSectionHeader（设置头部的渲染模板）renderSectionFooter（设置底部的渲染模板）keyExtractor（设置key）
 */

export default class FlatListBasics extends Component {
  render() {
    return (
      <View>
        <FlatList
          data={[
            { key: 'Devin' },
            { key: 'Dan' },
            { key: 'Dominic' },
            { key: 'Jackson' },
            { key: 'James' },
            { key: 'Joel' },
            { key: 'John' },
            { key: 'Jillian' },
            { key: 'Jimmy' },
            { key: 'Julie' }
          ]}
          renderItem={({ item }) => <Text style={styles.item}>{item.key}</Text>}
        />
        <View style={styles.block} />
        <SectionList
          sections={[
            { title: 'D', data: ['Devin', 'Dan', 'Dominic'] },
            {
              title: 'J',
              data: [
                'Jackson',
                'James',
                'Jillian',
                'Jimmy',
                'Joel',
                'John',
                'Julie'
              ]
            }
          ]}
          renderItem={({ item }) => <Text style={styles.item}>{item}</Text>}
          renderSectionHeader={({ section }) => (
            <Text style={styles.sectionHeader}>{section.title}</Text>
          )}
          keyExtractor={(item, index) => index}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44
  },
  block: {
    backgroundColor: '#000',
    height: 10
  },
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: 'rgba(247,247,247,1.0)'
  }
});

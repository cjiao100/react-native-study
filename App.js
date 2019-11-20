import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

/**
 * 网络
 * 1. fetch API
 */

export default class FlatListBasics extends Component {
  constructor(props) {
    super(props);
    this.state = { dataSource: [] };
  }

  componentDidMount() {
    this.getMoviesFromApiAsync();
  }

  getMoviesFromApiAsync() {
    return fetch('https://facebook.github.io/react-native/movies.json')
      .then(response => response.json())
      .then(responseJson => {
        console.log(responseJson.movies);
        this.setState({
          dataSource: responseJson.movies
        });
      })
      .catch(error => {
        console.error(error);
      });
  }

  render() {
    return (
      <View>
        <FlatList
          data={this.state.dataSource}
          renderItem={({ item }) => (
            <Text style={styles.item}>
              {item.title}---{item.releaseYear}
            </Text>
          )}
          keyExtractor={(item, index) => item.id}
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
  }
});

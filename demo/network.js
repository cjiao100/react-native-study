import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

/**
 * 网络
 * 1. fetch API
 * 2. ajax请求
 */

export default class FlatListBasics extends Component {
  constructor(props) {
    super(props);
    this.state = { dataSource: [] };
  }

  componentDidMount() {
    this.getMoviesFromApiAsync();
    this.getAjax();
    this.websocket();
  }

  getMoviesFromApiAsync() {
    return fetch('https://facebook.github.io/react-native/movies.json')
      .then(response => response.json())
      .then(responseJson => {
        this.setState({
          dataSource: responseJson.movies
        });
      })
      .catch(error => {
        console.error(error);
      });
  }

  // ajax请求
  getAjax() {
    const request = new XMLHttpRequest();
    request.onreadystatechange = e => {
      if (request.readyState !== 4) {
        return;
      }

      if (request.status === 200) {
        console.log('success', request.responseText);
      } else {
        console.warn('error');
      }
    };

    request.open('GET', 'https://facebook.github.io/react-native/movies.json');
    request.send();
  }

  // WebSocket
  websocket() {
    // eslint-disable-next-line no-undef
    const ws = new WebSocket('ws://host.com/path');
    ws.open = () => {
      ws.send('something');
    };

    ws.onmessage = e => {
      console.log(e.data);
    };

    ws.onerror = e => {
      console.log(e.message);
    };

    ws.onclose = e => {
      console.log(e.code, e.reason);
    };
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

/**
 * 电影列表 示例教程
 */

import React, { Component } from 'react';
import { Image, FlatList, StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5fcff'
  },
  thumbnail: {
    width: 53,
    height: 81,
    backgroundColor: '#333'
  },
  rightContainer: {
    flex: 1
  },
  title: {
    fontSize: 20,
    marginBottom: 8,
    textAlign: 'center'
  },
  year: {
    textAlign: 'center'
  },
  list: {
    paddingTop: 20,
    backgroundColor: '#F5FCFF'
  }
});

const REQUEST_URL =
  'https://raw.githubusercontent.com/facebook/react-native/0.51-stable/docs/MoviesExample.json';

export default class SampleAppMovies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      loaded: false
    };

    // 在ES6中，如果在自定义的函数里使用了this关键字，则需要对其进行“绑定”操作，否则this的指向不对
    // 像下面这行代码一样，在constructor中使用bind是其中一种做法（还有一些其他做法，如使用箭头函数等)
    this.fetchData = this.fetchData.bind(this);
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    fetch(REQUEST_URL)
      .then(response => response.json())
      .then(responseData => {
        this.setState({
          data: this.state.data.concat(responseData.movies),
          loaded: true
        });
      });
  }

  renderLoadingView() {
    return (
      <View style={styles.container}>
        <Text>正在加载电影数据...</Text>
      </View>
    );
  }

  renderMovie({ movie }) {
    return (
      <View style={styles.container}>
        <Image
          style={styles.thumbnail}
          source={{ uri: movie.posters.thumbnail }}
        />
        <View style={styles.rightContainer}>
          <Text style={styles.title}>{movie.title}</Text>
          <Text style={styles.year}>{movie.year}</Text>
        </View>
      </View>
    );
  }

  render() {
    if (!this.state.loaded) {
      return this.renderLoadingView();
    }

    // const movie = this.state.movies[0];
    // return this.renderMovie(movie);
    return (
      <FlatList
        data={this.state.data}
        renderItem={this.renderMovie}
        style={styles.list}
        keyExtractor={item => item.id}
      />
    );
  }
}

import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

export default NewsItem = ({ news, index }) => {
  let number = (index + 1).toString();

  return (
    <View style={styles.news_item}>
      <View style={styles.news_text}>
        <View style={styles.text_container}>
          <Text style={styles.title}>{news.title}</Text>
          <Text>{news.summary}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  news_item: {
    flex: 1,
    flexDirection: 'row',
    paddingRight: 20,
    paddingLeft: 20,
    paddingTop: 30,
    paddingBottom: 30,
    borderBottomWidth: 1,
    borderBottomColor: '#E4E4E4'
  },
})

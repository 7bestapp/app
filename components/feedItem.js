import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  View,
  Platform,
  Image,
} from 'react-native';

export default FeedItem = ({ feed, index }) => {

  return (
    <View style={styles.feedCard}>
      <View style={styles.cardHeader}>
        <View style={styles.cardUser}>
          <Image
            style={styles.userImage}
            source={{uri: feed.image}}
          />
          <Text style={styles.user}>{feed.user}</Text>
        </View>
        <View style={styles.cardDate}>
          <Text style={styles.date}>{feed.date}</Text>
        </View>
      </View>
      <View style={styles.cardBody}>
        <View style={styles.cardWorkout}>
          <Text style={styles.workout}>{feed.workout}</Text>
        </View>
        <View style={styles.cardTime}>
          <Text style={styles.time}>{feed.time}</Text>
        </View>
      </View>
      <View style={styles.cardSocial}>
        <Text style={styles.social}>:muscle: {feed.muscles}</Text>
        <Text style={styles.social}>:clap: {feed.claps}</Text>
        <Text style={styles.social}>:fire: {feed.fires}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  feedCard: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white',
    borderColor: 'grey',
    borderWidth: 1,
    margin: 15,
    marginBottom: 0,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    ...Platform.select({
      ios: {
        shadowColor: 'rgba(0,0,0, .2)',
        shadowOffset: { height: 0, width: 0 },
        shadowOpacity: 1,
        shadowRadius: 1,
      },
      android: {
        elevation: 1,
      },
    }),
  },
  cardHeader: {
    padding: 10,
    flexDirection: 'row',
    borderBottomColor: '#F4F4F4',
    borderBottomWidth: 1,
  },
  cardUser: {
    flex: 3,
    flexDirection: 'row'
  },
  user: {
    padding: 5,
    paddingLeft: 10,
    fontFamily: 'Roboto',
    fontSize: 16,
    fontWeight: 'bold',
  },
  userImage: {
    height: 35,
    width: 35,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
  },
  cardDate: {
    flex: 1,
    padding: 5,
    alignItems: 'flex-end',
  },
  date: {
    fontFamily: 'Roboto',
    fontSize: 16,
  },
  cardBody: {
    padding: 15,
    flexDirection: 'row'
  },
  cardWorkout: {
    flex: 3,
  },
  workout: {
    fontFamily: 'Roboto',
    fontSize: 16,
    fontWeight: 'bold',
  },
  cardTime: {
    flex: 1,
    alignItems: 'flex-end',
  },
  time: {
    fontFamily: 'Roboto',
    fontSize: 16,
    fontWeight: 'bold',
  },
  cardSocial: {
    flex: 1,
    flexDirection: 'row',
    padding: 15,
  },
  social: {
    flex: 1,
    fontFamily: 'Roboto',
    fontSize: 14,
  }

})

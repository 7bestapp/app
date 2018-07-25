import React from 'react';
import {
  Text,
  View,
  ScrollView,
  ActivityIndicator,
  StyleSheet
} from 'react-native';

import FeedItem from '../components/feedItem.js';

export default class Profile extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      isLoading: true,
      feed_items: [
        {
          user: 'Timo Trumpp',
          date: 'Gestern',
          workout: 'FOX | ORIGINAL',
          time: '23:22',
          muscles: '0',
          claps: '1',
          fires: '0',
        },
        {
          user: 'Timo Trumpp',
          date: '3 Tage',
          workout: 'HYENA | ORIGINAL',
          time: '19:51',
          muscles: '1',
          claps: '0',
          fires: '0',
        },
        {
          user: 'Timo Trumpp',
          date: '10 Tage',
          workout: 'WOLF | ORIGINAL',
          time: '24:58',
          muscles: '0',
          claps: '0',
          fires: '1',
        },
        {
          user: 'Timo Trumpp',
          date: '15 Tage',
          workout: 'FOX | ORIGINAL',
          time: '23:22',
          muscles: '0',
          claps: '1',
          fires: '0',
        },
      ]
    }
  }

  componentDidMount(){
    return fetch('https://facebook.github.io/react-native/movies.json')
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState({
          isLoading: false,
          movies: responseJson.movies,
        }, function(){

        });

      })
      .catch((error) =>{
        console.error(error);
      });
  }

  renderFeed() {
    return this.state.feed_items.map((feed, index) => {
      return <FeedItem key={index} index={index} feed={feed} />
    });
  }

  render(){

    if(this.state.isLoading){
      return(
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator/>
        </View>
      )
    }

    return(
      <ScrollView style={{flex: 1, flexDirection: 'column', backgroundColor: '#E5E5E5'}}>
        <View style={styles.profileHeader}>
          <Text style={[styles.headerText, styles.boldText]}>Timo Trumpp</Text>
          <Text style={styles.baseText}>TSV RSK Esslingen, C-Jugend</Text>
        </View>
        <View style={styles.bioHeader}>
          <Text style={[styles.titleText, styles.boldText, styles.centerText]}>BIOGRAFIE</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <View style={styles.bioBox}>
            <Text style={[styles.baseText, styles.textCenter]}>Halblinks</Text>
            <Text style={[styles.subText, styles.textCenter]}>POSITION</Text>
          </View>
          <View style={styles.bioBox}>
            <Text style={[styles.baseText, styles.textCenter]}>12</Text>
            <Text style={[styles.subText, styles.textCenter]}>WORKOUTS</Text>
          </View>
          <View style={styles.bioBox}>
            <Text style={[styles.baseText, styles.textCenter]}>Rechts</Text>
            <Text style={[styles.subText, styles.textCenter]}>HAND</Text>
          </View>
        </View>
        <View style={{flexDirection: 'row'}}>
          <View style={styles.bioBox}>
            <Text style={[styles.baseText, styles.textCenter]}>1989</Text>
            <Text style={[styles.subText, styles.textCenter]}>JAHR</Text>
          </View>
          <View style={styles.bioBox}>
            <Text style={[styles.baseText, styles.textCenter]}>183 CM</Text>
            <Text style={[styles.subText, styles.textCenter]}>GRÖSSE</Text>
          </View>
          <View style={styles.bioBox}>
            <Text style={[styles.baseText, styles.textCenter]}>N/A</Text>
            <Text style={[styles.subText, styles.textCenter]}>GEWICHT</Text>
          </View>
        </View>
        <View style={{flexDirection: 'row'}}>
          <View style={styles.bioBox}>
            <Text style={[styles.baseText, styles.textCenter]}>DEUTSCHLAND</Text>
            <Text style={[styles.subText, styles.textCenter]}>LAND</Text>
          </View>
          <View style={styles.bioBox}>
            <Text style={[styles.baseText, styles.textCenter]}>FÜCHSE</Text>
            <Text style={[styles.subText, styles.textCenter]}>FAN</Text>
          </View>
          <View style={styles.bioBox}>
            <Text style={[styles.baseText, styles.textCenter]}>7</Text>
            <Text style={[styles.subText, styles.textCenter]}>TRIKOT NR</Text>
          </View>
        </View>
        <View>
          { this.renderFeed() }
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  baseText: {
    fontSize: 14,
    fontFamily: 'Roboto',
  },
  subText: {
    fontSize: 12,
    fontFamily: 'Roboto',
    color: '#A5A5A5',
  },
  titleText: {
    fontSize: 18,
    fontFamily: 'Roboto',
  },
  headerText: {
    fontSize: 22,
    fontFamily: 'Roboto'
  },
  boldText: {
    fontWeight: 'bold',
  },
  centerText: {
    textAlign: 'center',
  },
  profileHeader: {
    height: 120,
    paddingTop: 65,
    paddingLeft: 10,
    backgroundColor: '#FFD014',
  },
  bioHeader: {
    height: 60,
    backgroundColor: 'white',
    borderBottomColor: '#F4F4F4',
    borderBottomWidth: 1,
    justifyContent: "center",
  },
  bioBox: {
    flex: 1,
    height: 65,
    backgroundColor: 'white',
    justifyContent: "center",
    alignItems: "center",
  },
});

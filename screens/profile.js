import React from 'react';
import {
  Text,
  View,
  ScrollView,
  ActivityIndicator,
  StyleSheet,
  Image
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
          image: 'https://lh3.googleusercontent.com/-3NrXY56sup0/AAAAAAAAAAI/AAAAAAAAAAA/AAnnY7o763BeCFp-H6oUUOCwe2qEik0WoA/s192-c-mo/photo.jpg',
          date: 'Gestern',
          workout: 'FOX | ORIGINAL',
          time: '23:22',
          muscles: '0',
          claps: '1',
          fires: '0',
        },
        {
          user: 'Timo Trumpp',
          image: 'https://lh3.googleusercontent.com/-3NrXY56sup0/AAAAAAAAAAI/AAAAAAAAAAA/AAnnY7o763BeCFp-H6oUUOCwe2qEik0WoA/s192-c-mo/photo.jpg',
          date: '3 Tage',
          workout: 'HYENA | ORIGINAL',
          time: '19:51',
          muscles: '1',
          claps: '0',
          fires: '0',
        },
        {
          user: 'Timo Trumpp',
          image: 'https://lh3.googleusercontent.com/-3NrXY56sup0/AAAAAAAAAAI/AAAAAAAAAAA/AAnnY7o763BeCFp-H6oUUOCwe2qEik0WoA/s192-c-mo/photo.jpg',
          date: '10 Tage',
          workout: 'WOLF | ORIGINAL',
          time: '24:58',
          muscles: '0',
          claps: '0',
          fires: '1',
        },
        {
          user: 'Timo Trumpp',
          image: 'https://lh3.googleusercontent.com/-3NrXY56sup0/AAAAAAAAAAI/AAAAAAAAAAA/AAnnY7o763BeCFp-H6oUUOCwe2qEik0WoA/s192-c-mo/photo.jpg',
          date: '15 Tage',
          workout: 'FOX | ORIGINAL',
          time: '23:22',
          muscles: '0',
          claps: '1',
          fires: '0',
        },
      ],
      profile: {
        "id":1,
        "first_name":"Timo",
        "last_name":"Trumpp",
        "email":null,
        "phone":null,
        "position":"LINKSAUSSEN",
        "hand":"RECHTS",
        "birthyear":"1989",
        "height":"183 CM",
        "weight":"75 KG",
        "country":"DEUTSCHLAND",
        "fan_of":null,
        "shirt_number":7,
        "workouts":4,
        "created_at":"2018-07-26T07:57:12.861Z",
        "updated_at":"2018-07-26T07:57:12.861Z"
      }
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

  renderBioField(item, label) {
    if (item) {
      value = item
    } else {
      value = "N/A"
    }
    return (
      <View style={styles.bioBox}>
        <Text style={[styles.baseText, styles.textCenter]}>{value}</Text>
        <Text style={[styles.subText, styles.textCenter]}>{label}</Text>
      </View>
    )
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
          <Image
            style={styles.profileImage}
            source={{uri:'https://lh3.googleusercontent.com/-3NrXY56sup0/AAAAAAAAAAI/AAAAAAAAAAA/AAnnY7o763BeCFp-H6oUUOCwe2qEik0WoA/s192-c-mo/photo.jpg'}}
          />
          <View style={styles.profileName}>
            <Text style={[styles.headerText, styles.boldText]}>{this.state.profile.first_name} {this.state.profile.last_name}</Text>
            <Text style={styles.baseText}>TSV RSK Esslingen, C-Jugend</Text>
          </View>
        </View>
        <View style={styles.bioHeader}>
          <Text style={[styles.titleText, styles.boldText, styles.centerText]}>BIOGRAFIE</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
            { this.renderBioField(this.state.profile.position, 'POSITION') }
            { this.renderBioField(this.state.profile.workouts, 'WORKOUTS') }
            { this.renderBioField(this.state.profile.hand, 'HAND') }
        </View>
        <View style={{flexDirection: 'row'}}>
            { this.renderBioField(this.state.profile.birthyear, 'JAHR') }
            { this.renderBioField(this.state.profile.height, 'GRÖSSE') }
            { this.renderBioField(this.state.profile.weight, 'GEWICHT') }
        </View>
        <View style={{flexDirection: 'row'}}>
          { this.renderBioField(this.state.profile.country, 'LAND') }
          { this.renderBioField(this.state.profile.fan_of, 'FAN') }
          { this.renderBioField(this.state.profile.shirt_number, 'TRIKOT NR') }
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
    height: 130,
    paddingTop: 30,
    paddingLeft: 10,
    backgroundColor: '#FFD014',
    flex: 1,
    flexDirection: 'row'
  },
  profileImage: {
    height: 90,
    width: 90,
    borderColor: 'white',
    borderWidth: 5,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4,
  },
  profileName: {
    padding: 10,
    justifyContent: 'flex-end'
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

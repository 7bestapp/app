import React from 'react';
import {
  Text,
  View,
  FlatList,
  ActivityIndicator,
  StyleSheet
} from 'react-native';

export default class Team extends React.Component {

  constructor(props){
    super(props);
    this.state ={ isLoading: true}
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

  render(){

    if(this.state.isLoading){
      return(
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator/>
        </View>
      )
    }

    return(
      <View style={{flex: 1, flexDirection: 'column'}}>
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

          <FlatList
          data={this.state.movies}
          renderItem={({item}) => <Text>{item.title}</Text>}
          keyExtractor={(item, index) => index}
        />
      </View>
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
    borderBottomColor: '#F4F4F4',
    borderBottomWidth: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  bioBox: {
    flex: 1,
    height: 65,
    justifyContent: "center",
    alignItems: "center",
  },
});

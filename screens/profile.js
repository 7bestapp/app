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
      <View style={{flex: 1, paddingTop: 50}}>
        <Text style={{padding: 10}}>Timo Trumpp</Text>
        <Text style={{padding: 10}}>TSV RSK Esslingen, C-Jugend</Text>
        <View style={styles.bioHeader}>
          <Text style={styles.bioHeaderText}>BIOGRAFIE</Text>
        </View>
        <Text>POSITION:</Text>
        <Text>Halblinks</Text>
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
    fontFamily: 'Cochin',
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  bioHeader: {
    height: 45,
    paddingTop: 10,
    borderBottomColor: '#F4F4F4',
    borderBottomWidth: 1,
  },
  bioHeaderText: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
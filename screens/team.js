import React from 'react';
import { 
  Text, 
  View
} from 'react-native';

export default class Team extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Dein tolles Team</Text>
      </View>
    );
  }
}
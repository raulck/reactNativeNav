//This is an example code for Bottom Navigation//
import React from 'react';
//import react in our code.
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';
//import all the basic component we have used

export default class ImageScreen extends React.Component {
  //Setting Screen to show in Setting Option
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{marginTop: 50, fontSize: 25}}>Image and all media!</Text>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.props.navigation.navigate('Video')}>
            <Text>Open Video Screen</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.props.navigation.navigate('Playlist')}>
            <Text>Open Playlist Screen</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.props.navigation.navigate('Contact')}>
            <Text>Open Contact Screen</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, styles.marginTop]}
            onPress={() => this.props.navigation.navigate('Home')}>
            <Text>Go to Home Tab</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    width: 300,
    marginTop: 16,
  },
  marginTop: {
    marginTop: 48,
  },
});

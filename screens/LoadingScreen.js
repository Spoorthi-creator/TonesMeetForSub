import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import firebase from 'firebase';

export default class LoadingScreen extends React.Component {
  componentDidMount() {
    this.checkIfLoggedIn();
  }

  checkIfLoggedIn = () => {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
    this.props.navigation.navigate('DashBoardScreen');
    } else {
      this.props.navigation.navigate('FlashScreen');
    }
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={{fontSize:30}}>Loading...</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

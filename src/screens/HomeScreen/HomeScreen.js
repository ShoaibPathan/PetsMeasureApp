import React, {Component} from 'react';
import {TitleText, CustomButton} from './../../components';
import {View, StyleSheet} from 'react-native';

class HomeScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <TitleText first="Welcome " second="to Animal Movers" />
        </View>
        <View style={styles.buttonContainer}>
          <View style={styles.buttonGroup}>
            <CustomButton
              type="HomeButton"
              text="Measure Your Pet"
              style={styles.button}
              onPress={() => {}}
            />
            <CustomButton
              type="HomeButton"
              text="About Us"
              style={styles.button}
              onPress={() => {}}
            />
          </View>
          <View style={styles.buttonGroup}>
            <CustomButton
              type="HomeButton"
              text="Notifications"
              style={styles.button}
              onPress={() => {}}
            />
            <CustomButton
              type="HomeButton"
              text="Contact Us"
              style={styles.button}
              onPress={() => {}}
            />
          </View>
          <View style={styles.buttonGroup}>
            <CustomButton
              type="HomeButton"
              text="My Profile"
              style={styles.button}
              onPress={() => {}}
            />
            <CustomButton
              style={styles.button}
              type="HomeButton"
              text="Logout"
              onPress={() => {}}
            />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleContainer: {
    marginTop: 50,
    padding: 10,
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'center',
    width: '100%',
  },
  buttonGroup: {
    width: '100%',
    flexDirection: 'row',
  },
  button: {
    flex: 1,
    margin: 10,
  },
});
export default HomeScreen;
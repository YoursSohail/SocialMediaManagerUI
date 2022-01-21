import React from 'react';
import SocialMediaView from './SocialMediaView';
import {View, Text, StyleSheet} from 'react-native';

const SocialStatsView = ({text, stats}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>
      <Text>{stats}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  text: {
    color: 'black',
    fontWeight: 'bold',
  },
});

export default SocialStatsView;

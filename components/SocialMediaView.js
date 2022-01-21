import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

const SocialMediaView = ({icon, name}) => {
  return (
    <View style={styles.container}>
      <View style={styles.rowContainer}>
        <Image
          style={styles.image}
          source={{
            uri: icon,
          }}
        />
        <View style={styles.textContainer}>
          <Text style={styles.text}>{name}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 16,
    marginHorizontal: 20,
    padding: 8,
    borderRadius: 10,
    backgroundColor: 'white',
  },
  rowContainer: {
    padding: 8,
    flexDirection: 'row',
  },
  image: {height: 30, width: 30},
  textContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
  },
});

export default SocialMediaView;

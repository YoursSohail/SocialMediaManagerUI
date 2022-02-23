import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  Pressable,
} from 'react-native';
import {AsyncStorageHelper} from '../helpers/AsyncStoragHelper';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SocialMediaView = ({icon, name}) => {
  const [showInput, setInputVisibility] = useState(false);
  const [getText, setText] = useState('');
  return (
    <View style={styles.container}>
      <Pressable
        style={styles.rowContainer}
        onPress={() => {
          setInputVisibility(!showInput);
          AsyncStorageHelper.getItem(name, setText);
        }}>
        <Image
          style={styles.image}
          source={{
            uri: icon,
          }}
        />
        <View style={styles.textContainer}>
          <Text style={styles.text}>{name}</Text>
        </View>
      </Pressable>
      {showInput && (
        <View style={styles.inputContainer}>
          <TextInput
            value={getText}
            style={styles.input}
            placeholder={'Enter url'}
            onChangeText={newText => {
              setText(newText);
            }}
          />
          <Pressable
            style={styles.button}
            title="Save"
            onPress={() => {
              AsyncStorageHelper.saveItem(name, getText);
            }}>
            <Text style={styles.buttonText}>Save</Text>
          </Pressable>
        </View>
      )}
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
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginLeft: 12,
    marginBottom: 8,
  },
  input: {
    borderRadius: 4,
    width: 200,
    borderColor: 'black',
    paddingHorizontal: 10,
    borderWidth: 1,
  },
  buttonContainer: {
    marginLeft: 8,
  },
  button: {
    padding: 8,
    backgroundColor: 'black',
    borderRadius: 4,
  },
  buttonText: {
    color: 'white',
  },
});

export default SocialMediaView;

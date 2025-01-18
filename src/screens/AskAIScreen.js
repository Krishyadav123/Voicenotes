import { StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
// import { useNavigation } from '@react-navigation/native';
// import { Icon } from 'react-native-paper';
// import {TextInput} from 'react-native-paper';

const AskAIScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.topbarContainer}>
        <View>
            <Entypo name="back-in-time" size={20} color="black" />
          </View>
        <Text style={{fontSize: 15, fontWeight: 'bold'}}>Ask AI</Text>
        <View
          style={{
            width: 25,
            height: 25,
            // backgroundColor: 'gray',
            borderRadius: 5,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            // cursor: 'pointer'
          }}>
          <Text
          onPress={() => navigation.navigate('Home')}
          style={{color: 'white', fontWeight: 'bold'}}>
            <AntDesign name="close" size={20} color="black" />
          </Text>
        </View>
      </View>
      <View style={styles.middleContainer}>
        <View>
          <MaterialIcons name="thought-bubble-outline" size={35} color="black" />
        </View>
        <Text style={{fontSize: 16, fontWeight: 'bold', marginTop: 10}}>
          Ask about your notes
        </Text>
        <View style={styles.suggestions}>
        <Text style={{fontSize: 12, color: 'gray'}}>
          Suggestions
        </Text>
        <AntDesign name="reload1" size={15} color="black" />

        </View>
        <View style={styles.quations}>
          <Text style={{fontSize: 12, fontWeight: '600'}}>
            What's something you want to remember?
          </Text>
        </View>
        <View style={styles.quations}>
          <Text style={{fontSize: 12, fontWeight: '600'}}>
            What is the difference between a note and a voice note?
          </Text>
        </View>
      </View>
      <View style={styles.inputContainer}>
        <View style={styles.inputWrapper}> 
          <TextInput
            style={styles.input}
            placeholder='Ask a question...'
            // value='Ask a question'
          />

          <View
            style={{
              width: 30,
              height: 30,
              backgroundColor: 'gray',
              borderRadius: 20,
              justifyContent: 'center',
              alignItems: 'center',
          }}
          >

            <AntDesign name="arrowup" size={15} color="white" />
          </View>
        </View>
        <View
          style={{
            width: 35,
            height: 35,
            backgroundColor: 'lightgray',
            borderRadius: 20,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
            <Icon name="microphone" size={20} color="black" />
          </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 20,
  },
  topbarContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 20,
    paddingBottom: 15,
    borderBottomColor: 'lightgray',
    borderBottomWidth: 1,
  },
  middleContainer: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  suggestions: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10,
    gap: 10,


    // justifyContent: 'space-between',
  },
  quations: {
    borderWidth: 1,
    borderColor: 'lightgray',
    borderRadius: 12,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginTop: 10,

    // iOS Shadow (Outer Shadow)
    shadowColor: '#000', // Shadow color
    shadowOffset: {width: 0, height: 2}, // Shadow position (outside the component)
    shadowOpacity: 0.2, // Shadow transparency
    shadowRadius: 4, // Shadow blur

    // Android Shadow (Outer Shadow)
    elevation: 3, // Elevation controls the shadow outside on Android

    backgroundColor: '#fff', // To ensure shadow is visible
    overflow: 'visible', // Prevent clipping the shadow
  },
  inputContainer: {
    // flex: 1,
    // width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    // paddingVertical: 20,
    gap: 10,
    paddingTop: 10,
    paddingBottom: 20,
    backgroundColor: '#F4F4F4',
  },
  inputWrapper: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 30,
    borderColor: 'lightgray',
    backgroundColor: 'white',
    paddingHorizontal: 10,
    // paddingVertical: 1,
  },
  input: {
    // height: 35,
    flex: 1,
    borderTopLeftRadius: 30, // Radius for the top-left corner
    borderBottomLeftRadius: 30,
    // borderStartEndRadius: 30,
    // width: '90%',
    backgroundColor: '#fff',
    // borderRadius: 30,
    // paddingHorizontal: 10,
    // marginBottom: 10,
    // borderColor: 'red',
  },
});

export default AskAIScreen;

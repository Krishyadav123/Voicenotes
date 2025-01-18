import { StyleSheet, Text, View, TouchableOpacity, Pressable, TextInput } from 'react-native';
import React, { useState } from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';

const CreateScreen = ({ navigation }) => {
  const options = [
    { title: 'Summary', icon: 'filetext1' },
    { title: 'List points', icon: 'menufold' },
    { title: 'To-do list', icon: 'checksquare' },
    { title: 'Tweet', icon: 'twitter' },
    { title: 'Email', icon: 'mail' },
    { title: 'Blog post', icon: 'book' },
    { title: 'Cleanup', icon: 'delete' },
    { title: 'Custom', icon: 'plus' },
  ];

  const [activeIndex, setActiveIndex] = useState(null); // Track the active item
  const [customInput, setCustomInput] = useState(''); // Input value for Custom option

  return (
    <View style={styles.container}>
      <View style={styles.topbarContainer}>
        <Text style={styles.createText}>Create</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <AntDesign name="close" size={20} color="black" />
        </TouchableOpacity>
      </View>
      <View style={styles.main}>
        <View style={styles.promptContainer}>
          <Text style={styles.stepNumber}>1.</Text>
          <Text style={styles.promptText}>What do you want to create?</Text>
        </View>
        <View style={styles.gridContainer}>
          {options.map((option, index) => (
            <Pressable
              key={index}
              style={[
                styles.gridItem,
                activeIndex === index && styles.activeGridItem, // Apply active style
              ]}
              onPress={() => setActiveIndex(index)} // Toggle active state
            >
              <AntDesign
                name={option.icon}
                size={12}
                color={activeIndex === index ? 'white' : 'black'} // Change icon color
              />
              <Text
                style={[
                  styles.gridText,
                  activeIndex === index && styles.activeGridText, // Change text color
                ]}
              >
                {option.title}
              </Text>
            </Pressable>
          ))}
        </View>
        {/* Conditionally render input field for Custom */}
        {activeIndex === options.length - 1 && (
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.inputField}
              placeholder="Enter your instructions here..."
              value={customInput}
              onChangeText={(text) => setCustomInput(text)}
            />
          </View>
        )}
         <View style={styles.promptContainer}>
          <Text style={styles.stepNumber}>2.</Text>
          <Text style={styles.promptText}>Select the note</Text>
        </View>
        <View style={{paddingHorizontal: 20}}>
        <Text style={{fontSize: 13}}>
            You don't have any notes to create with.
          </Text>
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
  createText: {
    flex: 1,
    textAlign: 'center',
    fontSize: 15,
    fontWeight: 'bold',
  },
  main: {
    flex: 1,
    paddingTop: 20,
    paddingHorizontal: 10,
  },
  promptContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    // marginBottom: 20,
    marginVertical: 20,
  },
  stepNumber: {
    fontWeight: 'bold',
    color: 'gray',
    marginRight: 5,
  },
  promptText: {
    fontWeight: '600',
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  gridItem: {
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    paddingVertical: 7,
    paddingHorizontal: 20,
    flexDirection: 'row',
    gap: 5,
    alignItems: 'center',
    justifyContent: 'center',
    width: '46%', // Ensures two items per row with spacing
    marginBottom: 15,
  },
  activeGridItem: {
    backgroundColor: '#0F3935', // Active background color
  },
  gridText: {
    fontSize: 13,
    fontWeight: '400',
  },
  activeGridText: {
    color: 'white', // Active text color
  },
  inputContainer: {
    // marginTop: ,
    paddingHorizontal: 20,
  },
  inputLabel: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 10,
  },
  inputField: {
    borderWidth: 1,
    borderColor: 'lightgray',
    borderRadius: 15,
    padding: 10,
    fontSize: 14,
  },
});

export default CreateScreen;

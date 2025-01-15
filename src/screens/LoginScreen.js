import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Button, TextInput, useTheme } from 'react-native-paper'; // Import useTheme
import { COLORS } from '../constants/theme'; // Import custom theme colors

const LoginScreen = ({ navigation }) => {  // Destructure `navigation` from props

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 22, fontWeight: 'bold' }}>Welcome back</Text>
      <View style={styles.Inputcontainer}>
        <TextInput
          style={[styles.inputs, { borderColor: COLORS.primary }]} // Set custom border color
          mode="outlined"
          label="Email"
          theme={{
            colors: {
              primary: "gray", // Change the border color for the focused state
            },
          }}
        />
        <TextInput
          style={[styles.inputs, { borderColor: COLORS.primary }]} // Set custom border color
          mode="outlined"
          label="Password"
          theme={{
            colors: {
              primary: "gray", // Change the border color for the focused state
            },
          }}
        />
      </View>
      
      {/* Styled Button */}
      <View style={styles.buttonContainer}>
        <Button 
          mode="contained" 
          onPress={() => console.log("Button pressed")} 
          style={styles.button}
          labelStyle={styles.buttonLabel}
        >
          Continue
        </Button>
      </View>

      {/* Login Navigation */}
      <View style={{ marginTop: 20 }} >
        <Text>Don't have an account?
          <Text 
            style={{ color: "#0F3935", fontWeight: "700" }} 
            onPress={() => navigation.navigate('Signup')}  // Navigate to Login screen
          > Sign Up
          </Text>
        </Text> 
      </View>
      <View style={styles.backButton}>
        <Text style={styles.backButtonText} onPress={() => navigation.goBack()}>Back</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F6F5', 
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 40,
    position: 'relative',
  },
  Inputcontainer: {
    width: '100%',
    marginTop: 10,
  },
  inputs: {
    marginTop: 5,
    height: 40,
    backgroundColor: '#fff',
    color: '',
  },
  buttonContainer: {
    width: '100%',  
  },
  button: {
    marginTop: 20,
    height: 40,
    // paddingVertical: 2,  // Adjust button height as needed
    borderRadius: 8,
    backgroundColor: "#0F3935",  // Custom background color
  },
  buttonLabel: {
    fontSize: 15, // Set font size for the button label
    color: '#fff', // Set text color to white
    fontWeight: "600", // Make the text bold
  },
  backButton: {
    position: 'absolute',
    top: 30,
    left: 20,
  },
  backButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#0F3935',
  }
});

export default LoginScreen;

import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { Button, TextInput } from 'react-native-paper'; // Import useTheme
import { COLORS } from '../constants/theme'; // Import custom theme colors

const SignupScreen = ({ navigation }) => {  // Destructure `navigation` from props
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleContinue = () => {
    // Validation to check if all fields are filled
    if (name && email && password) {
      navigation.navigate('Home'); // Navigate to HomeScreen if validation is successful
    } else {
      alert('Please fill in all fields'); // Show an alert if fields are missing
    }
  };

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 22, fontWeight: 'bold' }}>Create an account</Text>
      <View style={styles.Inputcontainer}>
        <TextInput
          style={[styles.inputs, { borderColor: COLORS.primary }]} // Set custom border color
          mode="outlined"
          label="Name"
          value={name}
          onChangeText={setName} // Update name state
          theme={{
            colors: {
              primary: "gray", // Change the border color for the focused state
            },
          }}
        />
        <TextInput
          style={[styles.inputs, { borderColor: COLORS.primary }]} // Set custom border color
          mode="outlined"
          label="Email"
          value={email}
          onChangeText={setEmail} // Update email state
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
          secureTextEntry
          value={password}
          onChangeText={setPassword} // Update password state
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
          onPress={handleContinue} // Call handleContinue when the button is pressed
          style={styles.button}
          labelStyle={styles.buttonLabel}
        >
          Continue
        </Button>
      </View>

      {/* Login Navigation */}
      <View style={{ marginTop: 20 }} >
        <Text>Already have an account? 
          <Text 
            style={{ color: "#0F3935", fontWeight: "700" }} 
            onPress={() => navigation.navigate('Login')}  // Navigate to Login screen
          >
            Login
          </Text>
        </Text> 
      </View>
      <View style={styles.backButton}>
        <Text style={styles.backButtonText} onPress={() => navigation.goBack()}>Back</Text>
      </View>
      <View style={styles.HomeButton}>
        <Text style={styles.backButtonText} onPress={() => navigation.navigate('Home')}>Home</Text>
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
  },
  HomeButton: {
    position: 'absolute',
    top: 30,
    right: 20,
  },

});

export default SignupScreen;

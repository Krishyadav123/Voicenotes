import { Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { TextInput } from 'react-native-paper';
import { COLORS } from '../constants/theme';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.topbar}>
        <View style={styles.upgradeBtn}>
          <Text style={styles.upgradeText}>Upgrade</Text>
        </View>
        <View>
          <MaterialIcons name="shape-circle-plus" size={25} color="lightgray" />
        </View>
        <Pressable
        onPress={() => navigation.navigate('Profile')}
        >
        <AntDesign name="appstore-o" size={25} color="gray" />
        </Pressable>
      </View>

      <View>
        <View>
          <Text style={{ fontSize: 35, fontWeight: 'bold' }}>Voicenotes</Text>
        </View>
        <View>
          <TextInput
            style={[styles.inputs]}  // Apply custom style to hide the border
            mode="outlined"
            label="Search"
            secureTextEntry
            theme={{
              colors: {
                primary: 'gray', // Set the primary color for focus state
                underlineColor: 'transparent', // Remove underline
              },
            }}
          />
        </View>
        <View style={styles.filterContainer} >
          <Text style={styles.filter}>All</Text>
          <Text style={styles.filter}>Shared</Text>
          <Text style={styles.filter}>Private</Text>
        </View>
      </View>
      <View style={styles.Tab}>
        <Text
         onPress={() => navigation.navigate('Record')}
        style={styles.TabText} >Record</Text>
        <Text
         onPress={() => navigation.navigate('Ask AI')}
        style={[styles.TabText, { backgroundColor:"#F4F4F4", color: 'black' }]} >Ask Ai</Text>
        <Text 
         onPress={() => navigation.navigate('Create')}
        style={[styles.TabText, { backgroundColor:"#F4F4F4", color: 'black' }]} >Create</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingVertical: 20,
    paddingHorizontal: 10,
    position: 'relative',
  },
  topbar: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: 20,
    gap: 10,
  },
  upgradeBtn: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F4F4F4',
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderRadius: 5,
  },
  upgradeText: {
    color: '#0F3935',
    fontSize: 13,
    fontWeight: 'bold',
  },
  inputs: {
    marginTop: 10,
    height: 40,
    backgroundColor: '#F4F4F4',
    borderWidth: 0, // Hides the border
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'start',
    alignItems: 'center',
    gap: 10,
    marginTop: 20,
  },
  filter: {
    // marginTop: 10,
    fontSize: 13,
    fontWeight: '400',
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 18,
    color: 'gray',
    backgroundColor: '#F4F4F4',
  },
  Tab: {
    position: 'absolute',
    bottom: 20,
    alignSelf: 'center',
    width: '90%', // Adjusted width for better layout
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 5,    
    borderRadius: 18,
  
    // Fix for borderRadius not working
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.1,
    shadowRadius: 5,

    // // Android Shadow
    elevation: 5,
  },
  
  TabText: {
    fontSize: 15,
    fontWeight: '700',
    paddingVertical: 10,
    // paddingHorizontal: 20,
    width: '31%',
    borderRadius: 15,
    textAlign: 'center',
    backgroundColor: 'black',
    color: 'white',
  },
});

export default HomeScreen;

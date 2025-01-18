import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import SimpleIcons from 'react-native-vector-icons/SimpleLineIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MyComponent from '../components/Texting';

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.profileIcon}>
        <View style={styles.iconWrapper}>
          <SimpleIcons name="user" size={45} color="#0F3935" />
        </View>
      </View>
      <ScrollView style={{flex: 1, paddingHorizontal: 20}}>
        <View>
          <Account />
          <App />
        </View>
      </ScrollView>
    </View>
  );
};




export const Account = () => {
  return (
<>
<Text style={styles.title}>ACCOUNT</Text>
          <View style={styles.accountStyle}>
            <View style={styles.titleWrapper}>
              <View>
                <Text>Name</Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text style={{color: 'gray'}}>sahil</Text>
                <AntDesign name="right" size={12} color="gray" />
              </View>
            </View>
            <View style={styles.titleWrapper}>
              <View>
                <Text>About</Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                {/* <Text style={{color: 'gray'}}>sahil</Text> */}
                <AntDesign name="right" size={12} color="gray" />
              </View>
            </View>
            <View style={styles.titleWrapper}>
              <View>
                <Text>Email</Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text style={{color: 'gray'}}>indore28495@gmail.com</Text>
                <AntDesign name="right" size={12} color="gray" />
              </View>
            </View>
            <View style={styles.titleWrapper}>
              <View>
                <Text>Change Password</Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                {/* <Text style={{color: 'gray'}}>indore28495@gmail.com</Text> */}
                <AntDesign name="right" size={12} color="gray" />
              </View>
            </View>
            <View style={styles.titleWrapper}>
              <View>
                <Text>Your Plan</Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text style={{color: 'gray'}}>Free</Text>
                <AntDesign name="right" size={12} color="gray" />
              </View>
            </View>
          </View>
</>
  )
} 



export const App = () => {
  return (
    <>
    <Text style={[styles.title, {marginTop: 20}]}>App</Text>
          <View style={styles.accountStyle}>
            <View style={styles.titleWrapper}>
              <View>
                <Text>Language</Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text style={{color: 'gray'}}>Detected Language</Text>
                {/* <AntDesign name="right" size={12} color="gray" /> */}
                <MyComponent/>
              </View>
            </View>
            <View style={styles.titleWrapper}>
              <View>
                <Text>About</Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                {/* <Text style={{color: 'gray'}}>sahil</Text> */}
                <AntDesign name="right" size={12} color="gray" />
              </View>
            </View>
            <View style={styles.titleWrapper}>
              <View>
                <Text>Email</Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text style={{color: 'gray'}}>indore28495@gmail.com</Text>
                <AntDesign name="right" size={12} color="gray" />
              </View>
            </View>
            <View style={styles.titleWrapper}>
              <View>
                <Text>Change Password</Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                {/* <Text style={{color: 'gray'}}>indore28495@gmail.com</Text> */}
                <AntDesign name="right" size={12} color="gray" />
              </View>
            </View>
            <View style={styles.titleWrapper}>
              <View>
                <Text>Your Plan</Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text style={{color: 'gray'}}>Free</Text>
                <AntDesign name="right" size={12} color="gray" />
              </View>
            </View>
          </View>
    </>
  );
};




const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#F4F6F5',
    backgroundColor: '#F4F4F4',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  profileIcon: {
    // width: "100%",
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: 'white',
  },
  iconWrapper: {
    width: 75,
    height: 75,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
    backgroundColor: 'lightgray',
  },
  title: {
    fontSize: 12,
    fontWeight: '500',
    color: 'gray',
    marginBottom: 10,
    marginLeft: 10,
  },
  accountStyle: {
    width: '100%',
    padding: 15,
    borderRadius: 10,
    gap: 15,
    // height: 50,
    // alignItems: 'center',
    // justifyContent: 'center',
    backgroundColor: 'white',
  },
  titleWrapper: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomColor: 'lightgray',
    borderBottomWidth: 1,
    paddingBottom: 10,
  },
});

export default ProfileScreen;

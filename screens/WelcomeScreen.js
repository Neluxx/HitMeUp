import {StyleSheet, View, Text} from 'react-native';
import React, { useState } from 'react';
import { TextInput, Button } from 'react-native-paper';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function WelcomeScreen ({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handlePress = () => {
    if (!email) {
      Alert.alert('Email field is required.');
    }

    if (!password) {
      Alert.alert('Password field is required.');
    }

    signIn(email, password);
    setEmail('');
    setPassword('');
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Hitmeup</Text>
      </View>
      <TextInput
        label="Email"
        placeholder="Enter your email"
        value={email}
        onChangeText={(email) => setEmail(email)}
        autoCapitalize="none"
      />
      <TextInput
        label="Password"
        placeholder="Enter your password"
        value={password}
        onChangeText={(password) => setPassword(password)}
        secureTextEntry={true}
      />
      <Button style={styles.button} onPress={() => navigation.navigate('Sign Up')} >
        <Text style={styles.buttonText}>Sign Up</Text>
       </Button>
      <Text style={styles.inlineText}>Already have an account?</Text>
      <Button style={styles.button} onPress={() => navigation.navigate('Sign In')}>
        <Text style={styles.buttonText}>Log In</Text>
      </Button>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      height: '100%',
      width: '100%',
      backgroundColor: '#1E1E1F',
      justifyContent: 'center',
      },
    button: {
      width: 200,
      borderRadius: 15,
      backgroundColor: '#9F3DE0',
      padding: 10,
      margin: '5%'
    },
    buttonText: {
      fontSize: 20,
      fontWeight: 'bold',
      color: '#1E1E1F',
      textAlign: 'center'
    },
    inlineText: {
      fontSize: 20,
      fontWeight: 'bold',
      color: '#9F3DE0',
      textAlign: 'center',
    },
    title: {
      fontSize: 35,
      fontWeight: 'bold',
      color: '#9F3DE0',
      textAlign: 'center'
    },
    titleContainer: {
      position: 'absolute',
      top: 170,
    },
  });
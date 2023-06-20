import React, {useState} from 'react';
import {View, TextInput, Button, Alert, StyleSheet} from 'react-native';

const LoginScreen = ({navigation = this.props.navigation}) => {
  const [mobileNumber, setMobileNumber] = useState('');
  const handleLogin = () => {
    if (mobileNumber.length !== 10) {
      Alert.alert(
        'Invalid mobile number',
        'Please enter a valid 10-digit mobile number.',
      );
      return;
    }
    // Perform your login logic here
    // For now, let's just display the mobile number in an alert
    navigation.navigate('OTPScreen', {mobileNumber});
    //Alert.alert('Logged in', `Mobile number: ${mobileNumber}`);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Mobile number"
        keyboardType="numeric"
        maxLength={10}
        value={mobileNumber}
        onChangeText={setMobileNumber}
      />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  input: {
    width: '80%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 16,
    paddingHorizontal: 8,
  },
});

export default LoginScreen;

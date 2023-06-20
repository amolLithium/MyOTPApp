import React, { useState } from 'react';
import { View, Button, Alert } from 'react-native';
import OTPTextInput from 'react-native-otp-textinput';
import auth from '@react-native-firebase/auth';
const OTPScreen = ({navigation = this.props.navigation}) => {
  const [otp, setOtp] = useState('');

  // Function to handle OTP verification
  const handleVerifyOTP = async () => {
    try {
     // const confirmation = await auth().signInWithPhoneNumber('+919096809169');
      //await confirmation.confirm(otp);
      // OTP verification successful, navigate to the comment screen
      // Replace 'CommentScreen' with the appropriate screen/component name
      // and add navigation logic here.
      /*navigation.navigate('OTPScreen', {mobileNumber});*/
     // Alert.alert('Logged in', `Mobile number: `);
      navigation.navigate('CommentsScreen');
    } catch (error) {
      Alert.alert('Error', 'Invalid OTP');
    }
  };

  return (
    <View>
      <OTPTextInput
        handleTextChange={otp => setOtp(otp)}
        inputCount={6} // Specify the OTP length
        containerStyle={{marginVertical: 20}}
      />
      <Button title="Verify OTP" onPress={handleVerifyOTP} />
    </View>
  );
};

export default OTPScreen;

import React, {useState} from 'react';
import {
  Alert,
  Image,
  Pressable,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {Button, LoadingScreen, Logo} from '../../../components';
import {styles} from './login.screen.styles';

export default function Login() {
  /** State Management */
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [email, setEmail] = useState<string>('');

  /** Login with Facebook */
  const handleFacebookAuthBtn = () => {
    Alert.alert(
      'FACEBOOK AUTHENTICATION',
      'Oops! Something went wrong, you might consider using Email and Password instead.',
      [{text: 'OK!'}],
    );
  };

  /** Login with Google */
  const handleGoogleAuthBtn = () => {
    Alert.alert(
      'GOOGLE AUTHENTICATION',
      'Oops! Something went wrong, you might consider using Email and Password instead.',
      [{text: 'OK!'}],
    );
  };

  return (
    <>
      {isLoading ? (
        <LoadingScreen text="Getting User Info" />
      ) : (
        <View style={styles.loginContainer}>
          <View style={styles.majorContainer}>
            <Logo />
            <View>
              <View style={styles.loginOptions}>
                <TextInput
                  placeholder="joeddoe@example.com"
                  style={styles.inputField}
                  placeholderTextColor={styles.placeholderTextColor.color}
                  onChangeText={value => setEmail(value)}
                />
              </View>

              <View style={styles.loginOptions}>
                <TextInput
                  placeholder="password"
                  style={styles.inputField}
                  placeholderTextColor={styles.placeholderTextColor.color}
                  onChangeText={value => setEmail(value)}
                />
              </View>

              <Button btnText={'Login'} />
            </View>

            <View style={styles.orTextContainer}>
              <Text style={styles.orText}>Or</Text>
            </View>

            <View style={styles.loginOptionsContainer}>
              <TouchableOpacity
                style={styles.fastLoginOption}
                onPress={handleGoogleAuthBtn}>
                {/* <Image
                  source={require('../../../../assets/icons/google.png')}
                /> */}
                <Text style={styles.loginOptionsText}>G</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.fastLoginOption}
                onPress={handleFacebookAuthBtn}>
                {/* <Image source={require('../../assets/icons/facebook.png')} /> */}
                <Text style={styles.loginOptionsText}>F</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      )}
    </>
  );
}

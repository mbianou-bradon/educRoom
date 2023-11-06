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
import theme from '../../../utils/theme/theme';
import client from '../../../utils/config/axios';
import {useAppDispatch} from '../../../redux/store/hooks';
import {createUserSlice, currentUser} from '../../../redux/features/userSlice';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {NativeStackParams} from '../../../navigations/NativeNavigation/NativeNavigation';
import handleError from '../../../utils/functions/handleError';

export default function Login() {
  /** State Management */
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const dispatch = useAppDispatch();

  /** Navigation */
  const navigation =
    useNavigation<NativeStackNavigationProp<NativeStackParams>>();

  /** handleLoginWithEmailAndPassword */
  function handleLoginWithEmailAndPassword() {
    setIsLoading(true);
    client
      .get(`/users?${email}&${password}`)
      .then(response => {
        setIsLoading(false);
        const user = response.data;
        dispatch(createUserSlice.actions.currentUser(user));
        navigation.canGoBack();
      })
      .catch(error => {
        setIsLoading(false);
        handleError('Error', error.message);
      });
  }

  /** Login with Facebook */
  const handleFacebookAuthBtn = () => {
    handleError(
      'FACEBOOK AUTHENTICATION',
      'Oops! Something went wrong, you might consider using Email and Password instead.',
    );
  };

  /** Login with Google */
  const handleGoogleAuthBtn = () => {
    handleError(
      'GOOGLE AUTHENTICATION',
      'Oops! Something went wrong, you might consider using Email and Password instead.',
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
                  onChangeText={value => setPassword(value)}
                />
              </View>

              <Button
                btnText={'Login'}
                onPress={() => handleLoginWithEmailAndPassword()}
              />
            </View>

            <View
              style={{
                flexDirection: 'row',
                gap: 5,
                marginTop: 30,
                justifyContent: 'center',
              }}>
              <Text style={{color: theme.COLOR.LIGHT_GRAY}}>
                Don't have an account?
              </Text>
              <Pressable>
                <Text style={{color: theme.COLOR.PRIMARY}}>Sign up</Text>
              </Pressable>
            </View>

            <View style={styles.orTextContainer}>
              <Text style={styles.orText}>Or</Text>
            </View>

            <View style={styles.loginOptionsContainer}>
              <TouchableOpacity
                style={styles.fastLoginOption}
                onPress={handleGoogleAuthBtn}>
                <Text style={styles.loginOptionsText}>G</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.fastLoginOption}
                onPress={handleFacebookAuthBtn}>
                <Text style={styles.loginOptionsText}>F</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      )}
    </>
  );
}

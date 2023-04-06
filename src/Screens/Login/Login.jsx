import {useState} from 'react';
import {
  Button,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  Alert,
  View,
} from 'react-native';
import {useLoginMutation} from '../../store/apis';
import {saveUserCredentials, storeUserSession} from '../../services/Storage';
import {useDispatch} from 'react-redux';
import {userActions} from '../../store/userSlice/user-slice';

const Login = props => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [login, loginResponse] = useLoginMutation();

  const navigateToRegisterPage = () => {
    props.navigation.navigate('Register');
  };
  const navigateToForgetPasswordPage = () => {
    props.navigation.navigate('Forget Password');
  };

  const dispatch = useDispatch();

  const onChangeUsernameHandler = value => {
    setUsername(value);
  };
  const onChangePasswordHandler = value => {
    setPassword(value);
  };

  const onLoginHandler = () => {
    login({username, password})
      .unwrap()
      .then(response => {
        saveUserCredentials(username, password);
        storeUserSession(response);
        dispatch(userActions.login(response));
      })
      .catch(err => {
        Alert.alert('Something went wrong', err.data.message);
      });
  };
  return (
    <View style={styles.container}>
      <View style={styles.inputWrapper}>
        <Text style={styles.label}>Username</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your username"
          onChangeText={onChangeUsernameHandler}
        />
      </View>
      <View style={styles.inputWrapper}>
        <Text style={styles.label}>Password</Text>
        <TextInput
          secureTextEntry={true}
          style={styles.input}
          placeholder="Enter your password"
          onChangeText={onChangePasswordHandler}
        />
      </View>
      <View style={styles.submitButtonWrapper}>
        <Button
          style={styles.submitButton}
          title="Login"
          onPress={onLoginHandler}
        />
      </View>
      <Pressable style={styles.helperWrapper} onPress={navigateToRegisterPage}>
        <Text style={styles.helperText}>Already has an account ?</Text>
      </Pressable>
      <Pressable
        style={styles.helperWrapper}
        onPress={navigateToForgetPasswordPage}>
        <Text style={styles.helperText}>Forget your password ?</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: 'center',
  },
  screenTitle: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  inputWrapper: {
    marginBottom: 12,
  },
  label: {
    fontSize: 18,
    marginBottom: 5,
  },
  input: {
    backgroundColor: '#FFF',
  },
  submitButtonWrapper: {
    marginTop: 20,
  },
  helperWrapper: {
    marginTop: 15,
  },
});

export default Login;

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Register from '../../../Screens/Register/Register';
import ForgetPassword from '../../../Screens/ForgetPassword/ForgetPassword';
import Login from '../../../Screens/Login/Login';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="Forget Password" component={ForgetPassword} />
    </Stack.Navigator>
  );
};

export default AuthStack;

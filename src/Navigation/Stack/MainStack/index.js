import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../../../Screens/Home/Home';
import Products from '../../../Screens/Products/Products';

const Stack = createNativeStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Products" component={Products} />
    </Stack.Navigator>
  );
};

export default MainStack;

import {NavigationContainer} from '@react-navigation/native';
import AppStack from './src/components/AppStack/AppStack';
import {Provider} from 'react-redux';
import store from './src/store/index';

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <AppStack />
      </NavigationContainer>
    </Provider>
  );
};

export default App;

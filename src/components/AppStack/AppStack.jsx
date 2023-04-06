import {useDispatch, useSelector} from 'react-redux';
import MainStack from '../../Navigation/Stack/MainStack';
import AuthStack from '../../Navigation/Stack/AuthStack';
import {useEffect} from 'react';
import {retrieveUserSession} from '../../services/Storage';
import {userActions} from '../../store/userSlice/user-slice';
import MainTabs from '../../Navigation/Tabs/MainTabs';

const AppStack = () => {
  const user = useSelector(store => store.user);
  const dispatch = useDispatch();

  useEffect(() => {
    const checkUserSession = async () => {
      const userSession = await retrieveUserSession();
      if (userSession) {
        dispatch(userActions.setupSession(JSON.parse(userSession)));
      }
    };
    checkUserSession();
  }, [user.isAuth]);

  if (user.isAuth) {
    return <MainTabs />;
  }

  return <AuthStack />;
};

export default AppStack;

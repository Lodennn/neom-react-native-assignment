import {useDispatch, useSelector} from 'react-redux';
import MainStack from '../../Navigation/Stack/MainStack';
import AuthStack from '../../Navigation/Stack/AuthStack';
import {useEffect} from 'react';
import {retrieveUserSession} from '../../services/Storage';
import {userActions} from '../../store/userSlice/user-slice';

const AppStack = () => {
  const user = useSelector(store => store.user);
  const dispatch = useDispatch();

  useEffect(() => {
    const checkUserSession = async () => {
      const userSession = await retrieveUserSession();
      dispatch(userActions.setupSession(JSON.parse(userSession)));
    };
    checkUserSession();
  }, []);

  if (user.isAuth) {
    return <MainStack />;
  }

  return <AuthStack />;
};

export default AppStack;

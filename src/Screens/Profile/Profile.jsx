import {Text, View, StyleSheet, Pressable, Image, Button} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {userActions} from '../../store/userSlice/user-slice';
import {removeUserSession} from '../../services/Storage';

const Profile = props => {
  const user = useSelector(store => store.user);

  const dispatch = useDispatch();

  const logoutHandler = async () => {
    dispatch(userActions.logout());
    await removeUserSession();
  };
  return (
    <View>
      <Image
        source={{uri: user.user?.image}}
        style={{width: '100%', height: 140, marginVertical: 15}}
      />
      <View style={styles.screenWrapper}>
        <Text style={styles.userDataItem}>{user.user.username}</Text>
        <Text style={styles.userDataItem}>{user.user.email}</Text>
        <View style={styles.submitBtn}>
          <Button title={'Logout'} onPress={logoutHandler} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screenWrapper: {
    paddingHorizontal: 20,
  },
  userDataItem: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  submitBtn: {
    marginTop: 30,
  },
});

export default Profile;

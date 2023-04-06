import * as Keychain from 'react-native-keychain';
import EncryptedStorage from 'react-native-encrypted-storage';

export const saveUserCredentials = async (username, password) => {
  try {
    // Store the credentials
    await Keychain.setGenericPassword(username, password);
  } catch (err) {
    console.error('ERROR: ', err);
  }
};

export const getUserCredentials = async () => {
  try {
    // Retrieve the credentials
    const userData = await Keychain.getGenericPassword();
    return userData;
  } catch (error) {
    return null;
  }
};

export async function storeUserSession(data) {
  try {
    await EncryptedStorage.setItem(
      'user_session',
      JSON.stringify({
        token: data.token,
        user: {...data},
      }),
    );

    // Congrats! You've just stored your first value!
  } catch (error) {
    // There was an error on the native side
  }
}

export async function retrieveUserSession() {
  try {
    const session = await EncryptedStorage.getItem('user_session');

    if (session !== undefined) {
    }

    return session;
  } catch (error) {
    // There was an error on the native side
  }
}

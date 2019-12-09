import Constants from 'expo-constants';
import { StyleSheet } from 'react-native';

const globalStyles = StyleSheet.create({
    company: {
      height: 32,
      resizeMode: 'contain',
      alignSelf: 'center',
      marginTop: 10,
      marginBottom: 10
    },
  
    safeAreaView: {
      marginTop: Constants.statusBarHeight,
      backgroundColor: '#eee',
      marginBottom: 60,
    }
  
});

export default globalStyles;
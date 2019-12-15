import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

const globalStyles = StyleSheet.create({
    company: {
      height: 32,
      resizeMode: 'contain',
      alignSelf: 'center',
      marginTop: 10,
    },
  
    safeAreaView: {
      flex: 1,
      paddingTop: Constants.statusBarHeight,
      backgroundColor: '#eee',
    }
  
});

export default globalStyles;
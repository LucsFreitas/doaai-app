import { StyleSheet } from 'react-native';

const globalStyles = StyleSheet.create({
    company: {
      height: 32,
      resizeMode: 'contain',
      alignSelf: 'center',
      marginTop: 10,
    },
  
    safeAreaView: {
      flex: 1,
      backgroundColor: '#eee',
    }
  
});

export default globalStyles;
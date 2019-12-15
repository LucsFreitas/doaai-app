import React from 'react';
import { 
  StyleSheet,
  View,
} from 'react-native';

import globalStyles from '../GlobalStyles';

export default class ConfigPage extends React.Component  {

  render () {
    return (
      <View style={globalStyles.safeAreaView}>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
});
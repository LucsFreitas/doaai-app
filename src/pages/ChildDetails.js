import React from 'react';
import { Image, SafeAreaView, StyleSheet } from 'react-native';

import company from '../../assets/company.png';
import globalStyles from '../GlobalStyles';

export default function ChildDetails({  }){

  return (
    <SafeAreaView style={globalStyles.safeAreaView}>
      <Image style={globalStyles.company} source={company}/>
    
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({

});


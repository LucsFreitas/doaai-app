import React from 'react';
import { Image, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';

import ChildList from '../components/ChildList';
import company from '../../assets/company.png';
import children from '../models/models';
import globalStyles from '../GlobalStyles';

export default function Home ({ navigation }) {

  navigateToDetail = function () {
    navigation.navigate('ChildDetails');
  }

  return (
    <SafeAreaView style={globalStyles.safeAreaView}>
      <Image style={globalStyles.company} source={company}/>

      <ScrollView>
        { children.map(item => (
          <TouchableOpacity key={item.id} onPress={() => this.navigateToDetail(item)}>
              <ChildList child={item}/>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  )
}

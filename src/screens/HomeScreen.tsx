import React from 'react';
import {View, Text, Button} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../types';
import styles from '../styles/style';

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

type Props = {
  navigation: HomeScreenNavigationProp;
};

const HomeScreen: React.FC<Props> = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to BMI Calculator</Text>
      <Button
        title="Go to BMI Calculator"
        onPress={() => navigation.navigate('BMICalculator')}
      />
    </View>
  );
};

export default HomeScreen;

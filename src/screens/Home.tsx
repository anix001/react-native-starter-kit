import { View, Text, StyleSheet, Button } from 'react-native';
import React from 'react';

//Navigation
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App';

type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

const Home = ({navigation}:HomeProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.smallText}>Home </Text>
      <Button title="Go to Details" onPress={()=> navigation.navigate('Details',{
        productId:'80',
      })} />
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    smallText: {
        color: '#000000',
    },
});

export default Home;

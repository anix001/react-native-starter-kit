import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Button,
  Alert,
} from 'react-native';

function App(){
  return(
   <SafeAreaView>
      <View>
        <Text>I am anix001. Trying to learn mobile development.</Text>
        <Button title='Click me' onPress={()=> Alert.alert('Simply pressed the button')}/>
      </View>
   </SafeAreaView>
  );
}


export default App;

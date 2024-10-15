import React, { useState } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  TextInput,
  FlatList,
  Pressable,
} from 'react-native';

//Constants
import { currencyByRupee } from './common/constants';
//Components
import CurrencyButton from './components/CurrencyButton';
import Snackbar from 'react-native-snackbar';


function App(){
  const [inputValue, setInputValue] = useState('');
  const [resultValue, setResultValue] = useState('');
  const [targetCurrency, setTargetCurrency] = useState('');

  const buttonPressed = (targetValue:Currency) => {
    if(!inputValue){
       Snackbar.show({
        text: 'Enter a value!!',
        duration: Snackbar.LENGTH_SHORT,
        backgroundColor:'#000',
        textColor:'#fff',
      });
    }

    const inputAmount = parseFloat(inputValue);
    if(!isNaN(inputAmount)){
      const convertedValue = inputAmount * targetValue.value;
      const result = `${targetValue.symbol} ${convertedValue.toFixed(2)}`;
      setResultValue(result);
      setTargetCurrency(targetValue.name);
    }else{
      return Snackbar.show({
        text: 'Enter a value to convert !!',
        duration: Snackbar.LENGTH_SHORT,
      });
    }
  }


  return(
   <SafeAreaView>
    <StatusBar/>
    <View>
      <Text>{targetCurrency}</Text>
    </View>
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <TextInput maxLength={14} value={inputValue} clearButtonMode='always' style={styles.inputbox}
          keyboardType='number-pad'
          placeholder='Enter amount in rupee'
          onChangeText={setInputValue}/>
        </View>
        {
          resultValue && (
            <Text>
             {resultValue}
            </Text>
          )
        }
      </View>
      <View style={styles.flatList}>
        <FlatList
        numColumns={3}
        data={currencyByRupee}
        keyExtractor={item=> item.name}
        renderItem={({item})=>(
          <Pressable onPress={()=> buttonPressed(item)}>
            <CurrencyButton {...item}/>
          </Pressable>
        )}
        />
      </View>
   </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container:{
   flex:1,
   backgroundColor:'#f2f7fc',
  },
  topContainer:{
    flex:1,
    // alignItems:'center',
    // justifyContent:'space-evenly',
    marginBottom:15,
  },
  inputbox:{
    padding:10,
    borderColor:'grey',
    borderWidth:1,
    borderRadius:4,
    color:'#000',
  },
  flatList:{
    marginTop:20,
  }
})


export default App;

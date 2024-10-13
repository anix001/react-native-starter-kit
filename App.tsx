import React, { useState } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Button,
  Alert,
} from 'react-native';

/*form validation*/
import * as Yup from 'yup';

const passwordSchema = Yup.object().shape({
  passwordLength: Yup.number()
  .min(4, 'should be minimum of 4 Characters')
  .max(8, 'Should be maximum of 8 character')
  .required('Password Length is required')
});

function App(){

  const [password, setPassword] = useState('');
  const [isPasswordgenerated, setIspasswordgenerated] = useState(false);

  const [lowerCase, setLowerCase] = useState(true);
  const [upperCase, setUpperCase] = useState(false);
  const [numbers, setNumbers] = useState(false);
  const [symbols, setSymbols] = useState(false);


  const generatePasswordString = (passwordLegth:number)=>{
     let characterList = '';

     const upperCaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
     const lowerCaseChars = 'abcdefghijklmnopqrstuvwxyz';
     const digitChars = '0123456789';
     const specialChars = '!@#$%^&*()_+';

    if(upperCase){
      characterList += upperCase;
     }

     if(lowerCase){
      characterList += lowerCase;
     }

     if(numbers){
      characterList += numbers;
     }

     if(symbols){
      characterList += symbols;
     }

     const passwordResult = createPassword(characterList, passwordLegth);
     setPassword(passwordResult);
     setIspasswordgenerated(true);
  };

  const createPassword = (characters:string, passwordLength:number)=>{
   let result = '';
   for(let i = 0; i < passwordLength; i++){
    const characterIndex = Math.round(Math.random() * characters.length);
    result += characters.charAt(characterIndex);
   }
   return result;
  };

  const resetPassword = ()=>{
    setPassword('');
    setIspasswordgenerated(false);
    setLowerCase(true);
    setUpperCase(false);
    setNumbers(false);
    setSymbols(false);
    }

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

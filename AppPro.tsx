import React from "react";
import {
  View,
  Text,
  StyleSheet,
  useColorScheme
} from "react-native";

function AppPro():JSX.Element{
  const isDarkMode = useColorScheme() === 'light'; 
  console.log("🚀 ~ AppPro ~ isDarkMode:", isDarkMode);
  return(
    <View style={styles.container}>
        <Text style={isDarkMode ? styles.whiteColor : styles.darkColor}>
            Hello Anix!!
        </Text>
    </View>
  )
}



const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center'
    },
    whiteColor:{
        color:'green'
    },
    darkColor:{
        color:'#000'
    }
})

export default AppPro;
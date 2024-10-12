import { Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

export default function ActionCard() {

    function openWebsite(websiteLink:string){
        Linking.openURL(websiteLink);
    }
  return (
    <View>
      <Text>ActionCard</Text>
      <View>
        <TouchableOpacity onPress={()=> openWebsite('https://www.youtube.com/')}>
            <Text>Click me</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

//rnfs
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FlatCard() {
  return (
    <View>
      <Text style={styles.headerText}>FlatCard</Text>
      <View style={styles.container}>
        <View style={[styles.card, styles.cardOne]}>
          <Text>Red</Text>
        </View>
        <View style={[styles.card, styles.cardTwo]}>
          <Text>Green</Text>
        </View>
        <View style={[styles.card, styles.cardThree]}>
          <Text>Blue</Text>
        </View>
        <View style={[styles.card, styles.cardOne]}>
          <Text>Red</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  headerText:{
      fontSize:24,
      fontWeight:'bold',
      paddingHorizontal:8,
  },
  container:{
    flex:1,
    flexDirection:'row',
    flexWrap:'wrap',
    padding:8,
  },
  card:{
    height:100,
    width:100,
    borderRadius:8,
    margin:8,
    flex:1,
    justifyContent:'center',
    alignItems:'center',
  },
  cardOne:{
    backgroundColor:'red',
  },
  cardTwo:{
    backgroundColor:'green',
  },
  cardThree:{
    backgroundColor:'blue',
  },
})
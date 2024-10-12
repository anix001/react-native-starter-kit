import { Text, StyleSheet, View, Image } from 'react-native'
import React, { Component } from 'react'

export default class FancyCard extends Component {
  render() {
    return (
      <View>
        <Text style={styles.headerText}>Trending Places</Text>
        <View style={[styles.card, styles.cardElevated]}>
           <Image
           source={{
            uri:'https://reactnative.dev/img/tiny_logo.png'
           }}
           style={styles.cardImage}
           />
           <View style={styles.cardBody}>
            <Text style={styles.cardTitle}>Image Name</Text>
            <Text style={styles.cardLabel}>Image label</Text>
            <Text style={styles.cardDescription}>Image Description</Text>
            <Text style={styles.cardFooter}>15 min away</Text>
           </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    headerText:{
        fontSize:24,
        fontWeight:'bold',
        paddingHorizontal:8,
    },
    card:{},
    cardElevated:{},
    cardImage:{
        height:180,
    },
    cardBody:{

    },
    cardTitle:{},
    cardLabel:{},
    cardDescription:{},
    cardFooter:{},
})
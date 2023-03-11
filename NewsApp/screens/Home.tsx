import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {Appbar}  from 'react-native-paper'
const Home = () => {
  return (
    <View style={styles.container}>
     <Appbar.Header>
        <Appbar.Content title="Home"></Appbar.Content>
     </Appbar.Header>
     <View style={styles.filterContainer}>

     </View>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container : {
    flex: 1
  },
  filterContainer : {
    flexDirection: 'row',
    flexWrap:"wrap",
    marginVertical:10,

  }
})
import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NewsData } from '../utils/type'
import { Card, useTheme } from 'react-native-paper'
const CardItem = (props: NewsData) => {
    const theme = useTheme()
  return (
    <Pressable>
        <Card 
        style={{
            marginVertical:10,
            backgroundColor:theme.colors.elevation.level5
        }}>
            <Card.Cover borderRadius={10} source={{uri:props.image_url}}/>
            <Card.Title title={props.title} 
            titleNumberOfLines={1}>
            </Card.Title>
        </Card>
    </Pressable>
  )
}

export default CardItem

const styles = StyleSheet.create({
   
})
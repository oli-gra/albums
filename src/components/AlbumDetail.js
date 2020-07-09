import React from 'react';
import { View, Text, Image, StyleSheet, Linking } from 'react-native'
import Section from './Section';
import Button from './Button'

const AlbumDetail = ({ album }) => {
  const {
    container,
    thumbnail,
    album_image,
    headerContent } = styles
  const {
    title,
    artist,
    url,
    thumbnail_image,
    image } = album
  return <View style={container}>
    <Section>
      <View>
        <Image
          style={thumbnail}
          source={{ uri: thumbnail_image }} />
      </View>
      <View style={headerContent}>
        <Text>{title}</Text>
        <Text>{artist}</Text>
      </View>
    </Section>
    <Section>
      <Image
        style={album_image}
        source={{ uri: image }} />
    </Section>
    <Section>
      <Button onPress={() => Linking.openURL(url)}>BUY</Button>
    </Section>
  </View>
}

const styles = StyleSheet.create({
  headerContent: {
    marginLeft: 5,
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  container: {
    borderWidth: 1,
    borderRadius: 3,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    margin: 10,
  },
  album_image: {
    borderRadius: 8,
    height: 300,
    flex: 1,
    width: null
  },
  thumbnail: {
    height: 50,
    width: 50
  }
})

export default AlbumDetail;
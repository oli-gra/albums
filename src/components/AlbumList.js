import React from 'react';
import { FlatList, ScrollView } from 'react-native';
import AlbumDetail from './AlbumDetail'

const AlbumList = ({ albums }) => {
  return <ScrollView>
    <FlatList
      data={albums}
      keyExtractor={album => album.url}
      renderItem={({ item }) => {
        return <AlbumDetail album={item} />
      }}
    />
  </ScrollView>
}

export default AlbumList;
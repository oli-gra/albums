import React, { useEffect, useState } from 'react'
import { AppRegistry } from 'react-native'
import Header from './src/components/header'
import AlbumList from './src/components/AlbumList'
import axios from 'axios'

const App = () => {
  [albums, setAlbums] = useState([])
  useEffect(() => {
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
      .then(res => setAlbums(res.data))
  }, [])
  return <>
    <Header text="Albums" />
    <AlbumList albums={albums} />
  </>
}

AppRegistry.registerComponent('albums', () => App)
import { View, Text, FlatList } from 'react-native'
import React from 'react'

const Trending = ({posts}) => {
  return (
   <FlatList
   data={posts}
   keyExtractor={item=>item.id}
   renderItem={({item})=>  <Text className="text-3xl text-white" key={item.id}>{item.id}</Text>
  }
  horizontal
   />
  )
}

export default Trending

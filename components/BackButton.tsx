import React from 'react'
import { AntDesign } from '@expo/vector-icons'
import {  Pressable } from 'react-native'
import { router } from 'expo-router'


const BackButton = () => {
  return (
    <Pressable onPress={() => router.back()} className='absolute top-16 left-6 z-10'>  
     <AntDesign name="leftcircleo" size={50} color="white" />
  </Pressable>
  )
}

export default BackButton
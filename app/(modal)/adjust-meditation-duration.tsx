import { View, Text } from 'react-native'
import React, { useContext } from 'react'
import AppGradient from '@/components/AppGradient'
import { StatusBar } from 'expo-status-bar'
import BackButton from '@/components/BackButton'
import CustomButton from '@/components/CustomButton'
import { router } from 'expo-router'
import { TimerContext } from '@/context/TimerContext'

const AdjustMeditationDuration = () => {
  const { setDuration } = useContext(TimerContext)
  const handlePress = (duration: number) => {
    setDuration(duration)
    router.back()
    console.log(duration, 'seconds')
  }
  return (
    <View className='flex-1'>
        <AppGradient colors={["#161b2e", "#0a4d4a", "#766e67"]}>
          <BackButton />
          <View className='flex-1 justify-center h-4/5'>
              <Text className='text-white text-center font-bold text-3xl mb-8'>Adjust your meditation duration</Text>

              <View>
                   <CustomButton title='10 Seconds' onPress={() => handlePress(5)} containerStyles='mb-5'  />
                   <CustomButton title='5 Minutes' onPress={() => handlePress(5 * 60)} containerStyles='mb-5'  />
                   <CustomButton title='10 Minutes' onPress={() => handlePress(10 * 60)} containerStyles='mb-5'  />
                   <CustomButton title='15 Minutes' onPress={() => handlePress(15 * 60)} containerStyles='mb-5'  />
              </View>
          </View>
        </AppGradient>
        <StatusBar style="light" />
    </View>
  )
}

export default AdjustMeditationDuration
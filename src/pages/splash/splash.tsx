import { View, Image } from '@tarojs/components'
import { useEffect } from 'react'
import Taro from '@tarojs/taro'

export default function Splash() {
  useEffect(() => {
    // Simulate loading time
    setTimeout(() => {
      Taro.reLaunch({
        url: '/pages/index/index'
      })
    }, 4000) // Show splash for 3 seconds
  }, [])

  return (
    <View className="flex items-center justify-center h-screen bg-blue-50">
      <View className="text-center">
        <Image
          className="w-32 h-32 mx-auto mb-4"
          src="/assets/loading.gif"
        />
        <View className="text-2xl font-bold text-white">Jobs Portal</View>
        <View className="mt-4 text-gray-600">Find your dream job</View>
      </View>
    </View>
  )
}
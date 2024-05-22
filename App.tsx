import { StatusBar } from 'expo-status-bar'
import { ThemeProvider } from 'styled-components'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import theme from '@/theme'

import { Routes } from '@/routes'

import {
  useFonts,
  Karla_400Regular,
  Karla_700Bold,
} from '@expo-google-fonts/karla'

import { Loading } from '@/components/Loading'

export default function App() {
  const [fontsLoaded] = useFonts({ Karla_400Regular, Karla_700Bold })
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaProvider>
        {fontsLoaded ? <Routes /> : <Loading />}
      </SafeAreaProvider>

      <StatusBar style="dark" translucent backgroundColor="transparent" />
    </ThemeProvider>
  )
}

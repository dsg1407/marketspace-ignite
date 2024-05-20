import { StatusBar } from 'expo-status-bar'
import { ThemeProvider } from 'styled-components'

import theme from '@/theme'

import {
  useFonts,
  Karla_400Regular,
  Karla_700Bold,
} from '@expo-google-fonts/karla'

import { SignIn } from '@/screens/SignIn'
import { Loading } from '@/components/Loading'
import { SafeAreaProvider } from 'react-native-safe-area-context'

export default function App() {
  const [fontsLoaded] = useFonts({ Karla_400Regular, Karla_700Bold })
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaProvider>
        {fontsLoaded ? <SignIn /> : <Loading />}
      </SafeAreaProvider>

      <StatusBar style="dark" translucent backgroundColor="transparent" />
    </ThemeProvider>
  )
}

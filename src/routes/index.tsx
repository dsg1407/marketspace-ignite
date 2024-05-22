import { View } from 'react-native'
import { NavigationContainer, DefaultTheme } from '@react-navigation/native'
import configTheme from '@/theme'

import { AuthRoutes } from './auth.routes'

export function Routes() {
  const theme = DefaultTheme
  theme.colors.background = configTheme.COLORS.BASE.GRAY_6

  return (
    <View style={{ flex: 1, backgroundColor: theme.colors.background }}>
      <NavigationContainer theme={theme}>
        <AuthRoutes />
      </NavigationContainer>
    </View>
  )
}

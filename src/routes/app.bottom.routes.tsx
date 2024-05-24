import { Platform } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { House, Tag, SignOut } from 'phosphor-react-native'
import theme from '@/theme'

import { Home } from '@/screens/Home'
import { MyAds } from '@/screens/MyAds'
import { LogoffScreen } from '@/screens/LogoffScreen'

type AppRoutes = {
  homeScreen: undefined
  myAds: undefined
  logout: undefined
}

const { Navigator, Screen } = createBottomTabNavigator<AppRoutes>()

export function AppBottomRoutes() {
  const iconSize = 24

  return (
    <Navigator
      initialRouteName="homeScreen"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: theme.COLORS.BASE.GRAY_2,
        tabBarInactiveTintColor: theme.COLORS.BASE.GRAY_4,
        tabBarStyle: {
          backgroundColor: theme.COLORS.BASE.GRAY_7,
          borderTopWidth: 0,
          height: Platform.OS === 'android' ? 'auto' : 96,
          paddingBottom: 28,
          paddingTop: 20,
        },
      }}
    >
      <Screen
        name="homeScreen"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => <House color={color} size={iconSize} />,
        }}
      />
      <Screen
        name="myAds"
        component={MyAds}
        options={{
          tabBarIcon: ({ color }) => <Tag color={color} size={iconSize} />,
        }}
      />
      <Screen
        name="logout"
        component={LogoffScreen}
        options={{
          tabBarIcon: () => (
            <SignOut color={theme.COLORS.PRODUCT.RED_LIGHT} size={iconSize} />
          ),
        }}
      />
    </Navigator>
  )
}

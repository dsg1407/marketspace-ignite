import { Platform } from 'react-native'
import {
  createBottomTabNavigator,
  BottomTabNavigationProp,
} from '@react-navigation/bottom-tabs'
import { House, Tag, SignOut } from 'phosphor-react-native'
import theme from '@/theme'

import { Home } from '@/screens/Home'
import { MyAds } from '@/screens/MyAds'
import { LogoffScreen } from '@/screens/LogoffScreen'

import { AdDetails } from '@/screens/AdDetails'
import { AdPreview } from '@/screens/AdPreview'
import { EditNewAd } from '@/screens/EditNewAd'
import { MyAdDetails } from '@/screens/MyAdDetails'

type AppRoutes = {
  home: undefined
  myAds: undefined
  logout: undefined
  adDetails: undefined
  adPreview: undefined
  editNewAd: undefined
  myAdDetails: undefined
}

export type AppNavigatorRoutesProps = BottomTabNavigationProp<AppRoutes>

const { Navigator, Screen } = createBottomTabNavigator<AppRoutes>()

export function AppRoutes() {
  const iconSize = 24

  return (
    <Navigator
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
        name="home"
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

      <Screen
        name="adDetails"
        component={AdDetails}
        options={{ tabBarButton: () => null }}
      />
      <Screen
        name="adPreview"
        component={AdPreview}
        options={{ tabBarButton: () => null }}
      />
      <Screen
        name="editNewAd"
        component={EditNewAd}
        options={{ tabBarButton: () => null }}
      />
      <Screen
        name="myAdDetails"
        component={MyAdDetails}
        options={{ tabBarButton: () => null }}
      />
    </Navigator>
  )
}

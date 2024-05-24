import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack'

import { AdDetails } from '@/screens/AdDetails'
import { AdPreview } from '@/screens/AdPreview'
import { EditNewAd } from '@/screens/EditNewAd'
import { MyAdDetails } from '@/screens/MyAdDetails'

import { AppBottomRoutes } from './app.bottom.routes'

type AppStackRoutesProps = {
  adDetails: undefined
  adPreview: undefined
  editNewAd: undefined
  myAdDetails: undefined

  home: undefined
  myAds: undefined
  logout: undefined
}

export type AppNavigatorRoutesProps =
  NativeStackNavigationProp<AppStackRoutesProps>

const { Navigator, Screen } = createNativeStackNavigator<AppStackRoutesProps>()

export function AppRoutes() {
  return (
    <Navigator initialRouteName="home" screenOptions={{ headerShown: false }}>
      <Screen name="home" component={AppBottomRoutes} />
      <Screen name="adDetails" component={AdDetails} />
      <Screen name="adPreview" component={AdPreview} />
      <Screen name="editNewAd" component={EditNewAd} />
      <Screen name="myAdDetails" component={MyAdDetails} />
    </Navigator>
  )
}

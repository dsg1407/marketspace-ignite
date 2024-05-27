import { Container, Title } from './styles'
import { Button } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { AppNavigatorRoutesProps } from '@/routes/app.routes'

export function MyAds() {
  const navigation = useNavigation<AppNavigatorRoutesProps>()

  return (
    <Container>
      <Title>MyAds</Title>
      <Button
        title="myAdDetails"
        onPress={() => navigation.navigate('adDetails')}
      />
    </Container>
  )
}

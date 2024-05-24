import { Container, StyledButton, Title, UserName } from './styles'
import { useNavigation } from '@react-navigation/native'

import { AppNavigatorRoutesProps } from '@/routes/app.routes'

import { Avatar } from '@/components/Avatar'

export function HomeHeader() {
  const user = 'Maria' //TODO
  const navigation = useNavigation<AppNavigatorRoutesProps>()

  function handleAddNewAds() {
    navigation.navigate('editNewAd')
  }
  return (
    <Container>
      <Avatar type="header" />
      <Title>
        Boas vindas, {'\n'}
        <UserName>{user}!</UserName>
      </Title>
      <StyledButton
        title="Criar anúncio"
        type="dark"
        icon="plus"
        onPress={handleAddNewAds}
      />
    </Container>
  )
}

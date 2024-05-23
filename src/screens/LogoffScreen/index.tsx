import { useNavigation } from '@react-navigation/native'

import {
  ButtonFrame,
  Container,
  Description,
  Frame,
  Title,
  StyledButton,
} from './styles'

export function LogoffScreen() {
  const navigator = useNavigation()

  function handleLogoff() {
    console.log('Logoff')
  }
  function handleCancel() {
    navigator.goBack()
  }

  return (
    <Container>
      <Frame>
        <Title>Logoff</Title>
        <Description>Deseja sair da aplicação?</Description>
        <ButtonFrame>
          <StyledButton
            title="Cancelar"
            type="secondary"
            onPress={handleCancel}
          />
          <StyledButton title="Sair" type="dark" onPress={handleLogoff} />
        </ButtonFrame>
      </Frame>
    </Container>
  )
}

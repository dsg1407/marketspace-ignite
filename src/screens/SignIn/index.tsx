import {
  Container,
  LogoGroup,
  Label,
  FormGroup,
  Background,
  NewAccountGroup,
} from './styles'

import { Input } from '@/components/Input'
import { Button } from '@/components/Button'

function handleSignIn() {}
function handleCreateAccount() {}

export function SignIn() {
  return (
    <Container>
      <Background>
        <LogoGroup />

        <FormGroup>
          <Label>Acesse sua conta</Label>

          <Input placeholder="E-mail" keyboardType="email-address" />
          <Input placeholder="Senha" type="password" />
        </FormGroup>

        <Button type="primary" title="Entrar" onPress={handleSignIn} />
      </Background>

      <NewAccountGroup>
        <Label>Ainda não tem acesso?</Label>
        <Button
          type="secondary"
          title="Criar uma conta"
          onPress={handleCreateAccount}
        />
      </NewAccountGroup>
    </Container>
  )
}

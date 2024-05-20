import { Container, LogoGroup, Label, FormGroup, Background } from './styles'

import { Input } from '@/components/Input'

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
      </Background>

      {/* TODO componente  Botão */}
    </Container>
  )
}

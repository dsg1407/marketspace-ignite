import { Container, LogoGroup, Label, FormGroup, Background } from './styles'

import { Input } from '@/components/Input'

export function SignIn() {
  return (
    <Container>
      <Background>
        <LogoGroup />

        <FormGroup>
          <Label>Acesse sua conta</Label>

          <Input placeholder="E-mail" />
          <Input placeholder="Senha" />
        </FormGroup>
      </Background>

      {/* TODO componente Input /  Botão */}
    </Container>
  )
}

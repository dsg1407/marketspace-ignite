import {
  Container,
  Logo,
  FormGroup,
  Label,
  LoginGroup,
  Title,
  ScrollView,
} from './styles'

import { Input } from '@/components/Input'
import { Button } from '@/components/Button'
import { Avatar } from '@/components/Avatar'

function handleSignUp() {}
function handleBackLogin() {}

export function SignUp() {
  return (
    <Container>
      <Logo />
      <Title>Boas Vindas!</Title>
      <Label>
        Crie sua conta e use o espaço para comprar {'\n'} itens variados e
        vender seus produtos
      </Label>

      <ScrollView>
        <FormGroup>
          <Avatar type="signup" />

          <Input placeholder="Nome" textContentType="name" />
          <Input
            placeholder="E-mail"
            keyboardType="email-address"
            textContentType="emailAddress"
          />
          <Input
            placeholder="Telefone"
            keyboardType="phone-pad"
            textContentType="telephoneNumber"
          />
          <Input
            placeholder="Senha"
            type="password"
            textContentType="password"
          />
          <Input
            placeholder="Confirmar senha"
            type="password"
            textContentType="password"
          />
        </FormGroup>
        <Button title="Criar" type="dark" onPress={handleSignUp} />

        <LoginGroup>
          <Label>Já tem uma conta?</Label>
          <Button
            title="Ir para o login"
            type="secondary"
            onPress={handleBackLogin}
          />
        </LoginGroup>
      </ScrollView>
    </Container>
  )
}

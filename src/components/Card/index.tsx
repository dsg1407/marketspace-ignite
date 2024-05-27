import { Label } from '@/screens/SignIn/styles'
import { Container, Price, ProductImage, StyledUserAvatar } from './styles'

type Props = {
  isActive?: boolean
  isNew?: boolean
  showUser?: boolean
}

type ProductProps = {}

export function Card({
  isActive = true,
  isNew = true,
  showUser = true,
}: Props) {
  return (
    <Container>
      <ProductImage
        source={{
          uri: 'https://scalcados.com.br/wp-content/uploads/2021/08/tenis-coca-coca-daytona-vermelho.jpg',
        }}
      />
      <Label>Tênis vermelho</Label>
      <Price currency>
        R$ <Price>59,90</Price>
      </Price>

      <StyledUserAvatar type="header" />
    </Container>
  )
}

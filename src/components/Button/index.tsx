import { TouchableOpacityProps } from 'react-native'
import {
  Container,
  Title,
  PlusIcon,
  WhatsAppIcon,
  PowerIcon,
  ArrowLeftIcon,
  TrashIcon,
  TagIcon,
} from './styles'

type Props = TouchableOpacityProps & {
  title: string
  type: 'primary' | 'secondary' | 'dark'
  icon?:
    | 'plus'
    | 'whatsapp'
    | 'power'
    | 'arrow-left'
    | 'trash'
    | 'tag'
    | undefined
}

export function Button({ title, type, icon = undefined, ...rest }: Props) {
  return (
    <Container type={type} {...rest}>
      {icon === 'plus' && <PlusIcon type={type} />}
      {icon === 'whatsapp' && <WhatsAppIcon type={type} />}
      {icon === 'power' && <PowerIcon type={type} />}
      {icon === 'arrow-left' && <ArrowLeftIcon type={type} />}
      {icon === 'trash' && <TrashIcon type={type} />}
      {icon === 'tag' && <TagIcon type={type} />}

      <Title type={type}>{title}</Title>
    </Container>
  )
}

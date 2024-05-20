import { TouchableOpacity, TouchableOpacityProps } from 'react-native'
import styled, { css } from 'styled-components/native'
import {
  Plus,
  WhatsappLogo,
  Power,
  ArrowLeft,
  TrashSimple,
  Tag,
  IconProps,
} from 'phosphor-react-native'

type TypeProps = {
  type: 'primary' | 'secondary' | 'dark'
}

type IconTypeProps = IconProps & TypeProps

type ButtonProps = TouchableOpacityProps & TypeProps

export const Container = styled(TouchableOpacity)<ButtonProps>`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 12px;
  border-radius: 6px;
  gap: 8px;

  ${({ theme, type }) => css`
    background-color: ${type === 'secondary'
      ? theme.COLORS.BASE.GRAY_5
      : type === 'dark'
      ? theme.COLORS.BASE.GRAY_1
      : theme.COLORS.PRODUCT.BLUE_LIGHT};
  `}
`

export const Title = styled.Text<TypeProps>`
  min-height: 18px;
  max-height: 18px;

  padding: 1px 0;

  ${({ theme, type }) => css`
    color: ${type === 'secondary'
      ? theme.COLORS.BASE.GRAY_2
      : theme.COLORS.BASE.GRAY_7};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.S}px;
  `}
`

export const PlusIcon = styled(Plus).attrs<IconTypeProps>(
  ({ theme, type }) => ({
    color:
      type === 'secondary'
        ? theme.COLORS.BASE.GRAY_2
        : theme.COLORS.BASE.GRAY_7,
    size: 16,
  })
)``
export const WhatsAppIcon = styled(WhatsappLogo).attrs<IconTypeProps>(
  ({ theme, type }) => ({
    color:
      type === 'secondary'
        ? theme.COLORS.BASE.GRAY_2
        : theme.COLORS.BASE.GRAY_7,
    size: 16,
    weight: 'fill',
  })
)``
export const PowerIcon = styled(Power).attrs<IconTypeProps>(
  ({ theme, type }) => ({
    color:
      type === 'secondary'
        ? theme.COLORS.BASE.GRAY_2
        : theme.COLORS.BASE.GRAY_7,
    size: 16,
  })
)``
export const ArrowLeftIcon = styled(ArrowLeft).attrs<IconTypeProps>(
  ({ theme, type }) => ({
    color:
      type === 'secondary'
        ? theme.COLORS.BASE.GRAY_2
        : theme.COLORS.BASE.GRAY_7,
    size: 16,
  })
)``
export const TrashIcon = styled(TrashSimple).attrs<IconTypeProps>(
  ({ theme, type }) => ({
    color:
      type === 'secondary'
        ? theme.COLORS.BASE.GRAY_2
        : theme.COLORS.BASE.GRAY_7,
    size: 16,
  })
)``
export const TagIcon = styled(Tag).attrs<IconTypeProps>(({ theme, type }) => ({
  color:
    type === 'secondary' ? theme.COLORS.BASE.GRAY_2 : theme.COLORS.BASE.GRAY_7,
  size: 16,
}))``

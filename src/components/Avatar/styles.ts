import styled, { css } from 'styled-components/native'
import { View } from 'react-native'
import { PencilSimpleLine } from 'phosphor-react-native'

type Props = {
  type: 'header' | 'signup'
}

export const Container = styled(View)<Props>`
  ${({ type }) => css`
    min-width: ${type === 'signup' ? '88px' : '45px'};
    min-height: ${type === 'signup' ? '88px' : '45px'};
    max-width: ${type === 'signup' ? '88px' : '45px'};
    max-height: ${type === 'signup' ? '88px' : '45px'};

    border: ${type === 'signup' ? '3px' : '2px'};
  `}

  border-radius: 999px;

  ${({ theme }) => css`
    border-color: ${theme.COLORS.PRODUCT.BLUE_LIGHT};
  `};

  position: relative;
`

export const AvatarImage = styled.Image`
  width: 100%;
  height: 100%;

  border-radius: 999px;
`

export const EditButton = styled.TouchableOpacity`
  height: 40px;
  width: 40px;
  border-radius: 999px;

  ${({ theme }) => css`
    background-color: ${theme.COLORS.PRODUCT.BLUE_LIGHT};
  `}

  align-items: center;
  justify-content: center;

  position: absolute;
  right: -8px;
  bottom: 0;
`

export const PencilIcon = styled(PencilSimpleLine).attrs(({ theme }) => ({
  color: theme.COLORS.BASE.GRAY_6,
  size: 16,
}))``

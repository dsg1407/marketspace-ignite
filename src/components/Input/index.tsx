import { useState } from 'react'
import { TextInputProps, TouchableOpacity } from 'react-native'
import { useTheme } from 'styled-components/native'
import {
  Container,
  Currency,
  InputText,
  PasswordIconHide,
  PasswordIconShow,
  Divider,
  FilterIcon,
  SearchIcon,
} from './styles'

type Props = TextInputProps & {
  type?: 'text' | 'password' | 'currency' | 'search'
  showFilter?: () => void
}

export function Input({ type = 'text', showFilter, ...rest }: Props) {
  const [isFocused, setIsFocused] = useState(false)
  const [secureEntry, setSecureEntry] = useState(true)
  const { COLORS } = useTheme()

  function toggleSecurityEntry() {
    setSecureEntry((entry) => !entry)
  }

  return (
    <Container isFocused={isFocused}>
      {type === 'currency' && <Currency>R$</Currency>}
      <InputText
        secureTextEntry={secureEntry}
        placeholderTextColor={COLORS.BASE.GRAY_4}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        {...rest}
      />

      {type === 'password' && (
        <TouchableOpacity onPress={toggleSecurityEntry}>
          {secureEntry ? <PasswordIconShow /> : <PasswordIconHide />}
        </TouchableOpacity>
      )}

      {type === 'search' && (
        <>
          <SearchIcon />
          <Divider />
          <TouchableOpacity onPress={showFilter}>
            <FilterIcon />
          </TouchableOpacity>
        </>
      )}
    </Container>
  )
}

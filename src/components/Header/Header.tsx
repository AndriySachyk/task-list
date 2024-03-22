
import { BoxHeader, HeaderContainer, Title } from "./Header-style"
import { StatusBar } from "./StatusButton/StatusButton"
import { SwitchColor } from "./SwitchColor/SwitchColor"

export const Header = () => {
  return (
    <HeaderContainer>
      <BoxHeader>

        <SwitchColor/>
        <Title>Task List </Title>
        <StatusBar/>

      </BoxHeader>
    </HeaderContainer>
  )
}


import { HeaderContainer, Title } from "./Header-style"
import { StatusBar } from "./StatusButton/StatusButton"
import { SwitchColor } from "./SwitchColor/SwitchColor"

export const Header = () => {
  return (
    <HeaderContainer>

        <SwitchColor/>
        <Title>Task List </Title>
        <StatusBar/>

    </HeaderContainer>
  )
}


import { useTheme } from "../../Provider/ThemeProvider"
import { BoxHeader, HeaderContainer, Title } from "./Header-style"
import { StatusBar } from "./StatusButton/StatusButton"
import { SwitchColor } from "./SwitchColor/SwitchColor"

export const Header = () => {

  const {darkMode} = useTheme()


  return (
    <HeaderContainer className={darkMode? 'withe': 'black'}>
      <BoxHeader>

        <SwitchColor/>
        <Title className={darkMode? 'withe': 'black'}>Task List </Title>
        <StatusBar/>

      </BoxHeader>
    </HeaderContainer>
  )
}

import { useTheme } from "../../../Provider/ThemeProvider";
import { ToggleSwitch, SwitchLabel, Checkbox, Slider, ContainerSwitchColor, } from "./SwitchColor-style"


export const SwitchColor = () => {

  const { darkMode, toggleDarkMode } = useTheme();
 

  return (
    <ContainerSwitchColor>
      <ToggleSwitch>
          <SwitchLabel className={darkMode?'withe':'black'}>
              <Checkbox type="checkbox" onChange={toggleDarkMode} checked={darkMode} />
              <Slider className="slider" ></Slider>
          </SwitchLabel>
      </ToggleSwitch>  
    </ContainerSwitchColor>
  )
}

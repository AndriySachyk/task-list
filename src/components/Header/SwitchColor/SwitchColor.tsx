// import { useDispatch } from "react-redux"
import { ToggleSwitch, SwitchLabel, Checkbox, Slider, ContainerSwitchColor, } from "./SwitchColor-stile"



export const SwitchColor = () => {


  return (
    <ContainerSwitchColor>
      <ToggleSwitch>
          <SwitchLabel>
              <Checkbox type="checkbox" />
              <Slider className="slider"></Slider>
          </SwitchLabel>
      </ToggleSwitch>  
    </ContainerSwitchColor>
  )
}

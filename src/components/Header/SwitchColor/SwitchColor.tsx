import { useEffect, useState } from "react"
import { ToggleSwitch, SwitchLabel, Checkbox, Slider, ContainerSwitchColor, } from "./SwitchColor-stile"


export const SwitchColor = () => {
  
  const [isChecked, setIsChecked] = useState<boolean>(()=>{
    const storeIsChecked = localStorage.getItem('colorTheme');
    return storeIsChecked !== null ? JSON.parse(storeIsChecked) : true;
  })


  useEffect(()=>{
    localStorage.setItem('colorTheme', JSON.stringify(isChecked))
    swithcClass()
  },[isChecked])


  const handleSwitchColor = ():void =>{
    setIsChecked((isChecked) =>!isChecked)
  }
  
  const swithcClass = () => {
    if (isChecked) {
      return 'withe'
    }
    else{
      return 'black'
    }
  }

  return (
    <ContainerSwitchColor>
      <ToggleSwitch>
          <SwitchLabel>
              <Checkbox type="checkbox" checked={isChecked} onChange={handleSwitchColor} />
              <Slider className="slider"></Slider>
          </SwitchLabel>
      </ToggleSwitch>  
    </ContainerSwitchColor>
  )
}

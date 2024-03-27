import { useEffect, useState } from "react";
import { InputStatus, Name, Radio, RadioInputs } from "./StatusButton-style"
import { useTheme } from "../../../Provider/ThemeProvider";


export const StatusBar = () => {
const [selectedOption, setSelectedOption] = useState(() => {
    const storedOption = localStorage.getItem('selectedOption');
    return storedOption !== null ? storedOption : 'All'; // або будь-яке інше значення за замовчуванням
});

const {darkMode} = useTheme()

useEffect(()=>{
    localStorage.setItem('selectedOption', selectedOption)
},[selectedOption])



const handleStatusBar = (even: string):void =>{
    console.log('even', even)
    setSelectedOption(even)
}

  return (
    <RadioInputs className={darkMode?'withe':'black'}>
        <Radio className="radio">
            <InputStatus 
                className="input-status" 
                type="radio" 
                name="radio"  
                checked={selectedOption === "All"} 
                onChange={()=>handleStatusBar("All")}

                value={'All'}
                />
            <Name className={darkMode?'withe':'black'}>All</Name>
        </Radio>
        <Radio className="radio">
            <InputStatus 
                className="input-status" 
                type="radio" 
                name="radio" 
                value={'Pending'}
                checked={selectedOption === "Pending"} 
                onChange={()=>handleStatusBar("Pending")}
                />
            <Name className={darkMode?'withe':'black'}>Pending</Name>
        </Radio>
        <Radio className="radio">
            <InputStatus 
                className="input-status" 
                type="radio" 
                name="radio" 
                value={"In process"}
                checked={selectedOption === "In process"} 
                onChange={()=>handleStatusBar("In process")}
                />
            <Name className={darkMode?'withe':'black'}>In process</Name>
        </Radio>
            
        <Radio className="radio">
            <InputStatus 
                className="input-status" 
                type="radio" 
                name="radio" 
                value={"Executed"}
                checked={selectedOption === "Executed"} 
                onChange={()=>handleStatusBar("Executed")}
            />
            <Name className={darkMode?'withe':'black'}>Executed</Name>
        </Radio>
    </RadioInputs>
  )
}

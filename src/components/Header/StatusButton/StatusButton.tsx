import { useEffect, useState } from "react";
import { InputStatus, Name, Radio, RadioInputs } from "./StatusButton-style"


export const StatusBar = () => {

    const [selectedOption, setSelectedOption] = useState(() => {
        const storedOption = localStorage.getItem('selectedOption');
        return storedOption !== null ? storedOption : 'All'; // або будь-яке інше значення за замовчуванням
    });


useEffect(()=>{
    localStorage.setItem('selectedOption', selectedOption)
},[selectedOption])



const handleStatusBar = (even: string):void =>{
    console.log('even', even)
    setSelectedOption(even)
}

  return (
    <RadioInputs>
        <Radio className="radio">
            <InputStatus 
                className="input-status" 
                type="radio" 
                name="radio"  
                checked={selectedOption === "All"} 
                onChange={()=>handleStatusBar("All")}

                value={'All'}
                />
            <Name className="name">All</Name>
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
            <Name className="name">Pending</Name>
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
            <Name className="name">In process</Name>
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
            <Name className="name">Executed</Name>
        </Radio>
    </RadioInputs>
  )
}

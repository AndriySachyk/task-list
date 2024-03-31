import { useEffect, useState } from "react";
import { InputStatus, Name, Radio, RadioInputs } from "./StatusButton-style"
import { useTheme } from "../../../Provider/ThemeProvider";
import { useStatusFilter } from "../../../Provider/StatusProvider";
import { useDispatch } from "react-redux";
import { filterTasks } from "../../../redux/actions";


export const StatusBar = () => {
const [selectedOption, setSelectedOption] = useState(() => {
    const storedOption = localStorage.getItem('selectedOption');
    return storedOption !== null ? storedOption : 'All'; // або будь-яке інше значення за замовчуванням
});

const {setFilter} = useStatusFilter();
const dispatch = useDispatch();

const {darkMode} = useTheme()

useEffect(()=>{
    localStorage.setItem('selectedOption', selectedOption)
    dispatch(filterTasks(selectedOption) as any)
},[selectedOption])



const handleStatusBar = (even: string):void =>{
    // console.log('even', even)
    setSelectedOption(even)
    setFilter(even)
}

// console.log('statusFilter', statusFilter)
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
                value={'pending'}
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
                value={"inProcess"}
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
                value={"executed"}
                checked={selectedOption === "Executed"} 
                onChange={()=>handleStatusBar("Executed")}
            />
            <Name className={darkMode?'withe':'black'}>Executed</Name>
        </Radio>
    </RadioInputs>
  )
}

import React, { useEffect, useState } from 'react';

import{RadioField,Container} from './styles';

interface Radio{
    options:Array<string>;
    id?:string;
    name?:string;
    label?:string;
    value?:string;
    onChange?(event:string):void
}


export const RadioInput:React.FC<Radio> =(({value="",name="",label="",options=[],id="",onChange}:Radio) => {

    const [selectValue, setSelectValue] = useState<string>(value);
    
    const selectedClass = function selectedClass(option:string) {
        console.log(selectValue === option);
        if(selectValue === option) return "selected";
        return "unselect";
    }

    return <Container>
       
        <label className="labels">{label}</label>
        {options.map((option,index)=>(
        <RadioField key={`${name}-${index}`}>
            <div 
                className="outter_circle"
                onClick={()=>setSelectValue(option)}
            >
                <span className={`inner_circle ${selectedClass(option)}`}/>
            </div>
            <label className="label_circle">
                {option.toUpperCase()}
            </label>
        </RadioField>))}
        
    </Container>
});

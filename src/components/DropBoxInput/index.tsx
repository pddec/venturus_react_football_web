import React, {useState} from 'react';
import{DropDown,Container} from './styles';
interface DropDownProp{
    options:Array<string>;
    id?:string;
    name?:string;
    defaultValue?:string;
    label?:string;
    value?:string;
    onChange?(event:string):void
}
export const DropDownInput:React.FC<DropDownProp> =(({defaultValue="",value="",name="",label="",options=[],id="",onChange=(event:string)=>{}}:DropDownProp) => {
    const [selectValue, setSelectValue] = useState<string>(value);
    
    if(value!=="") onChange(value);
    function onSelectedItem(option:string){
        setSelectValue(option);
        onChange(option);
    }

    function onClickedClass(option:string){
        if(selectValue !== option) return "";
        return "clicked";
    }

    return <Container label={label}>
    <button className="open_drop" onClick={e => e.preventDefault()}>
        <p>{selectValue!==""?selectValue:defaultValue}</p>
    </button>
    
    <DropDown>
            <ul className="list_positions">
                {options.map((option,index)=>(
                <li key={`${name}-${index}`}
                    className={`${onClickedClass(option)}`}
                    onPointerDown={(e)=>{ e.stopPropagation(); onSelectedItem(option)}}>
                    {option}
                </li>
            ))}
        </ul>
     </DropDown>
</Container>
});
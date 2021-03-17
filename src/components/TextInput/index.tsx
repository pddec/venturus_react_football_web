import React from 'react';

import{InputField} from './styles';

interface Props{
    onChange?(event:string):void;
    name?:string;
    value?:string;
    id?:string;
    label?:string;
    placeholder?:string;
}

export const Text = React.forwardRef<HTMLTextAreaElement,Props>(({name="",value="",id="",label="",onChange=(event:string)=>{}}:Props,ref) => {
    return <InputField>
        <textarea
            name={name}
            ref={ref}
            className="input_area  text_box"
            id={id}
            onChange={(event)=>onChange(event.target.value)}/>
        <label htmlFor="input_area" 
                className={id}>
            {label?label:""}
        </label>
    </InputField>
});

export const Input = React.forwardRef<HTMLInputElement,Props>(({name="",placeholder="",id="",label="",value="",onChange=(event:string)=>{}}:Props,ref) => {
    return <InputField>
        <input
            name={name}
            className="input_area"
            id={id}
            ref={ref}
            onChange={(event)=>onChange(event.target.value)}
            placeholder={placeholder}/>
    
        <label htmlFor={id} className="labels">{label?label:""}</label>
        
    </InputField>
});


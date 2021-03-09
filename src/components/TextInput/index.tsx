import React from 'react';

import{InputField} from './styles';

interface Props<T> extends React.HTMLProps<T>{
    onChange?(event:React.ChangeEvent<T>):void
}

interface Radio extends Props<HTMLInputElement>{
    options:Array<string>;
}

export const Text = React.forwardRef<HTMLTextAreaElement,Props<HTMLTextAreaElement>>(({name,value,id,label,onChange}:Props<HTMLTextAreaElement>,ref) => {
    return <InputField>
        <textarea
            data-input-name={name}
            ref={ref}
            className="input_area  text_box"
            id={id}
            value={value}
            onChange={(event)=>onChange?onChange(event):null}/>

        <label htmlFor="input_area" 
                className={id}>
            {label?label:""}
        </label>
    </InputField>
});

export const Input = React.forwardRef<HTMLInputElement,Props<HTMLInputElement>>(({name,placeholder,id,label,value,onChange}:Props<HTMLInputElement>,ref) => {
    return <InputField>
        <input
            data-input-name={name}
            className="input_area"
            id={id}
            ref={ref}
            onChange={(event)=>onChange?onChange(event):null}
            placeholder={placeholder}/>
    
        <label htmlFor={id} className="labels">{label?label:""}</label>
        
    </InputField>
});


import React from 'react';

import{InputField,RadioField} from './styles';

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

export const RadioInput = React.forwardRef<HTMLInputElement,Radio>(({name,label,options,id,onChange}:Radio,ref) => {
    return <InputField>
        
        {options.map((option,index)=>(
        <RadioField key={`${name}-${index}`}>
            <input
                className="exemplo2"
                type="radio"
                ref={ref}
                id={`${option}-${index}`}
                data-radio-name={name}
                name={name}
                value={option.toLowerCase()}
                onChange={(event)=>onChange?onChange(event):null}
            />
            <label
                className="exemplo2"
                htmlFor={`${option}-${index}`}>
                    {option.toUpperCase()}
            </label>
        </RadioField>))}
        <label className="labels">{label}</label>
        
    </InputField>
});


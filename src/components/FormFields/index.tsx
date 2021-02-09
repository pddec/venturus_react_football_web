import React from 'react';

import{InputField} from './styles';

interface Props{
    name?:string,
    value?:string,
    id?:string,
    label?:string,
    placeHolder?:string,
    onChange?(elem:string):void
}

interface Select extends Props{
    options:Array<string>;
}

export const Text = React.forwardRef<HTMLTextAreaElement,Props>(({name,value,id,label,onChange}:Props,ref) => {
    return <InputField>
        <textarea
            name={name}
            ref={ref}
            className="input_area  text_box"
            id={id}
            value={value?value:""}
            onChange={({currentTarget})=>onChange?onChange(currentTarget.value):null}/>

        <label htmlFor="input_area" 
                className={id}>
            {label?label:""}
        </label>
    </InputField>
});

export const Input = React.forwardRef<HTMLInputElement,Props>(({name,placeHolder,id,label,value,onChange}:Props,ref) => {
    return <InputField>
        <input
            name={name}
            className="input_area"
            id={id}
            ref={ref}
            value={value?value:""}
            onChange={({currentTarget})=>onChange?onChange(currentTarget.value):null}
            placeholder={placeHolder?placeHolder:""}/>
    
        <label htmlFor={id} className="labels">{label?label:""}</label>
        
    </InputField>
});

export const RadioInput = React.forwardRef<HTMLInputElement,Select>(({name,label,options,id,onChange}:Select,ref) => {
    return <InputField>
        <section id={id}>
            {options.map((option,index)=>(
                <>
                    <input 
                        type="radio"
                        ref={ref}
                        id={`${option}-${index}`}
                        name={name} 
                        value={option.toLowerCase()}/>
                    <label 
                        htmlFor={`${option}-${index}`}>
                            {option.toUpperCase()}
                    </label>
                </>))}
            </section>
            <label className="labels">{label}</label>
        
    </InputField>
});


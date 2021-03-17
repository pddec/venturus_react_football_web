import React, {useState} from 'react';

import {InputTag,ContainerTag,InputLI} from './styles'

interface Props {
  id?:string;
  label?:string;
  values?:string[];
  name?:string;
  onChange?(values:Array<string>):void
}


const InputTags:React.FC<Props>= function InputTags ({label="",id="",values=[],name="",onChange=(value)=>{}}:Props) {
  
  const [tags,setTags] = useState<Array<string>>(values);

  function onKeyDown(elem:HTMLInputElement,key:string) {
    const tag_tmp = Array.from(tags);
    const value = elem.value;
    
    if(["Backspace","Delete"].includes(key) 
        && (value === "")){
      onRemove(tags.length-1);
      return;
    }

    if(key !== "Enter") return;
    if(key ==="Enter" && value ==="") return;

    tag_tmp.push(value);
    elem.value=""
    setTags(tag_tmp);
    onChange(tag_tmp);
  }

  function onRemove(i:number) {
    const tag_tmp = Array.from(tags);
    tag_tmp.splice(i,1);
    setTags(tag_tmp);
    onChange(tag_tmp);
  }

    return (
        <ContainerTag>
          <InputTag>
                { tags.map((tag, i) => (
                  <li  className="label_tag" key={i}>
                    <span data-name={name}>
                      {tag}
                      <button
                        type="button" 
                        onClick={() => {onRemove(i)}}>+</button>
                    </span>
                  </li>
                ))}
                <InputLI label={label} >
                  <input
                      id={id}
                      className="input_tag"
                      type="text"
                      onKeyDown={({key,currentTarget}) => onKeyDown(currentTarget,key)}/>
                      <span className="input_tag_focus"/>
                </InputLI>
          </InputTag>
      </ContainerTag> 
    );
  };

  export default InputTags;
  
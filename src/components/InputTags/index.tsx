import React, {useState} from 'react';

import {InputTag,Container} from './styles'

interface Props{
  id?:string;
  label:string;
  values?:string[];
}

const InputTags= React.forwardRef<HTMLSpanElement,Props>(({label,id,values}:Props,ref) => {
  
  var [tags,setTags] = useState<Array<string>>([]);

  if(values) setTags(Array.from(values));
  
  function onKeyDown(elem:HTMLInputElement,key:string) {
    if(["Backspace","Delete"].includes(key)){
      onRemove(tags.length-1);
      return;
    }
    if(key !== "Enter") return;
    let tag_tmp = Array.from(tags);
    tag_tmp.push(elem.value);
    elem.value=""
    setTags(tag_tmp);
  }

  function onRemove(i:number) {
    let tag_tmp = Array.from(tags);
    tag_tmp.splice(i,1);
    console.log(tags);
    setTags(tag_tmp);
  }

    return (
      <Container>
          <span className="input_area">
            <label className="label_tag" htmlFor={id}>{label?label:""}</label>
          </span>
          <InputTag>
            <ul className="input-tag__tags">
              { tags.map((tag, i) => (
                <li key={i}>
                  <span ref={ref}>
                    {tag}
                    <button 
                      type="button" 
                      onClick={() => {onRemove(i)}}>+</button>
                  </span>
                </li>
              ))}
              <li className="input-tag__tags__input input_area">
                <input
                  id={id}
                  className="input-tag label_tag" 
                  type="text" 
                  onKeyDown={({key,currentTarget}) => onKeyDown(currentTarget,key)}/>
              </li>
            </ul>
          </InputTag>
      </Container>
    );
  });

  export default InputTags;
  
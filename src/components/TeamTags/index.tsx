import React, {useEffect} from 'react';

import {InputTag} from './styles'

interface Props{
  tags:string[];
  onRemove(index:number):void;
  onKeyDown(e:React.KeyboardEvent<HTMLInputElement>):void;
}

const TeamTag:React.FC<Props> = ({onKeyDown,onRemove,tags}:Props) => {
  
  
    return (
      <InputTag>
        <ul className="input-tag__tags">
          { tags.map((tag, i) => (
            <li key={tag}>
              {tag}
              <button type="button" onClick={() => { onRemove(i); }}>+</button>
            </li>
          ))}
          <li className="input-tag__tags__input">
            <input className="input-tag" type="text" onKeyDown={onKeyDown}/>
          </li>
        </ul>
      </InputTag>
    );
  }

  export default TeamTag;
  
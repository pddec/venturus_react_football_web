import React, { Children } from 'react';
import { stringify } from 'uuid';

import{FormBody} from './styles';

interface Subscriber{
  callback:Array<Function>;
  value?:Array<string>|number|string|boolean;
}
interface ValuesForm{
  value:Array<string>|number|string|boolean;
}

interface Props extends React.HTMLProps<HTMLFormElement>{
  onSubmit?(event: React.FormEvent<HTMLFormElement>):void;
  onSubmit?(values:ValuesForm):void;
}

interface ValuesInputs{
    [key:string]:Subscriber;
}

var subscribers:ValuesInputs={};

export const publish = function publish(event:string, data:string|Array<string>|number) {
      if (!subscribers[event]) return;
      var subscriber = subscribers[event];
      subscriber.callback.forEach(callback=> callback.call(subscriber,data));
      console.log(subscribers);
};


function subscribe(event:string|null, callback:Function) {
 
    if(!event) return;

    if (!subscribers[event]) subscribers[event] = {callback:[]};
    
    subscribers[event].callback.push(callback);
    
    return {
      unsubscribe() {
       delete subscribers[event];
      }
    };
  }

export const DynamicForm =  React.forwardRef<HTMLFormElement,Props>(({children,name,onSubmit}:Props,ref) => {

  const {current} = ref as React.MutableRefObject<HTMLFormElement>

  function eachElements(data_atribute_name:string) {
    if(!current) return ()=>{console.warn("Any calls")}
    return function getElements(callBack:Function){
      current.querySelectorAll(`*[data-${data_atribute_name}]^="${name}"`)
      .forEach(elem=>callBack(elem));
    }
  }

  return (<FormBody>
                <form ref={ref} >
                    {children}
                </form>
          </FormBody>)

});

import React, { useRef } from 'react';

import{FormBody} from './styles';

interface ValuesInputs{
    [key:string]:Array<Function>;
}

var subscribers:ValuesInputs={};

export const publish = function publish(event:string, data:string) {
    if (!subscribers[event]) return;

    subscribers[event].forEach(subscriberCallback => subscriberCallback(data));
  }


function subscribe(event:string, ref:HTMLElement) {
    var index:number;
    
    if(ref) 

    if (!subscribers[event]) subscribers[event] = [];
    
    index = subscribers[event].push() - 1;

    return {
      unsubscribe() {
        subscribers[event].splice(index, 1);
      }
    };
  }

export const DynamicForm:React.FC = function DynamicForm({children}) {

    const form_ref = useRef<HTMLFormElement>(null);

    return (<FormBody>
                <form ref={form_ref}>
                    {children}
                </form>
            </FormBody>)

}

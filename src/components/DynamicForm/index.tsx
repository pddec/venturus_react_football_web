import React from 'react';
import{FormBody} from './styles';

interface Subscriber{
  callback:Array<Function>;
}

interface ValuesForm{
  [key:string]:Array<string>|number|string|boolean;
}

interface Props extends React.HTMLProps<HTMLFormElement>{
  onSubmit?(event: React.FormEvent<HTMLFormElement>):void;
  onSubmit?(values:ValuesForm):void;
}

interface ValuesInputs{
    [key:string]:Subscriber;
}

var subscribers:ValuesInputs={};
var valuesSubmit:ValuesForm = {};

 const publish = function publish(event:string, data:string|Array<string>|number) {
      if (!subscribers[event]) return;
      var subscriber = subscribers[event];
      subscriber.callback.forEach(func=> func(data));
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

  function find_Components():React.ReactNode{
    function recursive (inner:React.ReactNode):React.ReactNode{
      return React.Children.map(inner,elem=>{
        if(!React.isValidElement(elem)) return;
        if(["div","span","section"].includes(elem.type.toString())){
          return React.cloneElement(elem,{},recursive(elem.props.children));
        }
        
        const onChange = function onChange_form(data:string|Array<string>){
          publish(elem.props.name,data);
        }

        subscribe(elem.props.name,function(data:string|Array<string>){
          valuesSubmit[elem.props.name] = data;
        });
        
        return React.cloneElement(elem,{onChange},null);

      })
      
    }

    return React.Children.map(children,elem=>{
      if(!React.isValidElement(elem)) return;
        return React.cloneElement(elem,{},recursive(elem));
    })
  }

  

  return (<FormBody>
                <form ref={ref} >
                    {find_Components()}
                </form>
          </FormBody>)

});

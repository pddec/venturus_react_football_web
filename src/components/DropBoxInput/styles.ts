import styled from 'styled-components';
import iconDropDown from './assets/arrow_drop_down.svg';

interface Props extends React.HTMLProps<HTMLDivElement> {
  label:string;
 }

export const Container = styled.div<Props>`
  position:relative;
  display:flex;
  flex:1;
  flex-direction:column;
  width:100%;
  margin:20px 0 0 0;

  .open_drop{
    
    display:flex;
    border: 1px solid #737373;
    border-radius: 5px 5px;
    background-color:#FFF;
    padding:5px;
    justify-content:space-between;
    cursor:pointer;

    &:before{
      position: absolute;
      content: ${(props) => `"${props.label}"`};
      top:-20px;
      bottom:0;
    }

    &:after{
      content:"";
      background-image: url(${iconDropDown});
      background-size: 25px 25px;
      width: 25px; 
      height: 25px;
    }

    & p{
      padding:5px 0 0 15px;
    }

    &:focus + section{
      transition: all 0.4s ease;
      transform:translateY(0);
      opacity:1;
      pointer-events:all;
    }

    &:focus{
      border: 2px solid #e80936;

      &:before{
        color: #e80936;
      }

      &:after{
        transform:rotateX(180deg);
      }

    }
  }
  .selected_item{
    width:100%;
    flex:1;
  }

`

export const DropDown = styled.section`

  position:absolute;
  top:40px;
  background-color:#FFF;
  border-radius: 5px 5px;
  width:100%;
  height:150px;
  overflow:hidden;
  overflow-y:scroll;
  border: 1px solid #737373;
  box-shadow: 0 0 3px black;
  opacity:0;
  transform:translateY(-20px);



  scrollbar-width: thin; 
  scrollbar-color: transparent transparent;

  &::-webkit-scrollbar {
      width: 5px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: transparent;
  }

  &:hover{
    scrollbar-color: #e80936 transparent;
    &::-webkit-scrollbar-thumb {
      background-color: #e80936;
      border-radius: 15px;
    }
  }
  
  pointer-events:none;
  z-index:1;
  
  .list_positions{
    flex:1;
    display:flex;
    flex-direction:column;
    align-items:center;

    li{
    width:100%;
    padding:5px;
    cursor:pointer;
    list-style:none;
  }

  .clicked{
    color:#1976d2;;
  }

  li.clicked:hover{
    background-color: #bed1ed;
  }

  li:hover{
    background-color: #aeb2b8;
  }
  }
  
   
`

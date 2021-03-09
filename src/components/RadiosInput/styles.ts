import styled from 'styled-components';


export const Container = styled.div`

  margin:10px 0 10px 0;

`

export const RadioField = styled.section`

  display:flex;
  margin:5px 0 5px 0;
  align-items:center;

  .outter_circle{
    display:flex;
    width:20px;
    height:20px;
    margin-right:5px;
    border:solid black 2px;
    border-radius:50px;
    justify-content:center;
    align-items:center;
  
    .inner_circle{
      display:none;
      width:10px;
      height:10px;
      background-color:black;
      border-radius:50px;
    }

    .inner_circle.selected{
      display:inherit;
    }

    .inner_circle.unselect{
      display:none;
    }

  }

  &:hover{
    .outter_circle{
      box-shadow: 0 0 0 2px #888888;
      .inner_circle{
        display:inherit;
      }
    }
  }
   
`

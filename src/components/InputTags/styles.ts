import styled from 'styled-components';

interface LIProps extends React.HTMLProps<HTMLLIElement> {
 label:string;
}

export const ContainerTag = styled.div`
  display: inline-flex;
  flex-wrap: wrap;
  margin: 0;
  width: 100%;
  padding-top:18px;
`

export const InputLI = styled.li<LIProps>`

  .input_tag_focus{
      &:after{
      position:absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      content:"";
      border: 1px solid #737373;
      pointer-events:none;
      border-radius: 5px 5px;
      
    }

    &:before{
      position:absolute;
      display:flex;
      top: -20px;
      bottom: 0;
      left:0;
      right: 0;
      content: ${(props) => `"${props.label}"`};
      color:black;
      pointer-events:none;
    }

  }

  input:focus + .input_tag_focus:after{
    border: 2px solid #e80936;
  }

  input:focus + .input_tag_focus:before{
    color: #e80936;
  }

  input{
    border: none;
    width: 100%;
    padding-top:5px;
  }
`;


export const InputTag = styled.ul`
  
  padding-top:10px;
  display: inline-flex;
  position: relative;
  flex-wrap: wrap;
  margin: 0;
  width: 100%;
  padding:5px 10px 10px 5px;

  & li{
    list-style: none;
  }

  & li.label_tag {
    align-items: center;
    background: #e80936;
    border-radius: 12px;
    color: white;
    display: flex;
    font-weight: 300;
    margin-bottom: 5px;
    margin-right: 5px;
    padding: 5px 10px;
  }

  & li.label_tag button {
    align-items: center;
    appearance: none;
    background: #333333;
    border: none;
    border-radius: 50%;
    color: white;
    cursor: pointer;
    display: inline-flex;
    font-size: 12px;
    height: 15px;
    justify-content: center;
    line-height: 0;
    margin-left: 8px;
    padding: 0;
    transform: rotate(45deg);
    width: 15px;
  }
`
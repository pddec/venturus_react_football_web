import styled from 'styled-components';

export const InputTag = styled.div`
  padding:55px;
  background: white;
  border: 1px solid #737373;
  border-radius: 5px 5px;
  display: flex;
  flex-wrap: wrap;
  padding: 5px 5px 0;

input.input-tag {
  border: none;
  width: 100%;
  
}

.input-tag__tags {
  display: inline-flex;
  flex-wrap: wrap;
  margin: 0;
  padding: 0;
  width: 100%;
}

.input-tag__tags li {
  align-items: center;
  background: #e80936;
  border-radius: 12px;
  color: white;
  display: flex;
  font-weight: 300;
  list-style: none;
  margin-bottom: 5px;
  margin-right: 5px;
  padding: 5px 10px;
}

.input-tag__tags li button {
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

.input-tag__tags li.input-tag__tags__input {
  background: none;
  flex-grow: 1;
  padding: 0;
}
`;
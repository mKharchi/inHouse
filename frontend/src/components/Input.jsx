import React from 'react';
import styled from 'styled-components';

const Input = ({type , value , placeholder,  onChange , name }) => {
  return (
    <StyledWrapper>
      <input  type={type} autoComplete="off" name={name} value={value} onChange={onChange} className="input w-full min-w-[300px] sm:min-w-[400px]" placeholder={placeholder} />
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .input {
    border: none;
    outline: none;
    border-radius: 15px;
    padding: 1em;
    background-color: #e0e0e0;
    box-shadow: inset 2px 5px 10px rgba(0,0,0,0.3);
    transition: 300ms ease-in-out;
    color:#1e1e1e;
      }

  .input:focus {
  color:black;
    background-color: white;
    transform: scale(1.05);
    box-shadow: 13px 13px 100px #969696,
               -13px -13px 100px #ffffff;
  }`;

export default Input;

import React from 'react';
import styled from 'styled-components';

const Input = ({ type, value, placeholder, onChange, name, className = "" }) => {
  return (
    <StyledWrapper className={className}>
      <input 
        type={type} 
        autoComplete="off" 
        name={name} 
        value={value} 
        onChange={onChange} 
        className="input w-full" 
        placeholder={placeholder} 
      />
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .input {
    border: none;
    outline: none;
    border-radius: 12px;
    padding: 0.75rem 1rem;
    background-color: #e0e0e0;
    box-shadow: inset 2px 5px 10px rgba(0,0,0,0.3);
    transition: all 300ms ease-in-out;
    color: #1e1e1e;
    font-size: 0.875rem;
    min-height: 2.5rem;
    width: 100%;
  }

  .input:focus {
    color: black;
    background-color: white;
    transform: scale(1.02);
    box-shadow: 0 4px 20px rgba(150, 150, 150, 0.3),
                0 -4px 20px rgba(255, 255, 255, 0.3);
  }

  .input::placeholder {
    color: #666;
    opacity: 0.7;
  }

  /* Responsive styles */
  @media (min-width: 640px) {
    .input {
      padding: 1rem 1.25rem;
      font-size: 1rem;
      min-height: 3rem;
      border-radius: 15px;
    }
  }

  @media (min-width: 1024px) {
    .input {
      padding: 1.125rem 1.5rem;
      font-size: 1.125rem;
      min-height: 3.25rem;
    }
  }
`;

export default Input;
import * as React from "react";
import styled from "styled-components";

import searchIcon from "../../img/search.png";
import theme from "../../styles/theme";

export interface SearchInputProps {
  /**
   * Text to display as placeholder.
   */
  label: string;
  /**
   * Set the type of the underlying input element.
   */
  type?: string;
  /**
   * Enable autocompletion? Default is false.
   */
  autocomplete?: boolean;
  /**
   * Handle change event on input
   */
  handleChange: (e: React.FormEvent<HTMLInputElement>) => void;
}

export const SearchInput = (props: SearchInputProps) => {
  const { type, label, autocomplete, handleChange } = props;

  return (
    <InputWithIconWrapper>
      <InputField
        type={type}
        placeholder={label}
        autoComplete={String(Boolean(autocomplete))}
        onChange={handleChange}
      />
      <IconWrapper>
        <SearchIcon src={searchIcon} alt="logo"></SearchIcon>
      </IconWrapper>
    </InputWithIconWrapper>
  );
};

const InputWithIconWrapper = styled.div`
  display: inline-block;
  position: relative;
  padding: 0;
  width: 100%;
  margin: 0.5rem 0 1rem 0;
  @media ${theme.viewport.m} {
    padding: 0rem;
    min-width: 15rem;
  }
`;

const InputField = styled.input`
  color: ${({ theme }) => theme.colors.secondary};
  margin: 0;
  padding: 0.5rem 1rem 0.5rem 2rem;
  border: none;
  border-bottom: 0.5px solid #666;
  background-color: ${({ theme }) => theme.colors.white};
  display: block;
  font-size: 1rem;
  left: 1rem;
  width: 100%;
  outline: none;
  position: relative;
  &::placeholder {
    color: ${({ theme }) => theme.colors.secondary};
    opacity: 0.7;
    font-size: 1rem;
    font-weight: 300;
  }
  &:focus,
  &:active {
    border-color: transparent;
    border-bottom: 1px solid ${({ theme }) => theme.colors.primary};
  }
`;

const IconWrapper = styled.div`
  width: 1rem;
  display: block;

  position: absolute;
  top: 0.2rem;
  left: 1rem;
`;

const SearchIcon = styled.img`
  height: 15px;
  padding: 0.5rem;
`;

import styled from 'styled-components';

export const FormWrapper = styled.div`
  form {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 30vw;
    height: auto;
    padding: 1.25rem;
  }

  input {
    display: flex;
    margin: 0.3125rem;
    padding: 0.625rem;
    width: 100%;
    height: 1.5rem;
    line-height: 1.5;
    border-top-width: 0;
    border-left-width: 0;
    border-right-width: 0;
    border-bottom-width: 0.0625rem;
    border-color: rgb(208 215 217);
    background-color: rgb(244 246 246);
    color: rgb(48 56 57);
  }

  button {
    background-color: var(--submit-button-color-two);
    border: none;
    color: #fff;
    padding: 0.625rem 1.875rem;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    margin: 0.625rem 0.125rem;
    cursor: pointer;
    width: 100%;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const SecondHeaderLogIn = styled.h2`
  font-family: var(--second-headings-font-family-two);
  font-weight: 600;
  text-transform: uppercase;
  color: var(--second-headings-font-color-two);
  text-align: left;
`;

export const LineBeforeAndAfter = styled.span`
  position: relative;
  color: var(--second-headings-font-color-two);
  font-weight: 600;

  &::before,
  &::after {
    content: '';
    position: absolute;
    width: 16rem;
    height: 0.0625rem;
    background-color: var(--second-headings-font-color-two);
    top: 50%;
    transform: translateY(-50%);
  }

  &::before {
    right: 100%;
    margin-right: 0.625rem; /* Adjust this value to control the distance between the line and the word */
  }

  &::after {
    left: 100%;
    margin-left: 0.625rem; /* Adjust this value to control the distance between the line and the word */
  }
`;

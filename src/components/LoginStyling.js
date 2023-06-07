import styled from 'styled-components';

export const OuterWrapper = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
  justify-content: center;
  text-align: center;
  /* border: solid black; */
`;

export const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  /* border: solid green; */
`;

export const FormWrapper = styled.div`
  form {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 30vw;
    height: auto;
    padding: 20px;
    /* border: solid blue; */
  }
  input {
    display: flex;
    margin: 5px;
    padding: 10px;
    width: 100%;
    height: 1.5rem;
    line-height: 1.5;
    border-top-width: 0;
    border-left-width: 0;
    border-right-width: 0;
    border-bottom-width: 1px;
    border-color: rgb(208 215 217);
    background-color: rgb(244 246 246);
    color: rgb(48 56 57);
  }
  button {
    background-color: var(--submit-button-color-two);
    border: none;
    color: #fff;
    padding: 10px 30px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    margin: 10px 2px;
    cursor: pointer;
    width: 100%;
  }
  /* label {
    color: red;
  } */
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  /* border: solid red; */
`;

export const SecondHeaderLogIn = styled.h2`
/* font-family: var(--second-headings-font-family-two); */
font-weight: 600;
text-transform: uppercase;
color: var(--second-headings-font-color-two);
text-align: left;
`;

// export const StyledLabel = styled.label`
//     text-align: left;
//     display: flex;
//     align-items: center;
//     justify-content: flex-start;
//     color: red;
// `

export const LineBeforeAndAfter = styled.span`
  position: relative;
  color: var(--second-headings-font-color-two);
  font-weight: 600;

  &::before,
  &::after {
    content: '';
    position: absolute;
    width: 18rem;
    height: 1px;
    background-color: var(--second-headings-font-color-two);
    top: 50%;
    transform: translateY(-50%);
  }

  &::before {
    right: 100%;
    margin-right: 10px; /* Adjust this value to control the distance between the line and the word */
  }

  &::after {
    left: 100%;
    margin-left: 10px; /* Adjust this value to control the distance between the line and the word */
  }
`;
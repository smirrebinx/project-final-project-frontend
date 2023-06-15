import styled from 'styled-components';

export const Flexbox = styled.div`
  display: flex;
`;

export const FlexboxUserInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
`;

export const SecondHeaderUserInfo = styled.h2`
  font-family: var(--second-headings-font-family-two);
  font-weight: 600;
  font-size: 1rem;
  text-transform: uppercase;
  color: var(--second-headings-font-color-two);
  text-align: left;
`;

export const ParagraphUserInfo = styled.p`
  font-family: var(--second-headings-font-family-two);
  font-size: 1.1rem;
  text-align: left;
`;

export const StyledLegend = styled.legend`
  font-family: var(--second-headings-font-family-two);
  font-weight: 600;
  font-size: 1rem;
  text-transform: uppercase;
  color: var(--second-headings-font-color-two);
`;

export const StyledFieldset = styled.fieldset`
  margin-top: 2rem;
`;

import React from 'react';
import { ImageContainer, SecondHeader } from './WelcomePageStyling';
import Header from './Header';

const WelcomePage = () => {
  return (
    <>
      <Header />
      <ImageContainer>
        <SecondHeader>Eco-Friendly</SecondHeader>
      </ImageContainer>
    </>
  )
};

export default WelcomePage;
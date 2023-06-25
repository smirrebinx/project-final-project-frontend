import React from 'react';
import { Player } from '@lottiefiles/react-lottie-player';
import { InnerWrapper, StyledLink } from './GlobalStyling';

const NotFound = ({ loader }) => {
  if (loader) {
    return (
      <InnerWrapper>
        <h1>Page Not Found</h1>
        <Player
          src="https://assets6.lottiefiles.com/private_files/lf30_vjigkpcg.json"
          className="lottie"
          loop
          autoplay
          speed={1}
          style={{ height: '20rem', width: '60%' }}
          aria-label="404 Not Found" />
        <InnerWrapper>
          <StyledLink to="/">Go to the home page</StyledLink>
        </InnerWrapper>
      </InnerWrapper>
    );
  }
};

export default NotFound;

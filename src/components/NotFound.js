import React from 'react';
import { Player } from '@lottiefiles/react-lottie-player';
import { InnerWrapper, StyledLink } from './GlobalStyling';

const NotFound = ({ loader }) => {
  if (loader) {
    return (
      <>
        <Player
          src="https://assets6.lottiefiles.com/private_files/lf30_vjigkpcg.json"
          className="lottie"
          loop
          autoplay
          speed={1}
          style={{ height: '30rem', width: '30rem' }}
          aria-label="404 Not Found" />
        <InnerWrapper><StyledLink to="/">Go to the home page</StyledLink></InnerWrapper>
      </>
    );
  }
}

export default NotFound;


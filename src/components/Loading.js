import React from 'react';
import { Player } from '@lottiefiles/react-lottie-player';
import { LoadingContainer } from './LoadingStyling';

const Loading = () => {
  return (
    <LoadingContainer>
      <Player
        src="https://assets10.lottiefiles.com/packages/lf20_jookyeva.json"
        className="lottie"
        loop
        autoplay
        speed={1}
        style={{ height: '600px', width: '600px' }} />
    </LoadingContainer>
  );
}

export default Loading

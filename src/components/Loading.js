import React from 'react';
import { Player } from '@lottiefiles/react-lottie-player';

const Loading = () => {
  return (
    <Player
      src="https://assets10.lottiefiles.com/packages/lf20_jookyeva.json"
      className="lottie"
      loop
      autoplay
      speed={1}
      style={{ height: '37.5rem', width: '37.5rem' }}
      aria-label="Loading" />
  );
}

export default Loading

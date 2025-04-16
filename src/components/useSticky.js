/* eslint-disable max-len */
import { useEffect, useRef, useState } from 'react';

// https://saltares.com/sticky-nav-bar-on-scroll-with-react-hooks/ January 23, 2022
const useSticky = () => {
  // Create a ref to hold a reference to a DOM element
  const stickyRef = useRef(null);
  // Create a state to hold a boolean value to indicate if the element is sticky
  const [sticky, setSticky] = useState(false);
  // Create a state to hold the vertical offset of the element
  const [offset, setOffset] = useState(0);

  // Update the offset state when the stickyRef state is updated
  useEffect(() => {
    if (!stickyRef.current) {
      return;
    }

    // Get the offsetTop of the element and set it as the offset state
    setOffset(stickyRef.current.offsetTop);
  }, [stickyRef, setOffset]);

  // Listen for the scroll event and update the sticky state
  useEffect(() => {
    // Define a function that will handle the scroll event
    const handleScroll = () => {
      if (!stickyRef.current) {
        return;
      }

      // If the window's scrollY position is greater than the element's offset, set sticky state to true
      setSticky(window.scrollY > offset);
    };

    // Add an event listener for the scroll event
    window.addEventListener('scroll', handleScroll);

    // Return a cleanup function that removes the event listener
    return () => window.removeEventListener('scroll', handleScroll);
  }, [setSticky, stickyRef, offset]);

  // Return the stickyRef and sticky state as an object
  return { stickyRef, sticky };
};

export default useSticky;

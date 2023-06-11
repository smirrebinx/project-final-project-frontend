import React from 'react';
import classNames from 'classnames';
import { usePickedDate } from './Booking';
import Footer from './Footer';
import useSticky from './useSticky';
import { OuterWrapper } from './GlobalStyling';
import { StickyNavTwo, StyledNavHeaderTwo } from './NavbarStyling';

const UserInfo = () => {
  const { sticky, stickyRef } = useSticky();
  const pickedDate = usePickedDate();

  // Use the pickedDate value in the component

  return (
    <>
      <StickyNavTwo ref={stickyRef} className={classNames({ sticky })}>
        <StyledNavHeaderTwo>Log In or Register</StyledNavHeaderTwo>
      </StickyNavTwo>
      <OuterWrapper>
        <div>
          <h1>User Information</h1>
          <p>Picked Date: {pickedDate}</p>
        </div><Footer />
      </OuterWrapper>
    </>
  );
};

export default UserInfo;

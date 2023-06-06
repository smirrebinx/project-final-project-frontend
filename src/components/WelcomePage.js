import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import Header from './Header';
import useSticky from './useSticky';
import { LogInButton, StickyNav, StyledLinkWrapper } from './NavbarStyling';

const WelcomePage = () => {
  const { sticky, stickyRef } = useSticky();
  return (
    <>
      <StickyNav ref={stickyRef} className={classNames({ sticky })}>
        <StyledLinkWrapper className="styled-link-wrapper">
          <Link to="/login">
            <LogInButton>Book Treament</LogInButton>
          </Link>
        </StyledLinkWrapper>
      </StickyNav>
      <Header />
    </>

  )
};

export default WelcomePage;
import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import Header from './Header';
import useSticky from './useSticky';
import { GoToTreatmentButton, StickyNav, StyledLinkWrapper } from './NavbarStyling';
import Footer from './Footer';

const WelcomePage = () => {
  const { sticky, stickyRef } = useSticky();
  return (
    <>
      <StickyNav ref={stickyRef} className={classNames({ sticky })}>
        <StyledLinkWrapper className="styled-link-wrapper">
          <Link to="/cards">
            <GoToTreatmentButton>Book Treatment</GoToTreatmentButton>
          </Link>
        </StyledLinkWrapper>
      </StickyNav>
      <Header />
      <Footer />
    </>

  )
};

export default WelcomePage;
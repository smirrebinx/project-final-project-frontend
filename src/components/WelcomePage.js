/* eslint-disable max-len */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/no-array-index-key */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import Header from './Header';
import useSticky from './useSticky';
import { GoToTreatmentButton, StickyNav, StyledLinkWrapper } from './NavbarStyling';
// import Footer from './Footer';
import { CardReview } from './GlobalStyling';
import { ContentContainer, PageContainer } from './FooterStyling';

const WelcomePage = () => {
  // Hook to track sticky behavior of navigation
  const { sticky, stickyRef } = useSticky();
  const userReviews = [
    // User reviews content
    <span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        viewBox="0 0 1792 1792"
        role="img"
        fill="black"
        className="fa-icon"
        aria-label="Icon depicting quote-left">
        {/* Quote-left icon */}
        <path d="M832 960v384q0 80-56 136t-136 56h-384q-80 0-136-56t-56-136v-704q0-104 40.5-198.5t109.5-163.5
        163.5-109.5 198.5-40.5h64q26 0 45 19t19 45v128q0 26-19 45t-45
        19h-64q-106 0-181 75t-75 181v32q0 40 28 68t68 28h224q80 0 136 56t56 136zm896 0v384q0 80-56 136t-136 56h-384q-80
        0-136-56t-56-136v-704q0-104 40.5-198.5t109.5-163.5
        163.5-109.5 198.5-40.5h64q26 0 45 19t19 45v128q0 26-19 45t-45 19h-64q-106 0-181 75t-75 181v32q0 40 28 68t68 28h224q80 0 136 56t56 136z" />
      </svg>
      The hair salon has a great online booking system that makes scheduling appointments a breeze.
      I love the convenience of being able to book my appointments anytime, anywhere.
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        viewBox="0 0 1792 1792"
        role="img"
        fill="black"
        className="fa-icon"
        aria-label="Icon depicting quote-right">
        {/* Quote-right icon */}
        <path d="M832 320v704q0 104-40.5 198.5t-109.5 163.5-163.5 109.5-198.5 40.5h-64q-26 0-45-19t-19-45v-128q0-26
        19-45t45-19h64q106 0 181-75t75-181v-32q0-40-28-68t-68-28h-224q-80
      0-136-56t-56-136v-384q0-80 56-136t136-56h384q80 0 136 56t56 136zm896 0v704q0 104-40.5 198.5t-109.5 163.5-163.5 109.5-198.5
      40.5h-64q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h64q106
      0 181-75t75-181v-32q0-40-28-68t-68-28h-224q-80 0-136-56t-56-136v-384q0-80 56-136t136-56h384q80 0 136 56t56 136z" />
      </svg>
    </span>
  ];

  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);

  useEffect(() => {
    // Auto-rotate user reviews every minute
    if (userReviews.length > 1) {
      const interval = setInterval(() => {
        setCurrentReviewIndex((prevIndex) => (prevIndex + 1) % userReviews.length);
      }, 60000);
      return () => {
        clearInterval(interval);
      };
    }
  }, [userReviews.length]);

  return (
    <>
      {/* Sticky navigation */}
      <StickyNav ref={stickyRef} className={classNames({ sticky })}>
        <StyledLinkWrapper className="styled-link-wrapper">
          <Link to="/treatment">
            <GoToTreatmentButton>Book Treatment</GoToTreatmentButton>
          </Link>
        </StyledLinkWrapper>
      </StickyNav>
      <PageContainer>
        <ContentContainer>
          <Header />
          {userReviews.map((review, index) => (
            <CardReview key={index} style={{ display: currentReviewIndex === index ? 'block' : 'none' }}>
              {review}
            </CardReview>
          ))}
        </ContentContainer>
        {/* <Footer /> */}
      </PageContainer>
    </>
  );
};

export default WelcomePage;
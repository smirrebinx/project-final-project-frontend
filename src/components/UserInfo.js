/* eslint-disable max-len */
/* eslint-disable */
import React from 'react';
import { useSelector } from 'react-redux';
import classNames from 'classnames';
import { usePickedDate } from './Booking';
import Footer from './Footer';
import useSticky from './useSticky';
import { InnerWrapper, OuterWrapper, StyledLink, StyledParagraphAnimation } from './GlobalStyling';
import { StickyNavTwo, StyledNavHeaderTwo } from './NavbarStyling';
import { ParagraphUserInfo, SecondHeaderUserInfo } from './UserInfoStyling';
import LogoutButton from './Logout';

const UserInfo = () => {
  const { sticky, stickyRef } = useSticky();
  const pickedDate = usePickedDate();

  // Retrieve user information from the Redux store
  const firstName = useSelector((state) => state.user.firstName);
  const lastName = useSelector((state) => state.user.lastName);
  const registerEmail = useSelector((state) => state.user.email);
  const mobilePhone = useSelector((state) => state.user.mobilePhone);

  // Retrieve the user access token from the Redux store or local storage
  const userAccessToken = useSelector((state) => state.user.accessToken || localStorage.getItem('accessToken'));

  const bookedTreatments = useSelector((state) => state.user.bookedTreatments);

  return (
    <>
      {/* Logout button */}
      <LogoutButton>Log Out</LogoutButton>

      {/* Sticky navigation header */}
      <StickyNavTwo ref={stickyRef} className={classNames({ sticky })}>
        <StyledNavHeaderTwo>User Information</StyledNavHeaderTwo>
      </StickyNavTwo>

      {/* Outer wrapper */}
      <OuterWrapper>
        <InnerWrapper>
          {userAccessToken ? (
            <>
              {/* Display user contact information */}
              <SecondHeaderUserInfo>Your Contact Information</SecondHeaderUserInfo>
              <ParagraphUserInfo>{firstName}</ParagraphUserInfo>
              <ParagraphUserInfo>{lastName}</ParagraphUserInfo>
              <ParagraphUserInfo>{mobilePhone}</ParagraphUserInfo>
              <ParagraphUserInfo>{registerEmail}</ParagraphUserInfo>

              {/* Display booked treatments */}
              <SecondHeaderUserInfo>Booked Treatments</SecondHeaderUserInfo>
              <InnerWrapper>
                {bookedTreatments && bookedTreatments.length > 0 ? (
                  // Map through booked treatments and display the details
                  bookedTreatments.map((treatment) => (
                    <div key={treatment.id}>
                      <ParagraphUserInfo>Picked Date: {pickedDate}</ParagraphUserInfo>
                      <ParagraphUserInfo>{treatment.name}</ParagraphUserInfo>
                    </div>
                  ))
                ) : (
                  // Display message if no treatments are booked
                  <ParagraphUserInfo>No booked treatments</ParagraphUserInfo>
                )}
              </InnerWrapper>
            </>
          ) : (
            // Display message if user is not logged in
            <div>
              <StyledParagraphAnimation> Please log in to see your information and booked treatments.</StyledParagraphAnimation>
              <StyledLink to="/login">Log in</StyledLink>
            </div>
          )}
        </InnerWrapper>
      </OuterWrapper>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default UserInfo;

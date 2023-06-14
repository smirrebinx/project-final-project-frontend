/* eslint-disable max-len */
// UserInfo.js

import React from 'react';
import { useSelector } from 'react-redux';
import classNames from 'classnames';
// import { usePickedDate } from './Booking';
import useSticky from './useSticky';
import { InnerWrapper, OuterWrapper, StyledLink, StyledParagraphAnimation } from './GlobalStyling';
import { StickyNavTwo, StyledNavHeaderTwo } from './NavbarStyling';
import { ParagraphUserInfo, SecondHeaderUserInfo } from './UserInfoStyling';
import LogoutButton from './Logout';

const UserInfo = () => {
  const { sticky, stickyRef } = useSticky();
  // const [pickedDate] = usePickedDate(); // Get the pickedDate from the hook

  // Retrieve user information from the Redux store
  const user = useSelector((state) => state.user);
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
          {user.accessToken ? (
            <>
              {/* Display user contact information */}
              <SecondHeaderUserInfo>Your Contact Information</SecondHeaderUserInfo>
              <ParagraphUserInfo>{user.firstName}</ParagraphUserInfo>
              <ParagraphUserInfo>{user.lastName}</ParagraphUserInfo>
              <ParagraphUserInfo>{user.mobilePhone}</ParagraphUserInfo>
              <ParagraphUserInfo>{user.email}</ParagraphUserInfo>

              {/* Display booked treatments */}
              <SecondHeaderUserInfo>Booked Treatments</SecondHeaderUserInfo>
              <InnerWrapper>
                {bookedTreatments && bookedTreatments.length > 0 ? (
                  // Map through booked treatments and display the details
                  bookedTreatments.map((treatment) => (
                    <div key={treatment.id}>
                      {/* <ParagraphUserInfo>Picked Date: {pickedDate.toLocaleDateString('en-GB')}</ParagraphUserInfo> */}
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
              <StyledParagraphAnimation>Please log in to see your information and booked treatments.</StyledParagraphAnimation>
              <StyledLink to="/login">Log in</StyledLink>
            </div>
          )}
        </InnerWrapper>
      </OuterWrapper>
    </>
  );
};

export default UserInfo;

/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable max-len */
// UserInfo.js

import React from 'react';
import { useSelector } from 'react-redux';
import classNames from 'classnames';
// import { usePickedDate } from './Booking';
import useSticky from './useSticky';
import { InnerWrapper, OuterWrapper, StyledLink, StyledParagraphAnimation } from './GlobalStyling';
import { StickyNavTwo, StyledNavHeaderTwo } from './NavbarStyling';
import { FlexboxUserInfo, ParagraphUserInfo, StyledFieldset, StyledLegend } from './UserInfoStyling';

const UserInfo = () => {
  const { sticky, stickyRef } = useSticky();
  // const [pickedDate] = usePickedDate(); // Get the pickedDate from the hook

  // Retrieve user information from the Redux store
  const user = useSelector((state) => state.user);
  // const bookedTreatments = useSelector((state) => state.user.bookedTreatments);
  const bookedTreatment = useSelector((state) => state.treatments.selectedTreatment);
  console.log(bookedTreatment);

  return (
    <>

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
              <StyledFieldset>
                <StyledLegend>User information</StyledLegend>
                <div className="flex">
                  <div className="image">
                    <img src="../assets/account_circle_FILL0_wght100_GRAD0_opsz48.svg" alt="" />
                  </div>
                  <FlexboxUserInfo className="user">
                    <ParagraphUserInfo>First name: {user.firstName}</ParagraphUserInfo>
                    <ParagraphUserInfo>Last name: {user.lastName}</ParagraphUserInfo>
                    <ParagraphUserInfo>Phone: {user.mobilePhone}</ParagraphUserInfo>
                    <ParagraphUserInfo>Email: {user.email}</ParagraphUserInfo>
                  </FlexboxUserInfo>
                </div>
              </StyledFieldset>
              {/* Display booked treatments */}
              <StyledFieldset>
                <StyledLegend>Upcoming bookings</StyledLegend>
                <InnerWrapper>
                  {bookedTreatment ? (
                  // Map through booked treatments and display the details
                    <div>
                      {/* <ParagraphUserInfo>Picked Date: {pickedDate.toLocaleDateString('en-GB')}</ParagraphUserInfo> */}
                      <ParagraphUserInfo>Treatment: {bookedTreatment.name}</ParagraphUserInfo>
                    </div>
                  ) : (
                    // Display message if no treatments are booked
                    <ParagraphUserInfo>No booked treatments</ParagraphUserInfo>
                  )}
                </InnerWrapper>
              </StyledFieldset>
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

/* eslint-disable max-len */
import React from 'react';
import { useSelector } from 'react-redux';
import classNames from 'classnames';
import useSticky from './useSticky';
import { InnerWrapper, OuterWrapper, StyledLink, StyledParagraphAnimation } from './GlobalStyling';
import { StickyNavTwo, StyledNavHeaderTwo } from './NavbarStyling';
import { Flexbox, FlexboxUserInfo, ParagraphUserInfo, StyledFieldset, StyledImage, StyledLegend } from './UserInfoStyling';
import svgIcon from '../assets/account_circle_FILL0_wght100_GRAD0_opsz48.svg';

const UserInfo = ({ pickedDate }) => {
  const { sticky, stickyRef } = useSticky();

  // Retrieve user information from the Redux store
  const user = useSelector((state) => state.user);
  const bookedTreatment = useSelector((state) => state.treatments.selectedTreatment);

  console.log('Picked Date:', pickedDate); // Add this console log

  return (
    <>
      {/* Sticky navigation header */}
      <StickyNavTwo ref={stickyRef} className={classNames({ sticky })}>
        <StyledNavHeaderTwo>User Information</StyledNavHeaderTwo>
      </StickyNavTwo>

      <OuterWrapper>
        <InnerWrapper>
          {user.accessToken ? (
            <>
              {/* Display user contact information */}
              <StyledFieldset>
                <StyledLegend>User information</StyledLegend>
                <Flexbox>
                  <StyledImage src={svgIcon} alt="SVG Icon" />
                  <FlexboxUserInfo className="user">
                    <ParagraphUserInfo>First name: {user.firstName}</ParagraphUserInfo>
                    <ParagraphUserInfo>Last name: {user.lastName}</ParagraphUserInfo>
                    <ParagraphUserInfo>Phone: {user.mobilePhone}</ParagraphUserInfo>
                    <ParagraphUserInfo>Email: {user.email}</ParagraphUserInfo>
                  </FlexboxUserInfo>
                </Flexbox>
              </StyledFieldset>
              {/* Display picked date and booked treatments */}
              <StyledFieldset>
                <StyledLegend>Upcoming bookings</StyledLegend>
                <ParagraphUserInfo>Treatment Date: {pickedDate?.toLocaleDateString('en-GB')}</ParagraphUserInfo>
                {bookedTreatment ? (
                  <ParagraphUserInfo>Treatment: {bookedTreatment.name}</ParagraphUserInfo>
                ) : (
                  // Display message if no treatments are booked
                  <ParagraphUserInfo>No booked treatments</ParagraphUserInfo>
                )}
              </StyledFieldset>
            </>
          ) : (
            // Display message if user is not logged in
            <FlexboxUserInfo>
              <StyledParagraphAnimation>Please log in to see your information and booked treatments.</StyledParagraphAnimation>
              <StyledLink to="/login">Log in</StyledLink>
            </FlexboxUserInfo>
          )}
        </InnerWrapper>
      </OuterWrapper>
    </>
  );
};

export default UserInfo;

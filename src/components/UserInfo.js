/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable max-len */
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import classNames from 'classnames';
import useSticky from './useSticky';
import { InnerWrapper, OuterWrapper, StyledLink, StyledParagraphAnimation } from './GlobalStyling';
import { StickyNavTwo, StyledNavHeaderTwo } from './NavbarStyling';
import { Flexbox, FlexboxUserInfo, ParagraphUserInfo, StyledFieldset, StyledImage, StyledLegend } from './UserInfoStyling';
import svgIcon from '../assets/account_circle_FILL0_wght100_GRAD0_opsz48.svg';
import { API_URL } from '../utils/urls';

const UserInfo = () => {
  const { sticky, stickyRef } = useSticky();
  const [pickedDate, setPickedDate] = useState(null); // Add state for picked date
  const user = useSelector((state) => state.user);
  const bookedTreatment = useSelector((state) => state.treatments.selectedTreatment);

  useEffect(() => {
    const fetchPickedDate = async () => {
      const url = API_URL('bookedTreatment');

      const options = {
        method: 'GET',
        headers: {
          Authorization: user.accessToken
        }
      };

      try {
        const response = await fetch(url, options);
        const data = await response.json();
        if (data.success && data.bookedTreatments.length > 0) {
          const latestBooking = data.bookedTreatments[data.bookedTreatments.length - 1];
          setPickedDate(latestBooking.date);
        }
      } catch (error) {
        console.log('Error occurred while fetching picked date:', error);
      }
    };

    if (user.accessToken) {
      fetchPickedDate();
    }
  }, [user.accessToken]);

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
              {/* Display picked date */}
              <StyledFieldset>
                <StyledLegend>Upcoming bookings</StyledLegend>
                {pickedDate ? (
                  <>
                    <ParagraphUserInfo>Picked Date: {pickedDate}</ParagraphUserInfo>
                    <ParagraphUserInfo>Treatment: {bookedTreatment ? bookedTreatment.name : ''}</ParagraphUserInfo>
                  </>
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

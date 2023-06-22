/* eslint-disable max-len */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import classNames from 'classnames';
import useSticky from './useSticky';
import { InnerWrapper, OuterWrapper, StyledLink, StyledParagraphAnimation } from './GlobalStyling';
import { StickyNavTwo, StyledNavHeaderTwo } from './NavbarStyling';
import { Flexbox, FlexboxUserInfo, ParagraphUserInfo, StyledFieldset, StyledImage, StyledLegend } from './UserInfoStyling';
import svgIcon from '../assets/account_circle_FILL0_wght100_GRAD0_opsz48.svg';
import { API_URL } from '../utils/urls';

const UserInfo = () => {
  const { sticky, stickyRef } = useSticky();
  const dispatch = useDispatch();

  // Retrieve user information from the Redux store
  const user = useSelector((state) => state.user);
  const bookedTreatment = useSelector((state) => state.treatments.selectedTreatment);

  const url = API_URL('bookedTreatment');

  useEffect(() => {
    const fetchBookedTreatment = async () => {
      try {
        console.log('Fetching booked treatment...'); // Log before fetch
        const response = await fetch(url, {
          method: 'GET',
          headers: {
            Authorization: user.accessToken
          }
        });

        console.log('Fetch completed:', response); // Log after fetch
        if (response.ok) {
          // Handle successful response and update the Redux store with booked treatments
          // For example, dispatch an action to update the booked treatments in the Redux store
          dispatch(/* your action here */);
        } else {
          // Handle unsuccessful response and display an error message to the user
        }
      } catch (error) {
        // Handle any errors that occurred during the request
        console.error(error);
      }
    };

    if (user.accessToken) {
      fetchBookedTreatment();
    }
  }, [url, user.accessToken, dispatch]);

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
                <ParagraphUserInfo>Treatment Date: </ParagraphUserInfo>
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

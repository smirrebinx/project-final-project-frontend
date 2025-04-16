/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable max-len */
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import classNames from 'classnames';
import useSticky from './useSticky';
import { InnerWrapper, OuterWrapper, StyledHomeImage, StyledLink, StyledParagraphAnimation } from './GlobalStyling';
import { StickyNavTwo, StyledNavHeaderTwo } from './NavbarStyling';
import { Flexbox, FlexboxUserInfo, ParagraphUserInfo, StyledFieldset, StyledImage, StyledLegend } from './UserInfoStyling';
import svgIcon from '../assets/account_circle_FILL0_wght100_GRAD0_opsz48.svg';
import HomeImage from '../assets/images/HomeImage.jpg';
import { API_URL } from '../utils/urls';
import NavbarMenu from './NavbarMenu';

const UserInfo = () => {
  const { sticky, stickyRef } = useSticky();
  const [pickedDate, setPickedDate] = useState(null); // Add state for picked date
  const user = useSelector((state) => state.user);
  const bookedTreatment = useSelector((state) => state.treatments.selectedTreatment);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
      <a href="/"><StyledHomeImage src={HomeImage} alt="Home page" title="Home" /></a>
      {/* Sticky navigation header */}
      <StickyNavTwo ref={stickyRef} className={classNames({ sticky, 'menu-open': isMenuOpen })}>
        <StyledNavHeaderTwo>User Information</StyledNavHeaderTwo>
        <NavbarMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
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
                    <ParagraphUserInfo>
                      <strong>First name:</strong>
                      {' '}
                      {user.firstName}
                    </ParagraphUserInfo>
                    <ParagraphUserInfo>
                      <strong>Last name:</strong>
                      {' '}
                      {user.lastName}
                    </ParagraphUserInfo>
                    <ParagraphUserInfo>
                      <strong>Phone:</strong>
                      {' '}
                      {user.mobilePhone}
                    </ParagraphUserInfo>
                    <ParagraphUserInfo>
                      <strong>Email:</strong>
                      {' '}
                      {user.email}
                    </ParagraphUserInfo>
                  </FlexboxUserInfo>
                </Flexbox>
              </StyledFieldset>
              {/* Display picked date */}
              <StyledFieldset>
                <StyledLegend>Upcoming bookings</StyledLegend>
                {pickedDate ? (
                  <>
                    <ParagraphUserInfo>
                      <strong>Picked Date:</strong>
                      {' '}
                      {new Date(pickedDate).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
                    </ParagraphUserInfo>
                    <ParagraphUserInfo>
                      <strong>Treatment:</strong>
                      {' '}
                      {bookedTreatment ? bookedTreatment.name : ''}
                    </ParagraphUserInfo>
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

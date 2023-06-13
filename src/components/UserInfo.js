/* eslint-disable max-len */
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
  const firstName = useSelector((state) => state.user.firstName);
  const lastName = useSelector((state) => state.user.lastName);
  const registerEmail = useSelector((state) => state.user.registerEmail);
  const mobilePhone = useSelector((state) => state.user.mobilePhone);
  const userAccessToken = useSelector((store) => store.user.accessToken || localStorage.getItem('accessToken'));
  const bookedTreatments = useSelector((state) => state.user.bookedTreatments);

  return (
    <>
      <LogoutButton>Log Out</LogoutButton>
      <StickyNavTwo ref={stickyRef} className={classNames({ sticky })}>
        <StyledNavHeaderTwo>User Information</StyledNavHeaderTwo>
      </StickyNavTwo>
      <OuterWrapper>
        <InnerWrapper>
          {userAccessToken ? (
            <>
              <SecondHeaderUserInfo>Your Contact Information</SecondHeaderUserInfo>
              <ParagraphUserInfo>{firstName}</ParagraphUserInfo>
              <ParagraphUserInfo>{lastName}</ParagraphUserInfo>
              <ParagraphUserInfo>{mobilePhone}</ParagraphUserInfo>
              <ParagraphUserInfo>{registerEmail}</ParagraphUserInfo>
              <SecondHeaderUserInfo>Booked Treatments</SecondHeaderUserInfo>
              <InnerWrapper>
                {bookedTreatments && bookedTreatments.length > 0 ? (
                  bookedTreatments.map((treatment) => (
                    <div key={treatment.id}>
                      <ParagraphUserInfo>Picked Date: {pickedDate}</ParagraphUserInfo>
                      <ParagraphUserInfo>{treatment.name}</ParagraphUserInfo>
                    </div>
                  ))
                ) : (
                  <ParagraphUserInfo>No booked treatments</ParagraphUserInfo>
                )}
              </InnerWrapper>
            </>
          ) : (
            <div>
              <StyledParagraphAnimation> Please log in to see your information and booked treatments.</StyledParagraphAnimation>
              <StyledLink to="/login">Log in</StyledLink>
            </div>
          )}
        </InnerWrapper>
      </OuterWrapper>
      <Footer />
    </>
  );
};

export default UserInfo;

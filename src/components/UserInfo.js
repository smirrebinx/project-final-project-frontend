/* eslint-disable no-underscore-dangle */
/* eslint-disable max-len */
import React from 'react';
import { useSelector } from 'react-redux';
import classNames from 'classnames';
import { usePickedDate } from './Booking';
import Footer from './Footer';
import useSticky from './useSticky';
import { OuterWrapper, StyledLink } from './GlobalStyling';
import { StickyNavTwo, StyledNavHeaderTwo } from './NavbarStyling';
import { FlexboxUserInfo, InnerWrapperUserInfo, ParagraphUserInfo, SecondHeaderUserInfo } from './UserInfoStyling';

const UserInfo = () => {
  const { sticky, stickyRef } = useSticky();
  const pickedDate = usePickedDate();
  const firstName = useSelector((state) => state.user.firstName);
  const lastName = useSelector((state) => state.user.lastName);
  const registerEmail = useSelector((state) => state.user.registerEmail);
  const mobilePhone = useSelector((state) => state.user.mobilePhone);
  const userAccessToken = useSelector((store) => store.user.accessToken);
  const bookedTreatments = useSelector((state) => state.user.bookedTreatments);
  console.log(userAccessToken);

  return (
    <>
      <StickyNavTwo ref={stickyRef} className={classNames({ sticky })}>
        <StyledNavHeaderTwo>User Information</StyledNavHeaderTwo>
      </StickyNavTwo>
      <OuterWrapper>
        <InnerWrapperUserInfo>
          {userAccessToken ? (
            <>
              <SecondHeaderUserInfo>Your Contact Information</SecondHeaderUserInfo>
              <ParagraphUserInfo>{firstName}</ParagraphUserInfo>
              <ParagraphUserInfo>{lastName}</ParagraphUserInfo>
              <ParagraphUserInfo>{mobilePhone}</ParagraphUserInfo>
              <ParagraphUserInfo>{registerEmail}</ParagraphUserInfo>
              <SecondHeaderUserInfo>Booked Treatments</SecondHeaderUserInfo>
              <FlexboxUserInfo>
                {bookedTreatments.length > 0 ? (
                  bookedTreatments.map((treatment) => (
                    <div key={treatment.id}>
                      <ParagraphUserInfo>Picked Date: {pickedDate}</ParagraphUserInfo>
                      <ParagraphUserInfo>{treatment.name}</ParagraphUserInfo>
                    </div>
                  ))
                ) : (
                  <ParagraphUserInfo>No booked treatments</ParagraphUserInfo>
                )}
              </FlexboxUserInfo>
            </>
          ) : (
            <div>
              <p>Please log in to see your user information and booked treatments.</p>
              <StyledLink to="/login">Log in</StyledLink>
            </div>
          )}
        </InnerWrapperUserInfo>
      </OuterWrapper>
      <Footer />
    </>
  );
};

export default UserInfo;

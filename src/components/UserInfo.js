/* eslint-disable react/jsx-no-comment-textnodes */
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
  const { sticky, stickyRef } = useSticky(); // Using the custom hook to handle sticky behavior
  const pickedDate = usePickedDate(); // Using the custom hook to get the picked date
  const firstName = useSelector((state) => state.user.firstName); // Accessing the first name from the Redux store
  const lastName = useSelector((state) => state.user.lastName); // Accessing the last name from the Redux store
  const registerEmail = useSelector((state) => state.user.registerEmail); // Accessing the registered email from the Redux store
  const mobilePhone = useSelector((state) => state.user.mobilePhone); // Accessing the mobile phone number from the Redux store
  const userAccessToken = useSelector((store) => store.user.accessToken); // Accessing the user's access token from the Redux store
  const bookedTreatments = useSelector((state) => state.user.bookedTreatments); // Accessing the booked treatments from the Redux store
  console.log(userAccessToken);

  return (
    <>
      <StickyNavTwo ref={stickyRef} className={classNames({ sticky })}>
        <StyledNavHeaderTwo>User Information</StyledNavHeaderTwo>
      </StickyNavTwo>
      <OuterWrapper>
        <InnerWrapperUserInfo>
          {userAccessToken ? ( // Checking if the user is logged in
            <>
              <SecondHeaderUserInfo>Your Contact Information</SecondHeaderUserInfo>
              <ParagraphUserInfo>{firstName}</ParagraphUserInfo>
              <ParagraphUserInfo>{lastName}</ParagraphUserInfo>
              <ParagraphUserInfo>{mobilePhone}</ParagraphUserInfo>
              <ParagraphUserInfo>{registerEmail}</ParagraphUserInfo>
              <SecondHeaderUserInfo>Booked Treatments</SecondHeaderUserInfo>
              <FlexboxUserInfo>
                {bookedTreatments.length > 0 ? ( // Checking if there are booked treatments
                  bookedTreatments.map((treatment) => (
                    <div key={treatment.id}>
                      <ParagraphUserInfo>Picked Date: {pickedDate}</ParagraphUserInfo> // Displaying the picked date
                      <ParagraphUserInfo>{treatment.name}</ParagraphUserInfo> // Displaying the treatment name
                    </div>
                  ))
                ) : (
                  <ParagraphUserInfo>No booked treatments</ParagraphUserInfo> // Displaying a message if there are no booked treatments
                )}
              </FlexboxUserInfo>
            </>
          ) : (
            <div>
              <p>Please log in to see your user information and booked treatments.</p>
              <StyledLink to="/login">Log in</StyledLink> // Link to the login page
            </div>
          )}
        </InnerWrapperUserInfo>
      </OuterWrapper>
      <Footer />
    </>
  );
};

export default UserInfo;

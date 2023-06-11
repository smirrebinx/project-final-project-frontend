import React from 'react';
import classNames from 'classnames';
import { usePickedDate } from './Booking';
import Footer from './Footer';
import useSticky from './useSticky';
import { OuterWrapper } from './GlobalStyling';
import { StickyNavTwo, StyledNavHeaderTwo } from './NavbarStyling';
import { FlexboxUserInfo, InnerWrapperUserInfo, ParagraphUserInfo, SecondHeaderUserInfo } from './UserInfoStyling';

const UserInfo = () => {
  const { sticky, stickyRef } = useSticky();
  const pickedDate = usePickedDate();

  // Use the pickedDate value in the component

  return (
    <>
      <StickyNavTwo ref={stickyRef} className={classNames({ sticky })}>
        <StyledNavHeaderTwo>User Information</StyledNavHeaderTwo>
      </StickyNavTwo>
      <OuterWrapper>
        <InnerWrapperUserInfo>
          <SecondHeaderUserInfo>Your Contact Information</SecondHeaderUserInfo>
          <ParagraphUserInfo>firstName</ParagraphUserInfo>
          <ParagraphUserInfo>lastName</ParagraphUserInfo>
          <ParagraphUserInfo>mobilePhone</ParagraphUserInfo>
          <ParagraphUserInfo>registerEmail</ParagraphUserInfo>
          <SecondHeaderUserInfo>Booked Treatments</SecondHeaderUserInfo>
          <FlexboxUserInfo>
            <ParagraphUserInfo>Picked Date: {pickedDate}</ParagraphUserInfo>
            <ParagraphUserInfo>treatment</ParagraphUserInfo>
          </FlexboxUserInfo>
        </InnerWrapperUserInfo>
      </OuterWrapper>
      <Footer />
    </>
  );
};

export default UserInfo;
